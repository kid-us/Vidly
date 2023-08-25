import React, { useEffect, useState } from 'react';
import axios from '../constant/axios';
import { Link } from 'react-router-dom';
const Banner = ({ fetchUrl }) => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <>
            <header className='banner-container'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.20), rgba(0, 0, 0, 0.99)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
                    backgroundPosition: "center top",
                    paddingTop: "50px"
                }}
            >
                <div className="banner-contents px-3 px-lg-5 px-md-5">
                    <div className="mx-lg-5 px-lg-5">
                        <div className="banner-title-wrapper">
                            <p className='banner-title display-5 fw-semibold'>{movie?.title || movie?.name}</p>
                        </div>
                        <p className='mt-4'>
                            <Link to={`/${movie.media_type}/${movie.id}`} className='px-5 btn btn-warning py-1 bi-box-arrow-in-right'></Link>
                        </p>
                        <p className='mt-3 fw-semibold text-grey banner-overview'>{movie?.overview}</p>

                    </div>
                </div>
            </header >
        </>
    )
}

export default Banner