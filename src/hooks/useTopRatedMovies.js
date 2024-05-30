
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { Api_Options } from "../utils/constant";

const useTopRatedMovies=()=>{

const dispatch= useDispatch();
const getTopRatedMovies= async ()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/top_rated', Api_Options);
  const json=await data.json();
  
  dispatch(addTopRatedMovies(json.results));

}
useEffect(() => {
  getTopRatedMovies();
}, []);
};

export default useTopRatedMovies;
