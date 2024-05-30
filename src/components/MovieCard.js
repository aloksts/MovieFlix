import React from 'react'
import { img_cdn } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-6'>
       <img src={img_cdn+ posterPath} alt="movielmg"/>
    </div>
  )
}

export default MovieCard
