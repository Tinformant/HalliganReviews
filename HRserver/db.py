import pymongo
from bson.objectid import ObjectId
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://user_xxx:<>@firstmongo.5jqky.mongodb.net/HRdb?retryWrites=true&w=majority")
db = cluster["HRdb"]
courses = db["courses"]
instructors = db["instructors"]
comments = db["comments"]
post1 = {"name": "Parallel Computing", "department": "COMP", "number": 112, "subnumber": 1, "instructor": "Tom", "semester": "Fall", "year": "2020", "comments": [], "instructorids": []}
post2 = {"name": "Parallel Computing", "department": "EE", "number": 150, "subnumber": 1, "instructor": "Jeff", "semester": "Spring", "year": "2020","comments": [], "instructorids": []}
post3 = {"name": "Parallel Computing", "department": "COMP", "number": 112, "subnumber": 1, "instructor": "Richard", "semester": "Fall", "year": "2019", "comments": [], "instructorids": []}
post4 = {"name": "Barfdsafdsa", "department": "ME", "number": 213, "subnumber": 1, "instructor": "Reee", "semester": "Fall", "year": "2019"}
comment1 = {"username": "Jack", "identity": "grad", "date": "2019-6-7", "grade": "A", "workload": "huge", "courseAll": "courseOverall", "instructorAll": "blabla", "assessment": "1 quiz", "text": "blabla", "course": ""}
comment2 = {"username": "Jack", "identity": "grad", "date": "2019-6-7", "grade": "A", "workload": "huge", "courseAll": "courseOverall", "instructorAll": "blabla", "assessment": "1 quiz", "text": "blabla", "course": ""}
comment3 = {"username": "Jack", "identity": "grad", "date": "2019-6-7", "grade": "A", "workload": "huge", "courseAll": "courseOverall", "instructorAll": "blabla", "assessment": "1 quiz", "text": "blabla", "course": ""}

instructor1 = {"name": "Jeff", "description": "blabla", "average": 3.3, "detail": "he is a good pro", "courseids": []}
courses.update_one({"instructor": "Jeff"}, {"$push": {"comments": ObjectId('5f06d43b853ba1e4ad2fa81d')}})
# courses.update_one({"instructor": "Richard"}, {"$push": {"comments": ObjectId('5f06d43c853ba1e4ad2fa81e')}})
courses.update_one({"instructor": "Jeff"}, {"$push": {"instructorids": ObjectId('5f06d29179ce16dd3efefffa')}})
# comments.update_one({"_id": ObjectId('5f06d29179ce16dd3efefff9')}, {"$set": {"course": ObjectId('5f06d1f6c206034c62fc1006')}})
# comments.update_one({"_id": ObjectId('5f06d43b853ba1e4ad2fa81d')}, {"$set": {"course": ObjectId('5f06d1f6c206034c62fc1007')}})
# comments.update_one({"_id": ObjectId('5f06d43c853ba1e4ad2fa81e')}, {"$set": {"course": ObjectId('5f06d1f6c206034c62fc1008')}})
# instructors.update_one({"name": "Jeff"}, {"$push": {"courseids": ObjectId('5f06d1f6c206034c62fc1007')}})
# instructors.insert_one(instructor1)


