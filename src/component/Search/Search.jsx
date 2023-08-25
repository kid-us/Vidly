import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../constant/axios';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import { allGenres } from '../constant/genres';

const imgUrl = "https://image.tmdb.org/t/p/original";
const Search = () => {
    const [searchedItem, setSearchedItem] = useState([]);
    const [hoverIndex, setHoverIndex] = useState();
    const [hover, setHover] = useState(false);
    const { media } = useParams();
    const { query } = useParams();

    const genreName = (genre) => {
        const pick = allGenres.filter(g => g.key === genre);
        return (pick[0].name);
    }
    const url = `/search/${media}?query=${query}&api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;

    useEffect(() => {
        async function fetchQuery() {
            const searchQuery = await axios.get(url)
            if (searchQuery.data.results.length !== 0) {
                const randomSearch = new Set();
                if (searchQuery.data.results.length > 18) {
                    while (randomSearch.size < 18) {
                        const data = searchQuery.data.results[Math.floor(Math.random() * searchQuery.data.results.length)]
                        randomSearch.add(data);
                    }
                    const randomData = Array.from(randomSearch);
                    setSearchedItem(randomData);
                } else setSearchedItem(searchQuery.data.results);
            }
            return searchQuery;
        }

        fetchQuery()
    }, [query]);

    const handleHover = (stat, index) => {
        setHover(stat);
        setHoverIndex(index);
    }

    return (
        <>
            <NavBar searchFor={"multi"} />

            <div className="container mt-5 pt-5">
                <p className="fs-5 mt-5 fw-semibold">Search Resulst for <span className='text-warning'>"{query}"</span></p>
                <div className="row justify-content-center fw-semibold">
                    {searchedItem.map((search, index) => (
                        <div key={index} className="col-lg-2 col-md-4 col-6 my-4">
                            <div className='movie-container position-relative'>
                                <Link to={`/${search.media_type}/${search.id}`} onMouseEnter={() => handleHover(true, index)} onMouseLeave={() => handleHover(false, index)}>

                                    <img key={search?.title} className='img-fluid rounded vidly-content' src={`${imgUrl}${search?.poster_path || search?.backdrop_path}`} alt={search?.title
                                    } />

                                    {hover &&
                                        hoverIndex === index
                                        ?
                                        <div className="d-sm-none d-md-none d-lg-block">
                                            <div className=
                                                {` ${index === 5 || index === 11 || index === 17 ? "movie-modal-left" : "movie-modal-right"} small rounded px-3 py-4 hover-show`}
                                            >
                                                <p className='fs-6 text-warning'>{search?.name || search?.title}</p>
                                                <p className='small'>
                                                    {
                                                        search.genre_ids.map(id => (
                                                            <span className='text-info small me-2' key={id}>{genreName(id)}</span>
                                                        ))
                                                    }
                                                </p>
                                                <p className="small">
                                                    <span>{search?.release_date || search?.first_search_date} </span> &nbsp; &nbsp;
                                                    <span className='bi-star-fill text-warning'> {search.vote_average}</span>
                                                </p>
                                                <p className='small text-secondary modal-overview'>{search.overview}</p>
                                            </div>
                                        </div>
                                        :
                                        ""
                                    }
                                </Link>
                            </div>
                            <p className='item-name small mt-2 text-secondary fw-semibold'>{search?.name || search?.title}</p>
                        </div>
                    ))}
                </div >
            </div>

            <Footer />
        </>
    )
}

export default Search