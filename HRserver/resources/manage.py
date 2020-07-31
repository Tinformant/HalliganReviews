from flask_restful import Resource
from model.course import CourseModel
from model.comment import CommentModel
from model.instructor import InstructorModel


class manageRes(Resource):

    def delete(self):
        CommentModel.clearData()
        CourseModel.clearData()
        InstructorModel.clearData()
        return {"message": "Comment-related data has been cleared."}, 200
