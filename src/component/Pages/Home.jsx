import React, { useEffect } from 'react'
import Banner from '../Banner/Banner';
import Trending from '../Trending/Trending';
import Column from '../Column/Column'
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer'
import requests from '../constant/requests';
function Home() {
    useEffect(() => {
        document.title = "Vidly Home of Movies";
    }, []);

    return (
        <>
            <NavBar searchFor={"multi"} />

            <Banner fetchUrl={requests.Trending} />
            <div className='container'>
                <Trending title="Upcoming Movies" fetchUrl={requests.UpcomingMovies} media="movie" />
                <Column media="movie" title="Top Rated Movies" fetchUrl={requests.TrendingMovies} size={12} />
                <Trending title="Popular Tv Shows" fetchUrl={requests.PopularTV} media="tv" />
                <Column media="tv" title="Top Rated Tv Shows" fetchUrl={requests.TopRatedTV} size={12} />
            </div>

            <Footer />
        </>

    )
}

export default Home