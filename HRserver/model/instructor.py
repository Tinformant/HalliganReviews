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
            return {"Data": instructor["instructorData"]}

    @classmethod
    def clearData(cls):
        emptyDist = [0, 0, 0, 0, 0]
        instructors.update_many({}, {"$set": {
            "comments": [],
            "instructorData.0.distribution": emptyDist,
            "instructorData.0.average": "0",
            "instructorData.1.distribution": emptyDist,
            "instructorData.1.average": "0",
            "instructorData.2.distribution": emptyDist,
            "instructorData.2.average": "0",
            "instructorData.3.distribution": emptyDist,
            "instructorData.3.average": "0",
        }})
