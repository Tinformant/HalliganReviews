from flask import Flask
from flask_restful import Api
from resources.searchRes import searchRes
from resources.reviewRes import reviewRes
from resources.detailRes import detailRes

app = Flask(__name__)
api = Api(app)

api.add_resource(searchRes, '/courses/<name>')
api.add_resource(reviewRes, '/review')
api.add_resource(detailRes, '/detail')

app.run(port=5000, debug=True)