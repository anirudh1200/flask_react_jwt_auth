from flask import Flask, jsonify, request
from models import db, User
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres:///jwt_auth'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'secret'
db.init_app(app)
jwt = JWTManager(app)
CORS(app)

@app.route('/auth/register', methods=["POST"])
def register():
	firstName = request.get_json().get('firstName')
	lastName = request.get_json().get('lastName')
	username = request.get_json().get('username')
	password = request.get_json().get('password')
	user = User.query.filter_by(username=username).first()
	if user is not None:
		return jsonify({'status':'username already exists'})
	else:
		newUser = User(firstName=firstName,
									lastName=lastName,
									username=username,
									password=generate_password_hash(password, method='sha256'))
		db.session.add(newUser)
		db.session.commit()
		return jsonify({'status': 'successful'})

@app.route('/auth/login', methods=['POST'])
def login():
	username = request.get_json().get('username')
	password = request.get_json().get('password')
	user = User.query.filter_by(username=username).first()
	if user is None:
		return jsonify({'status':'invalid username'})
	elif not check_password_hash(user.password, password):
		return jsonify({'status':'credentials do not match'})
	else:
		access_token = create_access_token(identity = {
      'firstName': user.firstName,
      'lastName': user.lastName,
      'username': user.username
    })
		return jsonify({'token':access_token, 'status': 'successful'})


if __name__ == '__main':
	app.run()