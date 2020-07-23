from flask import Flask
from flask_restful import Api
from resources.searchRes import searchRes
from resources.reviewRes import reviewRes

app = Flask(__name__)
api = Api(app)

api.add_resource(searchRes, '/courses')
api.add_resource(reviewRes, '/review')

app.run(port=5000, debug=True)