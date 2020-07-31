from flask import Flask
from flask_restful import Api
from resources.searchRes import searchRes
from resources.reviewRes import reviewRes
from resources.detailRes import detailRes
from resources.manage import manageRes

app = Flask(__name__)
api = Api(app)

api.add_resource(searchRes, '/courses/<name>')
api.add_resource(reviewRes, '/review')
api.add_resource(detailRes, '/detail')
api.add_resource(manageRes, '/manage')

app.run(port=5000, debug=True)