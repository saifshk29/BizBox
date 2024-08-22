import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";

import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import HorCards from "./Partials/HorCards";
import Loading from "./Loading";

const TvShowDetails = () => {
    document.title="BizBox | Tv Shows"
    const media_type ="tv";
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.tv);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncloadtv(id));
        return () => {
            dispatch(removetv());
        };
    }, [id]);
  return info ? (
    <div className="text-white w-full h-full">
        {/* MOVIE DETAILS */}
        <div style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }} 
            className="h-[100%] pt-10 pb-10">
                <div className="w-[80%] h-[100%]  mx-auto text-xl">
                    {/*top nav*/}
                    <div className="w-full h-[5vh] flex items-center gap-10 mb-5">
                        <Link
                        onClick={()=>{
                            navigate(-1)
                        }}
                        >
                        <i className=" ri-arrow-left-line"></i>
                        </Link>
                        <a href={info.detail.homepage} target='_blank'>
                            <i className="ri-external-link-fill"></i>
                        </a>
                        <a target="_blank"
                        href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                            <i className="ri-earth-fill"></i>
                        </a>
                        <a
                        target="_blank"
                        href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>
                            imdb
                        </a>
                    </div>
                    {/*MAIN DIV MAIN CONTENT*/}
                    <div className="h-full text-white w-full flex-col flex ">
                        <div className="flex items-baseline gap-2">
                            <h1 className="text-6xl font-bold   ">
                                {info.detail.name ||
                                    info.detail.title ||
                                    info.detail.original_name ||
                                    info.detail.original_title}
                            </h1>
                            <span>
                                ({info.detail.first_air_date.split("-")[0]})
                            </span>
                        </div>
                        <div className="flex items-baseline gap-2 mt-5">
                            <p>User Rating: {Math.round(info.detail.vote_average * 10) / 10} </p>
                            <p> | </p>
                            <p>Air Date : {info.detail.first_air_date}</p>
                            <p>|</p>    
                            <p>{info.detail.genres.map((g) => g.name).join(" , ")}</p>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-2xl font-bold mb-5">Overview:</h1>
                            {
                                info.detail.overview ? (
                                    <p className="text-xl w-[75%]">{info.detail.overview}</p>
                                ) : <p className="text-xl w-[75%]">No overview</p>
                            }
                            
                        </div>
                        <div className="mt-5">
                            <h1 className="text-2xl font-bold mb-5">Language's: </h1>
                            <p classname="text-xl w-[75%]">
                                {info.translations.join(", ").slice(0,100)} ...
                            </p>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-2xl font-bold">Number Of Season's : <span className="text-lg font-normal">{info.detail.seasons.length}</span></h1>
                        </div>
                        <button  className="mt-10 mb-5 self-start">
                            <a href={`https://www.youtube.com/results?search_query=${info.detail.name ||
                                    info.detail.title ||
                                    info.detail.original_name ||
                                    info.detail.original_title} trailer`} target="_blank" className="bg-[#6556CD] px-2 py-4 rounded-lg text-lg  ">
                                <i className="ri-play-fill "></i>
                                Play Trailer
                            </a>
                        </button>
                        {/*Available on platforms*/}
                        <div className="mt-5 flex gap-2">
                        {info.watchproviders && info.watchproviders.flatrate && (
                            <div className="flex gap-x-10 items-center text-white">
                                <h1>Available on Platfotms</h1>
                                {info.watchproviders.flatrate.map((w, i) => (
                                    <img
                                        key={i}
                                        title={w.provider_name}
                                        className="w-[5vh] h-[5vh] object-cover rounded-md"
                                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                        alt=""
                                    />
                        ))}
                        {info.watchproviders && info.watchproviders.rent && (
                            <div className="flex gap-x-10 items-center text-white">
                                <h1>Available on Rent</h1>
                                {info.watchproviders.rent.map((w, i) => (
                                    <img
                                        key={i}
                                        title={w.provider_name}
                                        className="w-[5vh] h-[5vh] object-cover rounded-md"
                                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                        alt=""
                                    />
                                ))}
                            </div>
                        )}
                        {info.watchproviders && info.watchproviders.buy && (
                            <div className="flex gap-x-10 items-center text-white">
                                <h1>Available to Buy</h1>
                                {info.watchproviders.buy.map((w, i) => (
                                    <img
                                        key={i}
                                        title={w.provider_name}
                                        className="w-[5vh] h-[5vh] object-cover rounded-md"
                                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                        alt=""
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
                        </div>
                    </div>
                </div>
                
        </div>
        <div className="w-full text-center my-5">
            <h1 className="text-4xl font-bold">Recommendations</h1>
        </div>
        <HorCards 
        data={
            info.recommendations.length > 0
                ? info.recommendations
                : info.similar
        }
        media_type={media_type}
        />
        
    </div>
  ) : <Loading/>
}

export default TvShowDetails