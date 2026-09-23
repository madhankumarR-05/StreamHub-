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

import { getMovies } from "./services/api";

function App() {
const [trendingMovies, setTrendingMovies] = useState([]);
const [popularMovies, setPopularMovies] = useState([]);
const [topRatedMovies, setTopRatedMovies] = useState([]);
const [databaseMovies, setDatabaseMovies] = useState([]);

useEffect(() => {
async function loadMovies() {
try {
const [trending, popular, topRated, databaseMovies] = await Promise.all([
getTrendingMovies(),
getPopularMovies(),
getTopRatedMovies(),
getMovies(),
]);

    setTrendingMovies(trending.results);
    setPopularMovies(popular.results);
    setTopRatedMovies(topRated.results);
    setDatabaseMovies(databaseMovies);
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
    <MovieRow
     title="StreamHub Movies"
      movies={databaseMovies} 
    />
  </main>
</div>

);
}

export default App;
