function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-placeholder">
        <span>{movie.id}</span>
      </div>

      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </div>
  );
}

export default MovieCard;