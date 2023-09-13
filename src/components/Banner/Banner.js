import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {api_key,img_url} from '../../constants/constants'


function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((response) => {
      const randomNum = Math.floor(Math.random() * 20) + 1;
      setMovie(response.data.results[randomNum])
    })
  },[])
  return (
    <div className='banner'
    style={{backgroundImage: `url(${movie ? img_url+movie.backdrop_path : "Fetch error"})`}}>
        <div className='content'>
            <h1 classNaleme='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
} 

export default Banner
