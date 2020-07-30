from flask_restful import Resource, reqparse
from model.course import CourseModel
from model.comment import MyException


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
        raise MyException("The input did not match any course.")
