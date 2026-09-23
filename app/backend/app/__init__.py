from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from flask_cors import CORS
import os

load_dotenv()

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)

    CORS(app)

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    from app.models.movie import Movie

    from app.routes.health import health_bp
    from app.routes.movies import movies_bp

    app.register_blueprint(health_bp)
    app.register_blueprint(movies_bp)

    return app