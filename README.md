# flask_react_jwt_auth

### Introduction
- JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely
transmitting information between parties as a JSON object. This information can be verified and trusted because it
is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using
RSA or ECDSA.

### Installation

##### Running the backend.
steps : Install all the dependencies
 - ```cd server```
 - ```pip install -r requirements.txt```
 - create a postgresql database named jwt_auth
 - ```python manage.py db init```
 - ```python manage.py db migrate```
 - ```python manage.py db upgrade```
 - ```flask run```
 - ```server running at port:5000```

##### Running the Frontend.
steps:
 - ```cd client```
 - ```npm install```
 - ```npm start```
 - ```server running at port:3000```
 
 ##### Changing the user model or adding new models
 - Make changes in server/models.py
 - ```python manage.py db migrate```
 - ```python manage.py db upgrade```

#### Libraries used:
Backend:
-  [Flask](https://palletsprojects.com/p/flask/)
-  [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
-  [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/en/latest/)
-  [Flask-CORS](https://github.com/corydolphin/flask-cors)

Frontend:
-  [React](https://reactjs.org/)
-  [Bootstrap4](https://getbootstrap.com/)


***

- Frontend is build using React.
- Backend is build using Flask.
- PostgreSQL as the database
