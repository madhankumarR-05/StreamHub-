from flask import Blueprint, jsonify, request
from app.models.movie import Movie
from app import db

movies_bp = Blueprint("movies", __name__)


@movies_bp.get("/api/movies")
def get_movies():
    movies = Movie.query.all()

    return jsonify([
        {
            "id": movie.id,
            "title": movie.title,
            "year": movie.year,
            "genre": movie.genre
        }
        for movie in movies
    ])


@movies_bp.post("/api/movies")
def create_movie():
    data = request.get_json()

    if not data or not all(
        field in data for field in ["title", "year", "genre"]
    ):
        return jsonify({
            "error": "title, year and genre are required"
        }), 400

    movie = Movie(
        title=data["title"],
        year=data["year"],
        genre=data["genre"]
    )

    db.session.add(movie)
    db.session.commit()

    return jsonify({
        "id": movie.id,
        "title": movie.title,
        "year": movie.year,
        "genre": movie.genre
    }), 201

@movies_bp.put("/api/movies/<int:movie_id>")
def update_movie(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    data = request.get_json()

    movie.title = data["title"]
    movie.year = data["year"]
    movie.genre = data["genre"]

    db.session.commit()

    return jsonify({
        "id": movie.id,
        "title": movie.title,
        "year": movie.year,
        "genre": movie.genre
    })

@movies_bp.delete("/api/movies/<int:movie_id>")
def delete_movie(movie_id):
    movie = Movie.query.get_or_404(movie_id)

    db.session.delete(movie)
    db.session.commit()

    return jsonify({
        "message": "Movie deleted successfully"
    })