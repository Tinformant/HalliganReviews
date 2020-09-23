from pymongo import MongoClient
import os


dburl = os.environ.get('DATABASE_URL', 'mongodb+srv://user_sjk:XKihpv1poA24Y9N5@firstmongo.5jqky.mongodb.net/HRdb?retryWrites=true&w=majority')
cluster = MongoClient(dburl)
db = cluster["HRdb"]
courses = db["courses"]
instructors = db["instructors"]
comments = db["comments"]
headcount = db["headcount"]
instrHeadcount = db["instrHeadcount"]
# courses.create_index([("name", "text"), ("department", "text"), ("number", "text")])

# comments.delete_many({})
# instructor1 = {"name": "Jeff", "description": "blabla", "average": 3.3, "detail": "he is a good pro", "courseids": []}
# courses.update_one({"instructor": "Jeff"}, {"$push": {"comments": ObjectId('5f06d43b853ba1e4ad2fa81d')}})
# # courses.update_one({"instructor": "Richard"}, {"$push": {"comments": ObjectId('5f06d43c853ba1e4ad2fa81e')}})
# courses.update_one({"instructor": "Jeff"}, {"$set": {"courseData": [
#     {
#         "name": "General",
#         "description": "umsan in nisl e eu. Sagittis tur purus ut",
#         "distribution": [0.2, 0.1, 0.2, 0.2, 0.3],
#         "average": "2.7",
#         "details": "Detail about blablablablabla",
#     },
#     {
#         "name": "Material",
#         "description": "umsan in nisl e eu. Sagittis tur purus ut",
#         "distribution": [0.2, 0.1, 0.2, 0.2, 0.3],
#         "average": "2.7",
#         "details": "Detail about blablablablabla",
#     },
#     {
#         "name": "Work Load",
#         "description": "umsan in nisl e eu. Sagittis tur purus ut",
#         "distribution": [0.2, 0.1, 0.2, 0.2, 0.3],
#         "average": "2.7",
#         "details": "Detail about blablablablabla",
#     },
#     {
#         "name": "Difficulty",
#         "description": "umsan in nisl e eu. Sagittis tur purus ut",
#         "distribution": [0.2, 0.1, 0.2, 0.2, 0.3],
#         "average": "2.7",
#         "details": "Detail about blablablablabla",
#     },
# ]}})



# comments.update_one({"_id": ObjectId('5f06d29179ce16dd3efefff9')}, {"$set": {"course": ObjectId('5f06d1f6c206034c62fc1006')}})
# comments.update_one({"_id": ObjectId('5f06d43b853ba1e4ad2fa81d')}, {"$set": {"course": ObjectId('5f06d1f6c206034c62fc1007')}})
# comments.update_one({"_id": ObjectId('5f06d43c853ba1e4ad2fa81e')}, {"$set": {"course": ObjectId('5f06d1f6c206034c62fc1008')}})
# instructors.update_one({"name": "Jeff"}, {"$set": {"instructorData": [
#     {
#         "name": "General",
#         "description": "Accumsan in nisl nistis id consectetur purus ut",
#         "distribution": [0.2, 0.1, 0.2, 0.2, 0.3],
#         "average": "2.6",
#         "details": "Detail about blablablablabla",
#     },
#     {
#         "name": "Responsive",
#         "description": "Accumsan in nisl nistis id consectetur purus ut",
#         "distribution": [0.2, 0.1, 0.2, 0.2, 0.3],
#         "average": "2.6",
#         "details": "Detail about blablablablabla",
#     },
#     {
#         "name": "Expressive",
#         "description": "Accumsan in nisl nistis id consectetur purus ut",
#         "distribution": [0.2, 0.1, 0.2, 0.2, 0.3],
#         "average": "2.6",
#         "details": "Detail about blablablablabla",
#     },
#
# ]}})
# instructors.insert_one(instructor1)


