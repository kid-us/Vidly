import React from 'react'

const Genre = ({ genre }) => {
    return (
        <>
            <p className='small fw-semibold'>
                {genre?.map(g => (
                    <span className='genre-name bg-info text-dark p-1 px-lg-4 px-2 me-2 rounded' key={g.id}>{g.name}</span>
                ))}
            </p>
        </>
    )
}

export default Genre