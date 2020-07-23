# from code.db import instructors
from db import instructors
from bson.objectid import ObjectId


class InstructorModel:
    def __init__(self, name, description, distribution, average, detail, courseids):
        self.name = name
        self.description = description
        self.distribution = distribution
        self.average = average
        self.detail = detail
        self.courseids = courseids

    @classmethod
    def find_by_id(cls, idStr):
        instructor = instructors.find_one({"_id": ObjectId(idStr)})
        if instructor:
            return {'name': instructor['name'], 'description': instructor['description'], 'distribution': instructor['distribution'],
                            'average': instructor['average'], 'detail': instructor['detail']}
