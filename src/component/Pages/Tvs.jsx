import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Column from '../Column/Column';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import request from '../constant/requests';
import { tvs } from '../constant/genres';
import Footer from '../Footer/Footer';

const Tvs = () => {

    useEffect(() => {
        document.title = "Tv Shows";
    }, []);

    function capitalize(genre) {
        return genre[0].toUpperCase() + genre.slice(1);
    }
    return (
        <>
            <NavBar searchFor={"tv"} />

            <Banner fetchUrl={request.TrendingTV} />
            <div className='container'>
                <div className="row my-5">
                    <div className="offset-lg-6 offset-md-6 col-lg-6 col-md-6 col-12 small">
                        <div className="bg-light rounded-pill pe-3 small">
                            <div className='genre-links small fw-semibold pt-3 ms-5'>
                                {tvs.map(tv => (
                                    <p key={tv.key}><Link className='me-4 text-decoration text-dark bg-warning px-5 py-2 rounded' to={`/tvs/${tv.name}`} >{capitalize(tv.name)}</Link></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Column media="tv" title="Trending Tv Shows" fetchUrl={request.TrendingTV} size={18} />

            </div>

            <Footer />
        </>
    )
}

export default Tvs