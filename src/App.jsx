  import { useState } from 'react'
  import Home from './Components/Home'
  import Trending from './Components/Trending';
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import Movie from './Components/Movie';
  import Popular from './Components/Popular';
  import Tvshow from './Components/Tvshow';
  import People from './Components/People';
  import MovieDetails from './Components/MovieDetails';

  function App() {
    // primary- #1F1E24 
    // secondary - #6556CD
    return (
      
        <div className="w-screen overflow-x-hidden h-screen bg-[#1F1E24] flex">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/trending' element={<Trending/>}></Route>
            <Route path='/movie' element={<Movie/>}></Route>
            <Route path='/popular' element={<Popular/>}></Route>
            <Route path='/tvshows' element={<Tvshow/>}></Route>
            <Route path='/people' element={<People/>}></Route>
            <Route path="/movie/details/:id" element={<MovieDetails/>}></Route>
          </Routes>
        </div>
      
    )
  }

  export default App
