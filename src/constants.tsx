const KEY = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

export const baseUrl = 'https://pokeapi.co/api/v2/';
export const tmdbSeries = `https://api.themoviedb.org/3/tv/60572?api_key=${KEY}`
export const pokeAPI = `https://api.themoviedb.org/3/search/tv?api_key=${KEY}&query=pokemon`
