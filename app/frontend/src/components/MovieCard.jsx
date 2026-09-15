function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div className="movie-card">
      {posterUrl ? (
        <img
          src={posterUrl}
          alt={movie.title}
        />
      ) : (
        <div className="movie-placeholder">
          No Image
        </div>
      )}

      <h3>{movie.title}</h3>

      <p>{movie.release_date}</p>
    </div>
  );
}

export default MovieCard;