import os
from flask import Flask
from flask_restful import Api
from resources.searchRes import searchRes
from resources.reviewRes import reviewRes
from resources.detailRes import detailRes
from resources.manage import manageRes

app = Flask(__name__)
dburl = os.environ.get('DATABASE_URL', 'mongodb+srv://user_sjk:XKihpv1poA24Y9N5@firstmongo.5jqky.mongodb.net/HRdb?retryWrites=true&w=majority')
api = Api(app)


api.add_resource(searchRes, '/courses/<name>')
api.add_resource(reviewRes, '/review')
api.add_resource(detailRes, '/detail')
api.add_resource(manageRes, '/manage')

app.run(port=5000, debug=True)