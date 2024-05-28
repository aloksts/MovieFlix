import { Api_Options } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
const useMovieVideo=(movieId)=>{
    const dispatch=useDispatch();
const getMovieVideo =async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+ movieId+"/videos",Api_Options);
    const json =await data.json();
    const filterData=json.results.filter(video =>video.type === "Trailer");
    const trailer= filterData.length?filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(()=>{
    getMovieVideo(); 
  },[]);
};

  export default useMovieVideo;