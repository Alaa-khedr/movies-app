import axios from "axios";

// Base URLs
const discoverUrl = "https://api.themoviedb.org/3/discover/movie";
const movieUrl = "https://api.themoviedb.org/3/movie";
const tvSeriesUrl = "https://api.themoviedb.org/3/tv";
const apiKey = "7da4677b527238a9ca99ee2858c57837";
const trendingMovies = "https://api.themoviedb.org/3/trending/movie/day?api_key=7da4677b527238a9ca99ee2858c57837&language=en-US"
const trendinTvSeries = "https://api.themoviedb.org/3/trending/tv/day?api_key=7da4677b527238a9ca99ee2858c57837&language=en-US"
// Get All Movies
export async function getAllMovies(page = 1) {
    try {
        const response = await axios.get(`${discoverUrl}?api_key=${apiKey}&page=${page}`);
        return response.data.results;
    } catch (err) {
        console.error("Error fetching all movies:", err.message);
    }
}


// Get Movie
export async function getMovie(id) {
    try {
        const response = await axios.get(`${movieUrl}/${id}?api_key=${apiKey}`);
        console.log('Fetched Movie Data:', response.data); // Log fetched data
        return response.data;
    } catch (err) {
        console.error("Error fetching movie:", err.message);
    }
}

// Get Trending Movies
export async function getAllTrendingMovies(){
    try {
        const response = await axios.get(trendingMovies);
        return response.data.results;
    } catch (err){
        console.log(err.message)
    }
}

// Get Trending TV Series
export async function getTrendingTvSeries(){
    try{
        const response = await axios.get(trendinTvSeries);
        return response.data.results;
    } catch(err){
        console.log(err)
    }
}

// Get TV Series by ID
export async function getTvSeries(id) {
    try {
        const response = await axios.get(`${tvSeriesUrl}/${id}?api_key=${apiKey}`);
        return response.data;
    } catch (err) {
        console.error("Error fetching TV series:", err.message);
    }
}