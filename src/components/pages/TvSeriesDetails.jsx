import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvSeries } from "../../service/movieService.service";
import {Link} from "react-router-dom";

function TvSeriesDetails() {
    const [series, setSeries] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getTvSeries(id)
            .then(res => setSeries(res))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <>
            <header className="container my-5 mx-auto w-50 rounded-2 bg-dark text-light text-center py-3">
                <h2>{series.name}</h2>
            </header>

            <section className="my-5">
                <div className="container my-3 mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                        <div className="text-center mb-5">
                            <img
                            className="mx-4 my-3 rounded-3"
                            src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                            alt={series.name}
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
                        <h2>{`Movie Title : ${series.name}`}</h2>
                        <hr />
                        <p className="my-3 fs-5"><strong>Overview:</strong> {series.overview}</p>
                        <p className="my-3 fs-5"><strong>First Air Date:</strong> {series.first_air_date}</p>
                        <p className="my-3 fs-5"><strong>Rating:</strong> {series.vote_average}</p>
                        <div className="text-center">
                            <Link to="/" className="btn btn-light my-5">Return To Home Page</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TvSeriesDetails;