import React from "react";

function MovieTile(props){
    return(
        <div className="movie-tile">
          <img src={props.img} alt="image"/> 
          <h6>{props.name}</h6>
          <p>{props.year}</p>
        </div>
    )
}
export default MovieTile;