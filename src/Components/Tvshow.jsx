import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import TopNav from './Partials/TopNav';
import DropDown from './Partials/DropDown'
import Cards from './Partials/Cards';
import axios from '../utils/axios.jsx'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading.jsx';

const Tvshow = () => {
    const navigate = useNavigate();
    document.title = "BizBox | Tv Show's"
    const [tvshow, setTvshow] = useState([]);
    const [category, setCategory] = useState("on_the_air");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const getTvshow = async ()=>{
        try {
            const {data} =await axios.get(`/tv/${category}?page=${page}`);
            if(data.results.length>0){
                setTvshow((prevstate)=>[...prevstate,...data.results]);
                setPage(page+1);
            }else{
                setHasMore(false)
            }

        } catch (error) {
            console.log("This is the error:",error)
        }   
    }
    
    const refershHandler = () => {
        if (tvshow.length === 0) {
            getTvshow();
        } else {
            setPage(1);
            setTvshow([]);
            getTvshow();
        }
    };
    
    useEffect(() => {
        refershHandler();
    }, [category]);
    
  return tvshow.length > 0 ? (
    <div className="h-screen w-screen px-[5%]">
        <div className="w-full py-5  h-[10vh] flex items-center text-zinc-400">
            <div className="font-semibold w-[16%] text-2xl  flex items-baseline gap-2">
                <i 
                    onClick={()=>
                        navigate(-1)
                    }
                    className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                <span className="">Tv Show's</span>
            </div>
            <TopNav/>
            <div className="flex items-center w-[30%] gap-2">
                <DropDown func={(e)=>{
                    setCategory(e.target.value)
                }} title="Category" options={["on_the_air","Popular","Top_Rated","airing_today"]}/>
            </div>
            
        </div>
        <InfiniteScroll
        dataLength={tvshow.length}
        next={getTvshow}
        hasMore={hasMore}
        loader={
            <h1>Loading...</h1>
        }
        >
            <Cards data={tvshow}/>
        </InfiniteScroll>
        
    </div>
  ) : <Loading/>
}

export default Tvshow