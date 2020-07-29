from email.mime import application

from flask_restful import Resource, reqparse
from flask_restful.representations import json

from model.course import CourseModel
from model.comment import CommentModel
from flask import jsonify, request


class reviewRes(Resource):
    # parser = reqparse.RequestParser()
    # parser.add_argument('department',
    #                     type=str,
    #                     required=True,
    #                     help="What's the department of the course?"
    #                     )
    # parser.add_argument('number',
    #                     type=str,
    #                     required=True,
    #                     help="What's the numerical code of the course?"
    #                     )
    # parser.add_argument('semester',
    #                     type=str,
    #                     required=True,
    #                     help="What's the semester of the class?"
    #                     )
    # parser.add_argument('year',
    #                     type=str,
    #                     required=True,
    #                     help="What's the year of the class?"
    #                     )
    # parser.add_argument('username', required=True)
    # parser.add_argument('identity', required=True)
    # parser.add_argument('date', required=True)
    # parser.add_argument('grade', required=True)
    # parser.add_argument('info', required=True)
    # parser.add_argument('course', type=json, required=True)
    # parser.add_argument('instructor', type=json, required=True)
    # parser.add_argument('assessment', required=True)
    # parser.add_argument('comment', required=True)


    def post(self):
        # todo: security
        data = request.get_json()
        courseid = CourseModel.find_id(data['info']['department'], data['info']['number'], data['info']['subnumber'],
                                       data['info']['year'], data['info']['semester'])
        comment = CommentModel(data['username'], data['identity'], data['date'], data['grade'], data['course']['workload'],
                              data['course']['overall'], data['instructor']['overall'], data['course']['material'],
                               data['course']['difficulty'], data['instructor']['accessible'],
                               data['instructor']['effectiveness'], data['instructor']['feedback'], data['assessment'],
                               data['comment'], courseid)

        comment.save_to_db()
        try:
            comment.update_course_headcount("general", 0)
            comment.update_course("general", 0)
            comment.update_course_headcount("material", 1)
            comment.update_course("material", 1)
            comment.update_course_headcount("workload", 2)
            comment.update_course("workload", 2)
            comment.update_course_headcount("difficulty", 3)
            comment.update_course("difficulty", 3)

            comment.update_instructor_headcount("general", 0)
            comment.update_instructor("general", 0)
            comment.update_instructor_headcount("accessible", 1)
            comment.update_instructor("accessible", 1)
            comment.update_instructor_headcount("effectiveness", 2)
            comment.update_instructor("effectiveness", 2)
            comment.update_instructor_headcount("feedback", 3)
            comment.update_instructor("feedback", 3)

            return {'message': "Success!"}, 200

        except Exception as e:
            print(e)
            return {'message': "An error occurred while creating the comment."}, 500


