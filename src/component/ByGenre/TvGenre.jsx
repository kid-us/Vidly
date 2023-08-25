import React from 'react'
import { useParams } from 'react-router-dom';
import Column from '../Column/Column';
import Banner from '../Banner/Banner';
import NavBar from '../Navbar/NavBar';
import { tvs } from '../constant/genres.js';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const baseUrl = `/discover/tv?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca&with_genres=`;

const TvGenre = () => {
    const { genre } = useParams();

    const pick = tvs.filter(g => g.name === genre);
    let genreId = pick[0].key;

    const fetchUrl = baseUrl + genreId;

    function capitalize(genre) {
        return genre[0].toUpperCase() + genre.slice(1);
    }

    return (
        <>
            <NavBar searchFor={"tv"} />
            <Banner fetchUrl={fetchUrl} />
            <div className="container mt-5">

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

                <Column title={`${capitalize(genre)} Tv Shows`} media="tv" fetchUrl={fetchUrl} size={18} />
            </div>

            <Footer />
        </>
    )
}

export default TvGenre