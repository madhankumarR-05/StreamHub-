import "./App.css";

function App() {
  const trendingMovies = [
    { id: 1, title: "The Last Horizon", year: 2026 },
    { id: 2, title: "Shadow Protocol", year: 2026 },
    { id: 3, title: "Neon City", year: 2025 },
    { id: 4, title: "Final Mission", year: 2025 },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">STREAMHUB</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#series">Series</a>
          <a href="#my-list">My List</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">STREAMHUB ORIGINAL</p>

            <h2>Unlimited entertainment.</h2>

            <p>
              Discover movies, series and stories worth watching.
            </p>

            <button>▶ Start Watching</button>
          </div>
        </section>

        <section className="movie-section" id="movies">
          <h2>Trending Now</h2>

          <div className="movie-row">
            {trendingMovies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <div className="movie-placeholder">
                  <span>{movie.id}</span>
                </div>

                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;