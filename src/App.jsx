import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import MovieDetail from './component/Detail/MovieDetail';
import TvDetail from './component/Detail/TvDetail';
import Home from './component/Pages/Home';
import Movies from './component/Pages/Movies';
import Tvs from './component/Pages/Tvs';
import MovieGenre from './component/ByGenre/MovieGenre';
import TvGenre from './component/ByGenre/TvGenre';
import Search from './component/Search/Search';
import Page404 from './component/Pages/Page404'

function App() {


  return (
    <>
      <Routes>
        <Route exact path='/vidly' element={<Home />}></Route>
        <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/tv/:id" element={<TvDetail />}></Route>
        <Route exact path='/movies' element={<Movies />}></Route>
        <Route exact path='/movies/:genre' element={<MovieGenre />}></Route>
        <Route exact path='/tvs' element={<Tvs />}></Route>
        <Route exact path='/tvs/:genre' element={<TvGenre />}></Route>
        <Route exact path='/search/:media/:query' element={<Search />}></Route>
        <Route path='/404' element={<Page404 />}></Route>
        <Route path='*' element={<Navigate to="/404" />} ></Route>
      </Routes>
    </>
  )
}

export default App
