import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <>
            <div className='container text-center'>
                <div className="" style={
                    {
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        display: "flex",
                    }
                }>
                    <div style={{
                        width: "auto"
                    }} className='fw-semibold'>
                        <h1>404 | Page</h1>
                        <p className='mt-5 text-secondary small'>The Server can not find the requested page</p>
                        <p className='text-center small mt-5'>
                            <Link to={'/'} className='text-decoration bg-warning py-2 px-5 rounded text-light mt-5 small'>Return to Home</Link>
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Page404