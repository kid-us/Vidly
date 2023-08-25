import React, { useEffect, useState } from 'react';
import axios from '../constant/axios';
import { useParams } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import TvInfo from './Tv/TvInfo';
import Cast from './Cast';

import Column from '../Column/Column';
import Footer from '../Footer/Footer';
const TvDetail = () => {
    const { id } = useParams();
    const [tv, setTv] = useState([]);
    const [tvCredit, setTvCredits] = useState([]);
    const [tvRelated, setTvRelated] = useState([]);
    const [tvTrailer, setTvTrailer] = useState([]);

    const find = `/tv/${id}?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;
    const credits = `/tv/${id}/credits?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;
    const recommendation = `/tv/${id}/similar?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;
    const video = `/tv/${id}/videos?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;


    useEffect(() => {

        async function fetchData() {
            const fetch = await axios.get(find);
            document.title = (fetch.data.name);
            setTv(fetch.data);
            return fetch;
        }

        async function fetchCredits() {
            const fetchCredits = await axios.get(credits);
            const data = fetchCredits.data.cast;

            if (data.length !== 0) {
                const keys = Object.keys(data);

                const firstSixCasts = ([]);

                for (let i = 0; i < 6 && i < keys.length; i++) {
                    const key = keys[i];
                    firstSixCasts[key] = data[key];
                }

                setTvCredits(firstSixCasts);
            } else setTvCredits
            return fetchCredits;
        }

        async function fetchRelate() {
            const fetchRecommended = await axios.get(recommendation);
            setTvRelated(fetchRecommended.data.results);
        }

        async function fetchTrailer() {
            const trailer = await axios.get(video);
            const data = trailer.data.results;
            if (data.length !== 0) {
                const randomTrailer = data[Math.floor(Math.random() * data.length)];
                setTvTrailer(randomTrailer);
            } else {
                setTvTrailer([])
            };

            return trailer;
        }

        fetchData();
        fetchCredits();
        fetchRelate();
        fetchTrailer()

    }, [id]);



    return (
        <>
            <NavBar searchFor={"tv"} />

            <div style={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.8), rgba(0, 0, 0, 0.99)), url("https://image.tmdb.org/t/p/original/${tv?.backdrop_path}")`,
                backgroundPosition: "center top",
            }}>
                <div className="container p-lg-5 p-4 fw-semibold">

                    <div className="row mt-5 pt-4">
                        <div className="col-lg-4 col-md-3 col-12 pt-3">
                            <img src={`https://image.tmdb.org/t/p/original/${tv?.poster_path}`} alt={tv.title} className='img-fluid rounded shadow-lg' />
                        </div>
                        <div className="col-lg-7 col-md-8 col-12 fw-semibold mt-lg-0 mt-5 pt-3">
                            <TvInfo tv={tv} tvTrailer={tvTrailer} />
                        </div>
                    </div>
                </div>
            </div >

            <div className="container">
                <Cast cast={tvCredit} />

                {
                    tvRelated.length
                        ?
                        <Column title={"Similar Tv Shows"} fetchUrl={recommendation} size={6} media={"tv"} />
                        :
                        ""
                }
            </div>

            <Footer />
        </>
    )
}

export default TvDetail