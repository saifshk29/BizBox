import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import TopNav from './Partials/TopNav';
import DropDown from './Partials/DropDown'
import Cards from './Partials/Cards';
import axios from '../utils/axios.jsx'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading.jsx';    

const Movie = () => {
    const navigate = useNavigate();
    document.title = "BizBox | Movies"
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("week");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const getMovie = async ()=>{
        try {
            const {data} =await axios.get(`/movie/now_playing?page=${page}`);
            if(data.results.length>0){
                setMovies((prevstate)=>[...prevstate,...data.results]);
                setPage(page+1);
            }else{
                setHasMore(false)
            }

        } catch (error) {
            console.log("This is the error:",error)
        }   
    }
    
    const refershHandler = () => {
        if (movies.length === 0) {
            getMovie();
        } else {
            setPage(1);
            setMovies([]);
            getMovie();
        }
    };
    
    useEffect(() => {
        refershHandler();
    }, [category]);
    
  return movies.length > 0 ? (
    <div className="h-screen w-screen px-[5%]">
        <div className="w-full py-5  h-[10vh] flex items-center text-zinc-400">
            <div className="font-semibold text-2xl flex items-baseline gap-2">
                <i 
                    onClick={()=>
                        navigate(-1)
                    }
                    className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                <span>Movies</span>
            </div>
            <TopNav/>
            <div className="flex items-center w-[30%] gap-2">
                <DropDown func={(e)=>{
                    setCategory(e.target.value)
                }} title="Category" options={["now playing","Popular","Top Rated","Upcoming"]}/>
            </div>
            
        </div>
        <InfiniteScroll
        dataLength={movies.length}
        next={getMovie}
        hasMore={hasMore}
        loader={
            <h1>Loading...</h1>
        }
        >
            <Cards data={movies}/>
        </InfiniteScroll>
        
    </div>
  ) : <Loading/>
}

export default Movie