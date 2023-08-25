import React from 'react';
import Img from '../Img/Img';
import avatar from '../../assets/avatar.png';

const Cast = ({ cast }) => {
    return (
        <>
            <p className='my-5 fs-4 pt-5 text-warning fw-semibold'>Top Cast</p>
            <div className="row">
                {
                    cast?.map(cast => (
                        <div key={cast.character} className="col-lg-2 col-md-4 col-6 text-center small">

                            <Img key={cast.cast_id} className='cast-img'
                                src={`${cast.profile_path ? "https://image.tmdb.org/t/p/original/" + cast.profile_path : avatar}`} alt={cast.name}
                            />

                            <li className='list-style-none text-secondary small mt-3'>As "{cast.character}"</li>
                            <p>{cast.name}</p>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Cast