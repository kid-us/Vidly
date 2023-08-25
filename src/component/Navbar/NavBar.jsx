import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../Search/SearchInput';
import logo from '../../assets/logo.png';
import 'animate.css';

const NavBar = ({ searchFor }) => {
    const [searchModal, setSearchModal] = useState(0);
    const [menuModal, setMenuModal] = useState(0);
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
            return () => {
                window.removeEventListener("scroll");
            }
        });
    });

    const showMenuModal = () => {
        if (menuModal === 0) {
            setMenuModal(1)
        } else setMenuModal(0)

        setSearchModal(0)
    }
    const showSearchModal = () => {
        if (searchModal === 0) {
            setSearchModal(1)
        } else setSearchModal(0)

        setMenuModal(0);
    }
    const showSearchInput = () => {
        if (showSearch === 0)
            setShowSearch(1);
        else
            setShowSearch(0);
    }

    return (
        <>
            <nav className={`${show && 'nav-bg'} fixed-top pt-2 pb-2`}>
                <div className="container">
                    {/* Large Device Navbar*/}
                    <div className="d-none d-md-block">
                        <div className="row small fw-semibold">
                            <div className="col-lg-3 col-md-2 mt-2">
                                <Link className='text-decoration text-light' to={'/vidly'} >
                                    <img src={logo} alt="Logo" width={"120px"} />
                                </Link>
                            </div>

                            <div className="offset-lg-1 col-lg-5 col-md-7 position-relative">
                                {
                                    showSearch !== 0
                                        ?
                                        <div className='animate__animated animate__fadeInRight'>
                                            < SearchInput searchFor={searchFor} />
                                        </div>
                                        :
                                        ""
                                }
                            </div>

                            <div className="col-lg-3 col-md-3 mt-2 pb-2">
                                <div className="row">
                                    <div className="col-1">
                                        <p className='bi-search text-shadow cursor' onClick={() => showSearchInput()}></p>
                                    </div>

                                    <div className="col-3">
                                        <Link className='text-decoration text-shadow text-light' to={'/movies'} >Movies</Link>

                                    </div>
                                    <div className="col-6">
                                        <Link className='text-decoration text-shadow text-light' to={'/tvs'}> Tv Shows</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Device Navbar*/}
                    <div className="d-block d-md-none">
                        {/* <p>Lorem ipsum, dolor.</p> */}
                        <div className="row justify-content-between">
                            <div className='col-6'>
                                <p className='pt-2'>
                                    <Link className='text-decoration text-light' to={'/'} >
                                        <img src={logo} alt="Logo" width={"100px"} />
                                    </Link>
                                </p>
                            </div>

                            <div className='offset-2 col-1'>
                                <p className='pt-2'>
                                    <span onClick={() => showSearchModal()} className={`${searchModal === 1 ? "animate__animated animate__fadeInDown bi-x-lg text-danger" : "bi-search text-shadow"} fs-3 `}></span>
                                </p>
                            </div>
                            <div className="col-1 me-4">
                                <p className='pt-1'>
                                    <span onClick={() => showMenuModal()} className={`${menuModal === 1 ? "animate__animated animate__fadeInDown bi-x-lg text-danger" : "bi-list text-shadow"} fs-1 `}></span>
                                </p>
                            </div>
                        </div>

                        {
                            menuModal === 1
                                ?
                                <div className="fs-5 mt-2 animate__animated animate__fadeInDown ms-2">
                                    <p><Link className='text-decoration text-shadow text-light' to={'/movies'} >Movies</Link></p>
                                    <p><Link className='text-decoration text-shadow text-light' to={'/tvs'}> Tv Shows</Link></p>
                                </div>
                                :
                                " "
                        }

                        {
                            searchModal === 1
                                ?
                                <div className="fs-5 my-3 animate__animated animate__fadeInDown">
                                    <SearchInput searchFor={searchFor} />
                                </div>
                                :
                                ""
                        }
                    </div>
                </div>
            </nav >

        </>
    )
}

export default NavBar
