//https://www.omdbapi.com/?i=tt3896198&apikey=52fe0000 (for understanding purpose)

import React from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../context';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SingleMovie = () => {
  const {id} = useParams();

  const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");
   

    
    const getMovies = async(url)=>{
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True" ){
                
                setIsLoading(false);
                setMovie(data);
      
            }
        } catch (error) {
           console.log("error") ;
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&i=${id}`);
        },500)
        return ()=> clearTimeout(timerOut);
    }, [id]);
    
    if (isLoading) {
      return (
        <section className="movie-section ">
          <div className="loading">Loading....</div>;
        </section>
      );
    }

  return (
    <section className="movie-section">
    <div className="movie-card">
       <figure>
        <img src={movie.Poster} alt="" />
      </figure>
      <div className="card-content">
        <p className="title">{movie.Title}</p>
        <p className="card-text">{movie.Released}</p>
        <p className="card-text">{movie.Genre}</p>
        <p className="card-text">{movie.imdbRating} / 10</p>
        <p className="card-text">{movie.Country}</p>
       {/* <p className="card-text">{movie.Rated}</p>
        <p className="card-text">{movie.Runtime}</p>
        <p className="card-text">{movie.Director}</p>
        <p className="card-text">{movie.Actors}</p>
        <p className="card-text">{movie.Writer}</p>
        <p className="card-text">{movie.Plot}</p>
        <p className="card-text">{movie.Language}</p>
        <p className="card-text">{movie.Awards}</p>
        <p className="card-text">{movie.Metascore}</p>
        <p className="card-text">{movie.imdbRating}</p> */}
      
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  </section>
  )
}

export default SingleMovie