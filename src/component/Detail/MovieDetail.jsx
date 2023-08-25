import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../constant/axios';
import Cast from './Cast';
import MovieInfo from './Movie/MovieInfo';
import Column from '../Column/Column';
import NavBar from '../Navbar/NavBar';
import Img from '../Img/Img';
import Footer from '../Footer/Footer';


const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [credit, setCredits] = useState([]);
  const [related, setRelated] = useState([]);
  const [trailer, setTrailer] = useState([]);

  const find = `/movie/${id}?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;
  const credits = `/movie/${id}/credits?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;
  const recommendation = `/movie/${id}/similar?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;
  const video = `/movie/${id}/videos?api_key=ce65ec21ad9cb3dc7a41a4c1a45629ca`;


  useEffect(() => {
    async function fetchData() {
      const fetch = await axios.get(find);
      document.title = (fetch.data.title);
      setMovie(fetch.data);
      return fetch;
    }

    async function fetchCredits() {
      const fetchCredits = await axios.get(credits);
      const data = fetchCredits.data.cast;
      const keys = Object.keys(data);

      const firstSixCasts = ([]);

      for (let i = 0; i < 6 && i < keys.length; i++) {
        const key = keys[i];
        firstSixCasts[key] = data[key];
      }

      setCredits(firstSixCasts);
      return fetchCredits;
    }

    async function fetchRelate() {
      const fetchRecommended = await axios.get(recommendation);
      setRelated(fetchRecommended.data.results);
    }

    async function fetchTrailer() {
      const trailer = await axios.get(video);
      const data = trailer.data.results;

      if (data.length !== 0) {
        const randomTrailer = data[Math.floor(Math.random() * data.length)];
        setTrailer(randomTrailer);
      } else setTrailer([]);

      return trailer;
    }

    fetchData();
    fetchCredits();
    fetchRelate();
    fetchTrailer()

    document.title = movie.title;
  }, [id]);


  return (
    <>
      <NavBar searchFor={"movie"} />

      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.8), rgba(0, 0, 0, 0.99)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center top",
        }}
      >
        <div className="container p-lg-5 p-4 fw-semibold">
          <div className="row mt-5 pt-4">
            <div className="col-lg-4 col-12 pt-3">
              <Img className='img-fluid rounded shadow-lg' alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />

            </div>
            <div className="col-lg-7 col-12 fw-semibold mt-lg-0 mt-5 pt-3">
              <MovieInfo movie={movie} trailer={trailer} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Cast cast={credit} />
        {
          related.length
            ?
            <Column title={"Similar Movies"} fetchUrl={recommendation} media={'movie'} size={6} />
            :
            ""
        }
      </div>

      <Footer />
    </>
  )
}

export default MovieDetail