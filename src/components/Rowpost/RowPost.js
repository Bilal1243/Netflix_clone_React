import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {img_url,api_key} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response => {
      setMovies(response.data.results)
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovieTrailer = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response => {
      if(response.data.results.length !== 0){
        setId(response.data.results[0])
      }
      else{
        alert('not items found')
      }
    }).catch(err => {
      alert('not items found')
    })
  }
  return (
    <div className='row'>
       <h2>{props.title}</h2>
       <div className='posters'>
            {
              movies.map((movie)=>{
                  return (
                    <img onClick={()=> handleMovieTrailer(movie.id)} src={`${img_url+movie.backdrop_path}`} alt="Poster" className={props.isSmall ? 'smallPoster' : 'poster'} style={{cursor:'pointer'}}/>
                  )
              })
            }
       </div>
       {urlId && <Youtube videoId={urlId.key} opts={opts} />  }
    </div>
  )
}

export default RowPost
