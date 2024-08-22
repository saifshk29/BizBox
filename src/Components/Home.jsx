import React from 'react'
import { useState,useEffect } from 'react'
import SideNav from './Partials/SideNav'
import TopNav from './Partials/TopNav'
import axios from "../utils/axios"
import Header from './Partials/Header'
import HorizontalCard from './Partials/HorizontalCard'
import DropDown from './Partials/DropDown'
import Loading from './Loading'

document.title = "BizBox | Homepage"

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");

  const getWallpaper = async ()=>{
    try {
        const {data} = await axios.get(`/trending/all/day`);
        let randomData = data.results[(Math.random() * data.results.length).toFixed()]
        setWallpaper(randomData)

        
    } catch (error) {
        console.log("error: ",error);
    }
}

const getTrending = async ()=>{
  try {
    const {data}= await axios.get(`/trending/${category}/day`)
    setTrending(data.results)

    
} catch (error) {
    console.log("error: ",error)
}
}


  useEffect(() => {
    getTrending();
    !wallpaper && getWallpaper();
  }, [category]);

  return wallpaper ?(
    <>
        <SideNav/>
        <div className="w-[80%] h-[200vh]  relative">
          <TopNav/>
          <Header data={wallpaper}/>
          <div className="flex p-5 items-center justify-between ">
            <h1 className="text-zinc-400 text-3xl font-semibold">Trending</h1>
            <DropDown options={["tv","movie","all"]} title="Filter"
            func={
              (e)=>{
                setCategory(e.target.value)
              }
            }/>
          </div>
          <HorizontalCard data={trending} />
        </div>
    </>
  ) : (<Loading/>)
}

export default Home