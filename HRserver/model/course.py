from flask import jsonify
from db import courses
import re


class CourseModel:
    def __init__(self, name, description, department, number, subnumber, commentids, instructorids, instructor,
                 semester,
                 year):
        self.name = name
        self.department = department
        self.number = number
        self.subnumber = subnumber
        self.description = description
        self.instructorName = instructor
        self.instructorids = instructorids
        self.semester = semester
        self.year = year
        self.commentids = commentids

    @classmethod
    def find_by_name(cls, name):
        classes = courses.find({"name": re.compile(name, re.IGNORECASE)})
        container = []
        if classes:
            for x in classes:
                container.append({'name': x['name'], 'description': x['description'], 'distribution': x['distribution'],
                                  'average': x['average']})
                return jsonify({'result': container})

    @classmethod
    def find_specific(cls, department, number, subnumber, year, semester):
        course = courses.find_one(
            {"department": re.compile(department, re.IGNORECASE), "number": number, "subnumber": subnumber,
             "year": year, "semester": re.compile(semester, re.IGNORECASE)})
        return {"Data": course["courseData"]}

    @classmethod
    def find_whole_course(cls, department, number, subnumber, year, semester):
        course = courses.find_one(
            {"department": re.compile(department, re.IGNORECASE), "number": number, "subnumber": subnumber,
             "year": year,
             "semester": re.compile(semester, re.IGNORECASE)})
        return {'name': course['name'], 'department': course['department'],
                'number': course['number'], 'subnumber': course['subnumber'], 'instructor': course['instructor'],
                'semester': course['semester'], 'year': course['year']
                }

    @classmethod
    def find_id(cls, department, number, subnumber, year, semester):
        course = courses.find_one(
            {"department": re.compile(department, re.IGNORECASE), "number": number, "subnumber": subnumber,
             "year": year, "semester": re.compile(semester, re.IGNORECASE)})
        if course:
            return course['_id']
        return None

    @classmethod
    def find_instructor(cls, department, number, subnumber, year, semester):
        course = courses.find_one(
            {"department": re.compile(department, re.IGNORECASE), "number": number, "subnumber": subnumber,
             "year": year,
             "semester": re.compile(semester, re.IGNORECASE)})
        return course['instructorids']

    @classmethod
    def search_res(cls, name):
        pipeline = [
            {
                "$match": {"$text": {"$search": name}}
            },
            {
                "$sort": {"score": {"$meta": "textScore"}}
            },
            {
                "$group": {
                    "_id": {
                        "department": "$department",
                        "number": "$number"
                    },
                    "title": {"$first": "$name"},
                    "subnumber": {"$first": "$subnumber"},
                    "availOption": {
                        "$addToSet": {
                            "instructor": "$instructor",
                            "semester": "$semester",
                            "year": "$year",
                            "reviews": {"$size": "$comments"}
                        }
                    }
                }
            },
            {
                "$project": {"_id": 0,
                             "title": "$title",
                             "department": "$_id.department",
                             "number": "$_id.number",
                             "instructor": "$instructor",
                             "subnumber": "$subnumber",
                             "availOption": "$availOption"
                             }
            }
        ]
        classes = list(courses.aggregate(pipeline))
        return jsonify({'result': classes})

    @classmethod
    def clearData(cls):
        emptyDist = [0, 0, 0, 0, 0]
        courses.update_many({}, {"$set": {
            "comments": [],
            "courseData.0.distribution": emptyDist,
            "courseData.0.average": "0",
            "courseData.1.distribution": emptyDist,
            "courseData.1.average": "0",
            "courseData.2.distribution": emptyDist,
            "courseData.2.average": "0",
            "courseData.3.distribution": emptyDist,
            "courseData.3.average": "0",
        }})
