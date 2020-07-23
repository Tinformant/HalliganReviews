from db import comments
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
