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
        courseid = CourseModel.find_id(data['department'], data['number'], data['year'], data['semester'])
        comment = CommentModel(data['username'], data['identity'], data['date'], data['grade'], data['course']['workload'],
                              data['course']['overall'], data['instructor']['overall'], data['assessment'], data['comment'],
                              courseid)
        try:
            comment.save_to_db()
            comment.update_course()
            return {'message': "Success!"}, 200
        except:
            return {'message': "An error occurred while creating the comment."}, 500


