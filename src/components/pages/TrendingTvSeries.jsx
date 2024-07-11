import { getTrendingTvSeries } from "../../service/movieService.service";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from './CustomArrows';

function TrendingTvSeries() {
    const [series, setSeries] = useState([])
    useEffect(() => {
        getTrendingTvSeries()
        .then(res => setSeries(res))
        .catch(err => console.log(err))
    }, [])

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
    return ( 
    <>
        <h2 className="container ps-5 ms-5 mt-5 pt-5">Trending Movies :</h2>
            <div className="container mt-1">
                <Slider {...settings}>
                    {series.map((tvSeries) => (
                        <div key={tvSeries.id}>
                            <Link to={`tv-series/${tvSeries.id}`}>
                                <img
                                    className="mx-4 my-3 rounded-3"
                                    src={`https://image.tmdb.org/t/p/w500${tvSeries.poster_path}`} 
                                    alt={tvSeries.name}
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

export default TrendingTvSeries;