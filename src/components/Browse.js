import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
   useNowPlayingMovies();
   useTopRatedMovies();
   usePopularMovies();
  return (
    <div>
      <Header/>
      {/*
           Maincontainer
           -- videoBackground
           -- videoTitle
           Secondarycontainer
              movielist * N
               -- cards * N
        */}
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  );
};

export default Browse;
