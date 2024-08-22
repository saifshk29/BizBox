import React from 'react'
import { Link } from "react-router-dom";
import Trending from '../Trending';

const SideNav = () => {
  return (
    <div className="w-[20%]  border-zinc-400 p-10 overflow-y-visible">
        <h1 className="text-2xl ">
            <i class="ri-tv-fill mr-2 text-[#6556CD]"></i>
            <span className="text-white font-bold">BizBox.</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 font-semibold text-xl gap-3">
            <h1 className="mt-10 mb-5 text-white font-semibold text-xl">New Feeds</h1>
            <Link to="/trending" className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
                <i class="ri-fire-fill mr-2"></i>
                Trending
            </Link>
            <Link to='/popular' className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
                <i class="ri-bard-fill mr-2"></i>
                Popular
            </Link>
            <Link to="/movie" className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
                <i class="ri-movie-2-fill mr-2"></i>
                Movies
            </Link>
            <Link to="/tvshows" className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
                <i class="ri-tv-2-fill mr-2"></i> 
                TV Show's
            </Link>
            <Link to="/people" className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
                <i class="ri-team-fill mr-2"></i>
                People
            </Link>

        </nav>
        <hr className="border-none h-[1px] mt-2 bg-zinc-500"></hr>
        <nav className="flex flex-col text-zinc-400 font-semibold text-xl gap-5">
            <h1 className="mt-5 mb-2 text-white font-semibold text-xl">Website Info</h1>
            <Link className="p-5  rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
                <i class="ri-information-2-fill mr-2"></i>
                About
            </Link>
            <Link to="/ContactUs" className="p-5 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
                <i class="ri-phone-fill mr-2"></i>
                Contact Us
            </Link>
            

        </nav>
    </div>
  )
}

export default SideNav