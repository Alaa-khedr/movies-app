import { useState, useEffect } from "react";
import { getAllTrendingMovies } from "../../service/movieService.service";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from './CustomArrows';
import { Link } from "react-router-dom";

function TrendingMovies() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllTrendingMovies()
        .then(res => {
            setTrendingMovies(res);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setError('Failed to fetch trending movies');
            setLoading(false);
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    if (loading) return <p className="text-center mt-5">Loading...</p>;
    if (error) return <p className="text-center mt-5">{error}</p>;

    return ( 
        <>
            <h2 className="container ps-5 ms-5 mt-5 pt-5">Trending Movies :</h2>
            <div className="container mt-1">
                <Slider {...settings}>
                    {trendingMovies.map((movie) => (
                        <div key={movie.id}>
                            <Link to={`movies/${movie.id}`}>
                                <img
                                    className="mx-4 my-3 rounded-3"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                    alt={movie.title}
                                    style={{ width: "96%" }}
                                />
                            </Link>

                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default TrendingMovies;
