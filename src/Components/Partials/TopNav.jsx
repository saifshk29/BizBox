import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "../../utils/axios"
import noimage from "../../assets/noimg.jpg"

const TopNav = () => {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState([]);
    const getSearch = async ()=>{
        try {
            const {data} = await axios.get(`search/multi?query=${query}`)
            setSearch(data.results)
        } catch (error) {
            console.log("error: ",error);
        }
    }

    useEffect(() => {
        getSearch();
    }, [query]);
    
  return (
    <div className="w-[80%] h-[10vh] relative ml-[15%] flex items-center justify-start">
        <i class="text-zinc-400 text-3xl ri-search-line"></i>
        <input type="text" placeholder="Search Anything" value={query} onChange={
            (e) =>{
                setQuery(e.target.value)
            }
        }
        className="w-[50%] mx-10 p-5 text-xl outline-none bg-transparent text-zinc-200"
        />
        {
            query.length >0 &&(
                <i className="text-zinc-400 text-3xl ri-close-fill"
                onClick={()=>{
                    setQuery("");
                }}
                ></i>
            )
        }
        <div className="w-[65%] max-h-[50vh] bg-white absolute top-[100%] overflow-auto  
        ">
            {
                search.map((currentElement,index)=>(
                    <Link 
                    key={index}
                    className="w-full relative z-10 h-[10vh] bg-zinc-200 flex p-10 justify-start items-center border-b-2 border-zinc-100
                    hover:bg-zinc-600 font-semibold hover:text-zinc-300 ">
                        <img 
                        className="w-[10vh] h-[10vh] mr-4 object-cover rounded shadow-md"
                        src={
                            currentElement.backdrop_path || currentElement.profile_path ?
                            `https://image.tmdb.org/t/p/original/${
                                          currentElement.backdrop_path || currentElement.profile_path
                                      }` : noimage
                        } alt="" />
                        <span>{currentElement.title || currentElement.name || currentElement.original_name || currentElement.original_title}</span>
                    </Link> 
                ))
            }
              
              

        </div>
        
    </div>
  )
}

export default TopNav