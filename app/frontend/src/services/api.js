const API_URL = "http://localhost:5000";

export async function getMovies() {
  const response = await fetch(`${API_URL}/api/movies`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}