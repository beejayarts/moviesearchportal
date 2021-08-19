import React, { useState } from "react";
import "./moviesearch.css";

const MovieSearch = ({ collectTerm }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    collectTerm(query);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="query">
          Movie name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="James Bond..."
          value={query}
        />
        <button className="button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default MovieSearch;
