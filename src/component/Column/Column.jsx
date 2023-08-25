import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../constant/axios';
import Img from '../Img/Img';
import { allGenres } from '../constant/genres';

const imgUrl = "https://image.tmdb.org/t/p/original";

function TvSeries({ title, fetchUrl, size, media }) {

    const [column, setColumn] = useState([]);
    const [hoverIndex, setHoverIndex] = useState();
    const [hover, setHover] = useState(false);

    const genreName = (genre) => {
        const pick = allGenres.filter(g => g.key === genre);
        return (pick[0].name);
    }

    useEffect(() => {
        async function fetchData() {
            const tvShows = await axios.get(fetchUrl);
            const randomTvShows = new Set();
            while (randomTvShows.size < size) {
                const data = tvShows.data.results[Math.floor(Math.random() * tvShows.data.results.length)]
                randomTvShows.add(data);
            }
            const randomData = Array.from(randomTvShows);
            setColumn(randomData);
            return tvShows;
        }
        fetchData();
    }, [fetchUrl]);


    const handleHover = (stat, index) => {
        setHover(stat);
        setHoverIndex(index);
    }

    return (
        <>
            <p className="fs-5 mt-5 text-warning fw-semibold">{title}</p>
            <div className="row justify-content-center fw-semibold">
                {column.map((col, index) => (
                    <div key={index} className="col-lg-2 col-md-4 col-6 my-4">
                        <div className='movie-container position-relative'>
                            <Link to={`/${media}/${col.id}`} onMouseEnter={() => handleHover(true, index)} onMouseLeave={() => handleHover(false, index)}>

                                <div className='vidly-content rounded'>
                                    <Img key={col?.title} className='rounded img-fluid' src={`${imgUrl}${col?.poster_path || col?.backdrop_path}`} alt={col?.title
                                    } />
                                </div>

                                {hover &&
                                    hoverIndex === index
                                    ?
                                    <div className="d-sm-none d-md-none d-lg-block">
                                        <div className=
                                            {` ${index === 5 || index === 11 || index === 17 ? "movie-modal-left" : "movie-modal-right"} small rounded px-3 py-4 hover-show`}
                                        >
                                            <p className='fs-6 text-warning'>{col?.name || col?.title}</p>
                                            <p className='small'>
                                                {
                                                    col.genre_ids.map(id => (
                                                        <span className='text-info small me-2' key={id}>{genreName(id)}</span>
                                                    ))
                                                }
                                            </p>
                                            <p className="small">
                                                <span>{col?.release_date || col?.first_col_date} </span> &nbsp; &nbsp;
                                                <span className='bi-star-fill text-warning'> {Math.round(col.vote_average * 100) / 100} </span>
                                            </p>
                                            <p className='small text-secondary modal-overview'>{col.overview}</p>
                                        </div>
                                    </div>
                                    :
                                    ""
                                }
                            </Link>
                        </div>
                        <div className='small'>
                            <li className='item-name small mt-3 text-secondary fw-semibold list-style-none'>{col?.name || col?.title}</li>
                            <li className='list-style-none small text-secondary mt-1'>
                                {media !== 'tv'
                                    ?
                                    col.release_date
                                        ?
                                        col?.release_date.substring(0, 4)
                                        :
                                        ""
                                    :
                                    col.first_air_date
                                        ?
                                        col.first_air_date.substring(0, 4)
                                        :
                                        ""
                                }
                            </li>

                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default TvSeries