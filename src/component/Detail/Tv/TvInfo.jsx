import React, { useState } from 'react'
import play from '../../../assets/play.png';
import Genre from '../Genre'
import Production from '../Production';
import YoutubeIframe from '../../YoutubeIframe'


const TvInfo = ({ tv, tvTrailer }) => {
    const [modal, setModal] = useState(0);

    const handleOpenModal = () => {
        setModal(1);
    }

    const handleCloseModal = () => {
        setModal(0);
    }

    return (
        <>
            <p className='movie-name'> {tv.name
            }</p>

            {tv.tagline
                ?
                <p className='small text-secondary mt-3 mb-5'>" {tv.tagline}"</p>
                :
                ""
            }

            <Genre genre={tv.genres} />

            <p className='my-5'>
                <span className='bi bi-star-fill fs-2 text-warning'></span>
                <span className='me-5 fs-3'>&nbsp;{Math.round(tv.vote_average * 100) / 100}</span>

                <span className='me-2 cursor' onClick={() => handleOpenModal()}>
                    <img src={play} alt="play" className='me-4' width={50}
                        style={{
                            borderRadius: "50%",
                            boxShadow: "2px 3px 84px blue"
                        }} />
                </span>
                Watch Trailer
            </p>

            <p>Overview</p>
            <p className='text-secondary small'>{tv.overview}</p>
            <p className='small'>
                Season:<span className="me-4 text-info"> {tv.number_of_seasons}</span>
                Total Episodes:<span className="text-info"> {tv.number_of_episodes}</span>
            </p>
            <hr className='text-secondary' />

            <div className='row small my-4'>
                <div className="col-lg-4 col-md-6 col-12">
                    <p>Release Date :<span className='text-secondary me-4'> {tv.first_air_date}</span></p>
                </div>
                <div className="col-lg-4 col-md-6 col-12 offset-lg-4">
                    <p>Status :<span className='text-secondary me-4'> {tv.status}</span></p>
                </div>
            </div>

            <hr className='text-secondary' />

            <Production production={tv.production_companies} />

            {
                modal === 1
                    ?
                    <>
                        <div className="overlay" onClick={() => handleCloseModal()}></div>
                        <div className='youtube-container'>
                            <p className='bi-x-lg text-start ms-2 text-info cursor mt-3' onClick={() => handleCloseModal()}></p>

                            {tvTrailer.length !== 0
                                ?
                                <YoutubeIframe videoId={tvTrailer.key} autoPlay />
                                :
                                <div className='mt-5 pt-5 fw-semibold px-3'>
                                    <p className='display-5 text-warning mt-5 pt-5'>Sorry there is no Trailer for this Tv Show!</p>
                                </div>
                            }

                        </div>
                    </>
                    :
                    ""
            }
        </>

    )
}

export default TvInfo