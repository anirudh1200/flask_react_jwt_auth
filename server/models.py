from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	firstName = db.Column(db.String(50))
	lastName = db.Column(db.String(50))
	username = db.Column(db.String(50))
	password = db.Column(db.String(100))