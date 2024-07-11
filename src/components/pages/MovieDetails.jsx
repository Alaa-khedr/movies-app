// MovieDetails.jsx

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovie } from "../../service/movieService.service";

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getMovie(id)
            .then((res) => {
                console.log('Movie Data to Set:', res);
                setMovie(res);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
            <header className="container mt-4 mx-auto w-50 rounded-2 text-center py-3">
                <h2>Movie Details</h2>
            </header>

            <section className="container mx-auto py-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="text-center mb-5">
                            <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{
                                width: '60%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                            }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5">
                        <h2>{`Movie Title : ${movie.title}`}</h2>
                        <hr />
                        <p className="my-3 fs-5">Movie Original Language <strong>{movie.original_language}</strong></p>
                        <p className="my-3 fs-5">Movie Vote Average : <strong>{movie.vote_average}</strong></p>
                        <p className="my-3 fs-5">Movie Release Date : <strong>{movie.release_date}</strong></p>
                        <p className="my-3 fs-5">{`Movie Overview : ${movie.overview}`}</p>
                        <div className="text-center">
                            <Link to="/" className="btn btn-light my-5">Return To Home Page</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MovieDetails;