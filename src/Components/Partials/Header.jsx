import React from 'react'
import axios from '../../utils/axios'
import { Link } from "react-router-dom";
const Header = ({data}) => {
    
  return (
    <div
    style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit:"contain"
    }}
    className="w-full h-[50vh]  text-white  flex flex-col justify-center  items-start p-14"
    >
        <h1 className="text-5xl  font-bold">
            {data.title || data.name || data.original_name || data.original_title}
        </h1>
        <p className="w-[70%] mt-3 text-lg">
            {data.overview.slice(0,200)}...
            <Link 
            to={`/${data.media_type}/details/${data.id}`} 
            className="text-blue-700 mt-3">
            more</Link>
        </p>
        <div className="flex items-center gap-[5px] mt-3">
            < i class="ri-megaphone-fill text-[#EAB308]"></i>
            {data.release_date || "No Information"}
            <i class="ri-album-fill text-[#EAB308]"></i>
            {data.media_type.toUpperCase()}
        </div>
        <button  className="mt-10 mb-5 self-start">
                <a href={`https://www.youtube.com/results?search_query=${data.name ||
                        data.title ||
                        data.original_name ||
                        data.original_title} trailer`} target="_blank" className="bg-[#6556CD] px-2 py-4 rounded-lg text-lg  ">
                    <i className="ri-play-fill "></i>
                    Play Trailer
                </a>
        </button>
    </div>
  )
}

export default Header