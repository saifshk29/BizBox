import { current } from '@reduxjs/toolkit';
import React from 'react'
import { Link } from "react-router-dom";

const HorCards = ({data,media_type}) => {
  return (
    
    <div className="w-[100%] overflow-x-scroll flex gap-5 p-5">
       {
        data.length > 0 ? (
            data.map((currentElement,index)=>(
                <Link key={index} className="min-w-[15%] cursor-pointer shadow-lg  card-container h-[35vh] bg-zinc-900 flex flex-col justify-between items-start relative group"
                    to={`/${media_type}/details/${currentElement.id}`}>
                    <img src={
                    currentElement.poster_path || currentElement.backdrop_path || currentElement.profile_path
                        ? `https://image.tmdb.org/t/p/original/${currentElement.poster_path ||
                        currentElement.backdrop_path ||
                        currentElement.profile_path
                        }`
                        : noimg
                    } alt="" className="w-full h-full object-cover" />
                    {
                    currentElement.vote_average ? (
                        <p className={currentElement.vote_average >= 7 ? "text-white absolute top-2 left-2 rounded-md px-1 font-semibold bg-[#41D39A] " : "text-white absolute top-2 left-2 rounded-md px-1 font-semibold bg-[#F9AD00]"}>
                        {Math.round(currentElement.vote_average * 10) / 10}
                        </p>
                    ) : <p className="text-white absolute top-2 left-2">No Rating</p>
                    }
                    
                    <div className="text-white text-shadow absolute bottom-0 w-full pb-3 text-center text-xl font-semibold"
                    >
                    <h1> {currentElement.name ||
                        currentElement.title ||
                        currentElement.original_name ||
                        currentElement.original_title}</h1>
                    </div>
                    {
                    currentElement.overview ? (
                        <p
                    className='absolute top-0 group-hover:bg-black/50 group-hover:shadow-lg group-hover:shadow-black/10 group-hover:backdrop-blur-sm p-5 font-medium h-full group text-zinc-100 text-md w-full opacity-0 group-hover:opacity-100  '
                    >
                    {currentElement.overview.slice(0,100)}...
                    <p to="/MovieDetails" className="text-blue-500">more</p>
                    </p>
                    ) : <p
                    className='absolute top-0 group-hover:bg-black/50 group-hover:shadow-lg group-hover:shadow-black/10 group-hover:backdrop-blur-sm p-5 font-medium h-full group text-zinc-100 text-md w-full opacity-0 group-hover:opacity-100  '>No Detail's</p>
                    }
                    
                </Link>
            ))
        ) : <h1>Nothing to show</h1>
       }
    </div>
  )
}

export default HorCards