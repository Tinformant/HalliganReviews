from flask_restful import Resource, reqparse
from model.course import CourseModel


class searchRes(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name',
                        type=str,
                        required=True,
                        help="What's the name of the class?"
                        )

    def get(self, name):
        courses = CourseModel.search_res(name)
        if courses:
            return courses
        return {'message': 'Course not found'}, 404
