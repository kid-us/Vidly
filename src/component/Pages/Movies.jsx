import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import request from '../constant/requests'
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import Column from '../Column/Column';
import { movies } from '../constant/genres';
import Footer from '../Footer/Footer';

const Movies = () => {

    useEffect(() => {
        document.title = "Movies";
    }, []);

    function capitalize(genre) {
        return genre[0].toUpperCase() + genre.slice(1);
    }


    return (
        <>
            <NavBar searchFor={"movie"} />

            <Banner fetchUrl={request.TrendingMovies} />

            <div className="container">
                <div className="row my-5">
                    <div className="offset-lg-6 offset-md-6 col-lg-6 col-md-6 col-12 small">
                        <div className="bg-light rounded-pill pe-3 small">
                            <div className='genre-links small fw-semibold pt-3 ms-5'>
                                {
                                    movies.map(movie => (
                                        <p key={movie.key}><Link className='me-4 text-decoration text-dark bg-warning px-5 py-2 rounded' to={`/movies/${movie.name}`} >{capitalize(movie.name)}</Link></p>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>

                <Column media="movie" title="Trending Movies" fetchUrl={request.TrendingMovies} size={18} />
            </div>

            <Footer />
        </>
    )
}

export default Movies