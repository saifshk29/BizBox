import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import TopNav from './Partials/TopNav';
import DropDown from './Partials/DropDown'
import Cards from './Partials/Cards';
import axios from '../utils/axios.jsx'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading.jsx';

const Trending = () => {
    const navigate = useNavigate();
    document.title = "BizBox | Trending"
    const [trending, setTrending] = useState([]);
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("week");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const getTrending = async ()=>{
        try {
            const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            if(data.results.length>0){
                setTrending((prevstate)=>[...prevstate,...data.results]);
                setPage(page+1);
            }else{
                setHasMore(false)
            }
            

        } catch (error) {
            console.log("This is the error:",error)
        }   
    }
    
    const refershHandler = () => {
        if (trending.length === 0) {
            getTrending();
        } else {
            setPage(1);
            setTrending([]);
            getTrending();
        }
    };
    
    useEffect(() => {
        refershHandler();
    }, [category,duration]);
    
  return trending.length > 0 ? (
    <div className="h-screen w-screen px-[5%]">
        <div className="w-full py-5  h-[10vh] flex items-center text-zinc-400">
            <div className="font-semibold text-2xl flex items-baseline gap-2">
                <i 
                    onClick={()=>
                        navigate(-1)
                    }
                    className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                <span>Trending</span>
            </div>
            <TopNav/>
            <div className="flex items-center w-[30%] gap-2">
                <DropDown func={(e)=>{
                    setCategory(e.target.value)
                }} title="Category" options={["Movie","Tv","all"]}/>
                <DropDown func={(a)=>{
                    setDuration(a.target.value)
                }} title="Duration" options={["week","day"]}/>
            </div>
            
        </div>
        <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={
            <h1>Loading...</h1>
        }
        >
            <Cards data={trending}/>
        </InfiniteScroll>
        
    </div>
  ) : <Loading/>
}

export default Trending