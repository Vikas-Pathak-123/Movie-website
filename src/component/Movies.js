import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context'

const Movies = () => {
  const {movie, isLoading} = useGlobalContext();
  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  return (
    <>
      <section className='movie-page'>
        <div className='container grid grid-4-col'>

        
          {movie.map((curMovie)=>{
            const {imdbID,Title,Poster,Year,Type} = curMovie;
            const movieName =  Title.substring(0,15);
            return(
              <NavLink to={`movie/${imdbID}`} key={imdbID} >
                <div className='card'>
                  <div className='card-info'>
                    <h2>{movieName.length >= 15 ? `${movieName}...` : movieName }</h2>
                    <p>{Year} {Type}</p>
                    <img src={Poster} alt={imdbID} srcSet=" "/>
                  </div>
                </div>
              </NavLink>
            )
          })}
      </div>
      </section>
    </>
  )
}

export default Movies