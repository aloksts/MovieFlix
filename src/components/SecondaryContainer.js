import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies&&(
    <div className='bg-black'>
        <div >
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Top Rated movies"} movies={movies.topRatedMovies}/>
          <MovieList title={"Popular movies"} movies={movies.popularMovies}/>
        
       
          </div>

    </div>
    )
  )
}

export default SecondaryContainer
