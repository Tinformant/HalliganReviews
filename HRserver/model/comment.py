from db import comments, courses, headcount, instrHeadcount, instructors
from bson.objectid import ObjectId
from model.course import CourseModel
from flask import jsonify
import math


class MyException(Exception):
    pass


class CommentModel:
    def __init__(self, username, identity, date, grade, workload, courseOverall, instructorOverall, material,
                 difficulty, accessible, effectiveness, feedback, assessment, text,
                 courseid):
        self.uuid = None
        self.username = username
        self.identity = identity
        self.date = date
        self.grade = grade
        # self.workload = workload
        # self.courseAll = courseOverall
        # self.instructorAll = instructorOverall
        # self.material = material
        # self.difficulty = difficulty
        # self.accessible = accessible
        # self.effectiveness = effectiveness
        # self.feedback = feedback
        self.assessment = assessment
        self.text = text
        self.course = courseid
        self.courseSet = [courseOverall, material, workload, difficulty]
        self.instructorSet = [instructorOverall, accessible, effectiveness, feedback]


    @classmethod
    def find_comments(cls, department, number, subnumber, year, semester):
        idStr = CourseModel.find_id(department, number, subnumber, year, semester)
        if not idStr:
            return None
        cursor = comments.find({'course': ObjectId(idStr)})
        container = []
        if cursor:
            for x in cursor:
                container.append({'username': x['username'], 'identity': x['identity'], 'date': x['date'],
                                  'grade': x['grade'], 'workload': x['workload'], 'courseOverall': x['courseAll'],
                                  'instructorOverall': x['instructorAll'], 'assessment': x['assessment'],
                                  'text': x['text']})
            return {'Data': container}


    def save_to_db(self):
        comment = {
            "username": self.username,
            "identity": self.identity,
            "date": self.date,
            "grade": self.grade,
            "workload": self.courseSet[2],
            "courseAll": self.courseSet[0],
            "instructorAll": self.instructorSet[0],
            "material": self.courseSet[1],
            "difficulty": self.courseSet[3],
            "accessible": self.instructorSet[1],
            "effectiveness": self.instructorSet[2],
            "feedback": self.instructorSet[3],
            "assessment": self.assessment,
            "text": self.text,
            "course": ObjectId(self.course)
        }
        self.uuid = ObjectId(comments.insert(comment))
        courses.update_one({"_id": ObjectId(self.course)}, {"$push": {"comments": self.uuid}})
        profid = courses.find_one({"_id": ObjectId(self.course)})["instructorids"][0]
        instructors.update_one({"_id": profid}, {"$push": {"comments": self.uuid}})

    def update_course_headcount(self, tag, index):
        def setworkload(work):
            if work <= 3:
                return 0
            elif 6 >= work > 3:
                return 1
            elif 10 >= work > 6:
                return 2
            elif 14 >= work > 10:
                return 3
            elif work > 14:
                return 4

        workload = int(self.courseSet[2])
        """the score cannot be less than 1!"""
        allindex = setworkload(workload) if tag == "workload" else int(math.floor(float(self.courseSet[index]))) - 1
        headcount.update_one({"courseid": ObjectId(self.course)}, {"$inc": {tag + "." + str(allindex): 1}})

    def update_course(self, tag, index):
        course = courses.find_one({"_id": ObjectId(self.course)})
        commentNum = len(course['comments'])
        average = float(course['courseData'][index]['average'])
        total = average * (commentNum - 1) + float(self.courseSet[index])
        average = '%.2f' % (total / commentNum)
        heads = headcount.find_one({"courseid": ObjectId(self.course)})[tag]
        # if commentNum != sum(heads):
        #     raise MyException("course and headcount data inconsistency.")
        for i in range(5):
            heads[i] = float('%.2f' % (float(heads[i]) / commentNum))
        courses.update_one({"_id": ObjectId(self.course)}, {
            "$set": {"courseData." + str(index) + ".distribution": heads,
                     "courseData." + str(index) + ".average": str(average)}})

    def update_instructor_headcount(self, tag, index):
        allindex = int(math.floor(float(self.instructorSet[index]))) - 1
        """assuming only one instructor"""
        profid = courses.find_one({"_id": ObjectId(self.course)})["instructorids"][0]
        instrHeadcount.update_one({"instructorid": ObjectId(profid)}, {"$inc": {tag + "." + str(allindex): 1}})

    def update_instructor(self, tag, index):
        """assuming only one instructor"""
        profid = courses.find_one({"_id": ObjectId(self.course)})["instructorids"][0]
        instructor = instructors.find_one({"_id": ObjectId(profid)})
        commentNum = len(instructor['comments'])
        average = float(instructor['instructorData'][index]['average'])
        total = average * (commentNum - 1) + float(self.instructorSet[index])
        average = '%.2f' % (total / commentNum)
        heads = instrHeadcount.find_one({"instructorid": ObjectId(profid)})[tag]
        # if commentNum != sum(heads):
        #     raise MyException("instructor and instrHeadcount data inconsistency.")
        for i in range(5):
            heads[i] = float('%.2f' % (float(heads[i]) / commentNum))
        instructors.update_one({"_id": ObjectId(profid)}, {
            "$set": {
                "instructorData." + str(index) + ".distribution": heads,
                "instructorData." + str(index) + ".average": str(average)}})

    @classmethod
    def clearData(cls):
        comments.delete_many({})
        emptyDist = [0, 0, 0, 0, 0]
        instrHeadcount.update_many({}, {"$set": {
            "general": emptyDist,
            "accessible": emptyDist,
            "effectiveness": emptyDist,
            "feedback": emptyDist
        }})
        headcount.update_many({}, {"$set": {
            "general": emptyDist,
            "material": emptyDist,
            "workload": emptyDist,
            "difficulty": emptyDist
        }})
