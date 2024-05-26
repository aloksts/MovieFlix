import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
   useNowPlayingMovies();
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
