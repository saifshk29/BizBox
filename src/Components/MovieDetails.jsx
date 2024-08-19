import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { asyncloadmovie} from '../store/actions/MovieActions';
import { removemovie } from '../store/reducers/movieSlice.jsx';

import{
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Cards from "./Partials/Cards.jsx";
import Loading from "./Loading.jsx"

const MovieDetails = () => {
   
    document.title = "Movie | Movie Detais"
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncloadmovie(id));
        return () => {
            dispatch(removemovie());
        };
    }, [id]);  
    
  return info ? (
    <div className="text-white w-full h-full">
        
        <div style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }} 
            className="h-full">

        </div>
        
    </div>
  ) : <Loading/>
}

export default MovieDetails