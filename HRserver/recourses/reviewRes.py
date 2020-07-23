from flask_restful import Resource, reqparse
from model.course import CourseModel
from model.comment import CommentModel
from model.instructor import InstructorModel
from bson.objectid import ObjectId
from flask import jsonify


class reviewRes(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('department',
                        type=str,
                        required=True,
                        help="What's the department of the course?"
                        )
    parser.add_argument('number',
                        type=int,
                        required=True,
                        help="What's the numerical code of the course?"
                        )
    parser.add_argument('semester',
                        type=str,
                        required=True,
                        help="What's the semester of the class?"
                        )
    parser.add_argument('year',
                        type=str,
                        required=True,
                        help="What's the year of the class?"
                        )

    def get(self):
        """get is ..."""
        data = reviewRes.parser.parse_args()
        course = CourseModel.find_specific(data['department'], data['number'], data['year'], data['semester'])
        wholeCourse = CourseModel.find_whole_course(data['department'], data['number'], data['year'], data['semester'])
        comments = CommentModel.find_comments(data['department'], data['number'], data['year'], data['semester'])
        instructorid = CourseModel.find_instructor(data['department'], data['number'], data['year'], data['semester'])
        instructor = InstructorModel.find_by_id(ObjectId(instructorid[0]))
        if course and comments and instructor:
            return jsonify({"info": {
                "title": wholeCourse['name'],
                "department": wholeCourse['department'],
                "number": wholeCourse['number'],
                "subnumber": wholeCourse['subnumber'],
                "instructor": wholeCourse['instructor'],
                "semester": wholeCourse['semester'],
                "year": wholeCourse['year']
            },
                "comments": comments,
                "course": course,
                "instructor": instructor
            })
        return jsonify({"message": "data not found."})

