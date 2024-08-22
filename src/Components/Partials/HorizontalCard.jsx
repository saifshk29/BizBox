import React from 'react'
import { Link } from "react-router-dom";
import '../../index.css'

const HorizontalCard = ({ data }) => {
    
    return (
        <div 
        
        className="w-full h-full flex flex-wrap gap-5 p-5 ">
            {
                data.map((currentElement, index) => (
                    <Link
                        to={`/movie/details/${currentElement.id}`}
                        key={index} className="w-[15%] cursor-pointer shadow-lg  card-container h-[35vh] group bg-zinc-900 flex flex-col justify-between items-start relative">
                        <img src={
                            currentElement.poster_path || currentElement.backdrop_path || currentElement.profile_path
                                ? `https://image.tmdb.org/t/p/original/${currentElement.poster_path ||
                                currentElement.backdrop_path ||
                                currentElement.profile_path
                                }`
                                : noimage
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
                            <p
                                className='absolute top-0 group-hover:bg-black/50 group-hover:shadow-lg group-hover:shadow-black/10 group-hover:backdrop-blur-sm p-5 font-medium h-full group text-zinc-100 text-md w-full opacity-0 group-hover:opacity-100  '
                                >
                                {currentElement.overview.slice(0,100)}...
                                <span className="text-blue-500">more</span>
                            </p>

                    </Link>
                ))
            }


        </div>

    )
}

export default HorizontalCard