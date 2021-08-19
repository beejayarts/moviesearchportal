import React from "react";
import "./movieCard.css";

const MovieCard = ({ oneMovie }) => {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
        alt="movie poster"
      />
      <div className="card--content">
        <h3 className="movie--title">{oneMovie.title}</h3>
        <p>
          <small>Release date: {oneMovie.release_date}</small>
        </p>
        <p>
          <small>Rating: {oneMovie.vote_average}</small>
        </p>
        <p className="movie--desc">{oneMovie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
