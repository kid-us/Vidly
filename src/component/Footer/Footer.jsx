import React from 'react';
import footer from '../../assets/footer.jpg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='shadow'
                style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.1), rgba(0, 0, 0, 1)), url(${footer})`,
                    backgroundPosition: "center top",
                    marginTop: "80px",
                }}
            >
                <div className="footer-wrapper container pt-5">
                    <div className="row pt-5 mx-lg-5 px-lg-5 ps-3">
                        <div className="col-lg-4 col-md-4 col-12 mt-5">
                            <div className="">
                                <img src={logo} alt="Logo" width={"200px"} />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12 mt-5">
                            <div className="small fw-semibold">
                                <p className='mb-5'>
                                    <Link className='text-shadow text-decoration text-light me-5' to={'/movies'}>Movies</Link>
                                    <Link className='text-shadow text-decoration text-light' to={'/tvs'}>Tv Shows</Link>
                                </p>
                                <p className='text-secondary small'>Vidly is top of free Movie and Tv Shows static website, where to watch movies trailers and all information online free without registration required. With a big database and great features, we're confident Vidly is the best free movies online website in the space that you can't simply miss!</p>
                                <p className='text-secondary small'>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="small text-center">
                        <li className='small text-secondary list-style-none mt-5 pt-4'>{new Date().getFullYear()} &copy; All right reserved</li>
                        <li className='small text-secondary list-style-none mt-2'> Developed By: <a className='text-decoration text-warning' href="https://kidus-w.web.app">Kidus WF</a></li>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
