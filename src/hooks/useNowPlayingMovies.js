import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { Api_Options } from "../utils/constant";

const useNowPlayingMovies=()=>{

const dispatch= useDispatch();
const getNowPlayingMovies= async ()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/now_playing', Api_Options);
  const json=await data.json();
  
  dispatch(addNowPlayingMovies(json.results));

}
useEffect(() => {
  getNowPlayingMovies();
}, []);
};

export default useNowPlayingMovies;
