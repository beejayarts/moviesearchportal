import React, { useState, useEffect } from "react";
import "./App.css";
import MovieSearch from "./MovieSearch";
import MovieCard from "./MovieCard";

// const api_key = 'a81cfbc24ce9eb4338a6bdfe1b3bd2bf';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    // const url = `https://api.themoviedb.org/3/movie/550?api_key=a81cfbc24ce9eb4338a6bdfe1b3bd2bf&language=en-US&query=${term}&page=1&include_adult=false`;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=a81cfbc24ce9eb4338a6bdfe1b3bd2bf&query=${term}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
        console.log(data.results);
      })
      .catch((err) => console.log(err.response));
  }, [term]);

  return (
    <div className="App">
      <h1 className="title"> Beejay MoviePortal </h1>

      <MovieSearch collectTerm={(text) => setTerm(text)} />
      {/* checking of images dey load or not */}
      {isLoading && movies === 0 && (
        <h1 className="error">Oga, sorry this movie no dey</h1>
      )}

      {
        <div className="card-list">
          { 
           !isLoading && movies !== 0 && ( movies
            .filter((movie) => movie.poster_path)
            .map((movie) => {
              return <MovieCard key={movie.id} oneMovie={movie} />;
            })) 
          }
        </div>
      }

      {/* {isLoading  ? (
        <h1 className="error">Loading...</h1>
      ) : (
        <div className='card-list'>
          {movies.filter(movie=>movie.poster_path).map((movie) => {
            return <MovieCard key={movie.id} oneMovie={movie} />;
          })}
        </div>
      )} */}
    </div>
  );
};

export default App;
