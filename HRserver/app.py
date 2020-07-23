from flask import Flask
from flask_restful import Api
from resourses.searchRes import searchRes
from resourses.reviewRes import reviewRes

app = Flask(__name__)
api = Api(app)

api.add_resource(searchRes, '/courses')
api.add_resource(reviewRes, '/review')

app.run(port=5000, debug=True)