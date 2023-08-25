import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../constant/axios';
import Img from '../Img/Img';

const imgUrl = "https://image.tmdb.org/t/p/original";

const Trending = ({ title, fetchUrl, media }) => {

    const [trending, setTrending] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const fetch = await axios.get(fetchUrl);
            setTrending(fetch.data.results);
            return fetch;
        }
        fetchData()
    }, [fetchUrl]);

    return (
        <>
            <p className="fs-5 mt-5 pt-5 text-warning fw-semibold">{title}</p>
            <div className="d-flex">
                {trending.map(trends => (
                    <div key={trends.id} className="trend-container position-relative fw-semibold">
                        <Link to={`${media}/${trends.id}`}>

                            <Img key={trends.id} className='trend-img' src={`${imgUrl}${trends.poster_path}`} alt={trends?.title || trends.name
                            } />

                            <div className="hovered-card small rounded">
                                <div className='row p-1'>
                                    <div className='col-8 text-info fw-semibold mt-2'>
                                        <p className='text-light small ps-2'>{trends?.name || trends?.title}</p>
                                    </div>
                                    <div className='col-4 mt-2'>
                                        <p className="bi-star-fill text-warning"> {trends.vote_average}</p>
                                    </div>
                                </div>
                            </div>
                        </Link >
                    </div>
                )
                )}
            </div>

        </>
    )
}

export default Trending