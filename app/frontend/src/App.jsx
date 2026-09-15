import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";

import {
getTrendingMovies,
getPopularMovies,
getTopRatedMovies,
} from "./services/tmdb";

function App() {
const [trendingMovies, setTrendingMovies] = useState([]);
const [popularMovies, setPopularMovies] = useState([]);
const [topRatedMovies, setTopRatedMovies] = useState([]);

useEffect(() => {
async function loadMovies() {
try {
const [trending, popular, topRated] = await Promise.all([
getTrendingMovies(),
getPopularMovies(),
getTopRatedMovies(),
]);

    setTrendingMovies(trending.results);
    setPopularMovies(popular.results);
    setTopRatedMovies(topRated.results);
  } catch (error) {
    console.error("Failed to load movies:", error);
  }
}

loadMovies();

}, []);

return ( <div className="app"> <Navbar />

  <main>
    <Hero />

    <MovieRow
      title="Trending Now"
      movies={trendingMovies}
    />

    <MovieRow
      title="Popular Movies"
      movies={popularMovies}
    />

    <MovieRow
      title="Top Rated Movies"
      movies={topRatedMovies}
    />
  </main>
</div>

);
}

export default App;
