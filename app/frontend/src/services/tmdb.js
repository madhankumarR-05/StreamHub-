const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

async function fetchFromTMDB(endpoint) {
const response = await fetch(
`${BASE_URL}${endpoint}?api_key=${API_KEY}`
);

if (!response.ok) {
throw new Error(`TMDB request failed: ${response.status}`);
}

return response.json();
}

export async function getTrendingMovies() {
return fetchFromTMDB("/trending/movie/week");
}

export async function getPopularMovies() {
return fetchFromTMDB("/movie/popular");
}

export async function getTopRatedMovies() {
return fetchFromTMDB("/movie/top_rated");
}
