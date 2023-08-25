import React, { useState } from 'react'
import SearchDisplay from './SearchDisplay';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchInput = ({ searchFor }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [value, setValue] = useState(0);
    const [search, setSearch] = useState([]);

    const fetchSearch = (value) => {
        if (value && value !== "") {
            const url = `https://api.themoviedb.org/3/search/${searchFor}?query=${value}&api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;

            axios.get(url).then(function (response) {
                if (response.data.results.length !== 0)
                    setSearch(response.data.results);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    const handleChange = (value) => {
        setSearchQuery(value);
        fetchSearch(value);
        setValue(value.length);
    }

    return (
        <>
            <input type="search" className='search-input px-4 color-black' placeholder='Search Movies and Tv Shows' onChange={e => handleChange(e.target.value)} />

            <div className="position-relative">
                {
                    value !== 0
                        ?
                        <div className='search-wrapper'>

                            <SearchDisplay search={search} media={searchFor} value={setValue} />

                            <Link to={`/search/${searchFor}/${searchQuery}`} className='text-decoration text-light' onClick={() => setValue(0)}>
                                <p className='text-center bg-warning py-2 rounded mx-5 mt-4 small'>
                                    View all Search Results &nbsp;&nbsp;
                                    <span className='text-dark bi-arrow-up-right-circle-fill'></span>
                                </p>
                            </Link>
                        </div>
                        :
                        ""
                }
            </div>
        </>
    )
}

export default SearchInput