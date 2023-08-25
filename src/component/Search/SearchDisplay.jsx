import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../Img/Img';

const SearchDisplay = ({ search, media, value }) => {
    const imgUrl = "https://image.tmdb.org/t/p/original";

    function capitalize(media) {
        return media[0].toUpperCase() + media.slice(1);
    }

    return (
        <>
            <div className='search-list px-3 py-5'>
                {search.map(s => (
                    s?.media_type !== 'person'
                        ?
                        <Link className='text-decoration' key={s.id} to={`/${s?.media_type || media}/${s.id}`} onClick={() => value(0)}>
                            <div className='row searched-item'>

                                <div className='col-lg-2 col-1'>
                                    <Img src={`${imgUrl}/${s?.poster_path || s.backdrop_path}`} alt={s?.title || s.name} className='search-img' />
                                </div>

                                <div className="col-lg-9 col-8">
                                    <p className='search-movie-name text-info me-5'>{s?.title || s.name}</p>
                                    <p className='small'>
                                        {
                                            s.media_type
                                                ?
                                                <span>{capitalize(s.media_type)}</span>
                                                :
                                                <span>{capitalize(media)}</span>
                                        }
                                        <span className='bi-star-fill text-warning mx-lg-4 mx-3'>{Math.round(s.vote_average * 100) / 100} </span>
                                        <span>
                                            {
                                                s.media_type !== "tv" && media !== "tv"
                                                    ?
                                                    s.release_date
                                                        ?
                                                        s?.release_date.substring(0, 4)
                                                        :
                                                        ""
                                                    :
                                                    s.first_air_date
                                                        ?
                                                        s.first_air_date.substring(0, 4)
                                                        :
                                                        ""
                                            }

                                        </span>
                                    </p>
                                </div>
                            </div>

                            <hr className='text-secondary' />
                        </Link>
                        :
                        ""
                ))}
            </div >


        </>
    )
}

export default SearchDisplay