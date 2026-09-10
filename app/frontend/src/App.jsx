import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";

function App() {
  const trendingMovies = [
    { id: 1, title: "The Last Horizon", year: 2026 },
    { id: 2, title: "Shadow Protocol", year: 2026 },
    { id: 3, title: "Neon City", year: 2025 },
    { id: 4, title: "Final Mission", year: 2025 },
  ];

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <MovieRow
          title="Trending Now"
          movies={trendingMovies}
        />
      </main>
    </div>
  );
}

export default App;