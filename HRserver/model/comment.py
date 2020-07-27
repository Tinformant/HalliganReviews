from db import comments, courses
from bson.objectid import ObjectId
from model.course import CourseModel


class CommentModel:
    def __init__(self, username, identity, date, grade, workload, courseOverall, instructorOverall, assessment, text,
                 courseid):
        self.username = username
        self.identity = identity
        self.date = date
        self.grade = grade
        self.workload = workload
        self.courseAll = courseOverall
        self.instructorAll = instructorOverall
        self.assessment = assessment
        self.text = text
        self.course = courseid

    @classmethod
    def find_comments(cls, department, number, year, semester):
        idStr = CourseModel.find_id(department, number, year, semester)
        cursor = comments.find({'course': ObjectId(idStr)})
        container = []
        if cursor:
            for x in cursor:
                container.append({'username': x['username'], 'identity': x['identity'], 'date': x['date'],
                                  'grade': x['grade'], 'workload': x['workload'], 'courseOverall': x['courseAll'],
                                  'instructorOverall': x['instructorAll'], 'assessment': x['assessment'],
                                  'text': x['text']})
                return {'result': container}

    @classmethod
    def update_course_db(cls):
        

    def save_to_db(self):
        comment = {
            "username": self.username,
            "identity": self.identity,
            "date": self.date,
            "grade": self.grade,
            "workload": self.workload,
            "courseAll": self.courseAll,
            "instructorAll": self.instructorAll,
            "assessment": self.assessment,
            "text": self.text,
            "course": ObjectId(self.course)
        }
        comments.insert_one(comment)

    def update_course(self):
        courses.update_one({"_id": ObjectId(self.course)}, {"$push": {"comments": ObjectId(self.course)}})

