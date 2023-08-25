import React from 'react'

const Production = ({ production }) => {
    return (
        <>
            <p className='small'>Production :
                {production?.map((p) => (
                    <span key={p.id} className='mx-2 text-secondary'>{p.name}</span>
                ))}
            </p>
            <hr className='text-secondary' />
        </>
    )
}

export default Production