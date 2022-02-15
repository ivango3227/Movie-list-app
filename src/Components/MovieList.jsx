import React,{useState} from "react";
import MovieTile from "./MovieTile";
import movies from "../movies.js";
import {NavLink} from "react-router-dom";

function MovieList(){
    return(
        <div className="movie-list">
            <div className="movie-list-header">
            <h2>My movies</h2>
            <NavLink to="/create">
            <button className="movie-list-button">+</button>
            </NavLink>
            <button className="logout">Logout</button>
            </div>
            
            <div className="movie-list-container">
            {movies.map((movie)=>
              <MovieTile 
                  key={movie.key}
                  name={movie.name}
                  year={movie.publicationYear}
                  img={movie.imageSource}
              />
            )} 
            </div>
            
        </div>
     );

    
    
}

export default MovieList;