import { useEffect, useState } from "react";
import { getAllMovies } from "../../service/movieService.service";
import { Link } from "react-router-dom";
import '/src/styles/Movies.css'

function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); // State to track current page

    useEffect(() => {
        // Fetch the first page of movies on initial render
        loadInitialMovies();
    }, []);

    useEffect(() => {
        if (page > 1) {
            // Load more movies when page changes, but not on the initial render
            loadMovies(page);
        }
    }, [page]);

    const loadInitialMovies = async () => {
        const initialMovies = await getAllMovies(1);
        setMovies(initialMovies);
    };

    const loadMovies = async (page) => {
        const newMovies = await getAllMovies(page);
        setMovies((prevMovies) => [...prevMovies, ...newMovies]); // Append new movies to the existing list
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1); // Increment page to fetch next set of movies
    };

    return ( 
        <>
        <h2 className="my-5 text-center">Discover All Movies</h2>
            <div className="container my-5">
                {movies.map((movie) => (
                    <Link 
                        to={`/movies/${movie.id}`}
                        key={movie.id}>
                        <img 
                        className="mx-3 my-3 img-hover-effect rounded-3"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} 
                    />
                    </Link>
                ))}
            </div>
            <div className="text-center">
                <button onClick={handleLoadMore} className="btn btn-primary">Load More</button>
            </div>
        </>
     );
}

export default Movies;
