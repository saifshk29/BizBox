import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import TopNav from './Partials/TopNav';
import DropDown from './Partials/DropDown'
import Cards from './Partials/Cards';
import axios from '../utils/axios.jsx'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading.jsx'; 

const People = () => {
    const navigate = useNavigate();
    document.title = "BizBox | Movies"
    const [people, setPeople] = useState([]);
    
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const getPeople = async ()=>{
        try {
            const {data} = await axios.get(
                `/person/popular?page=${page}`
            );
            if(data.results.length>0){
                setPeople((prevstate)=>[...prevstate,...data.results]);
                setPage(page+1);
            }else{
                setHasMore(false)
            }

        } catch (error) {
            console.log("This is the error:",error)
        }   
    }
    
    const refershHandler = () => {
        if (people.length === 0) {
            getPeople();
        } else {
            setPage(1);
            setPeople([]);
            getPeople();
        }
    };
    
    useEffect(() => {
        refershHandler();
    }, []);
    
  return people.length > 0 ? (
    <div className="h-screen w-screen px-[5%]">
        <div className="w-full py-5  h-[10vh] flex items-center text-zinc-400">
            <div className="font-semibold text-2xl flex items-baseline gap-2">
                <i 
                    onClick={()=>
                        navigate(-1)
                    }
                    className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                <span>People</span>
            </div>
            <TopNav/>
         
            
        </div>
        <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={
            <h1>Loading...</h1>
        }
        >
            <Cards data={people}/>
        </InfiniteScroll>
        
    </div>
  ) : <Loading/>
}

export default People