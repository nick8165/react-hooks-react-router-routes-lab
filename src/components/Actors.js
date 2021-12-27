import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return <div key={actor.name}>{actor.name}
        <ul>Movies
          {actor.movies.map((movie) => {
            return <li key={movie}>{movie}</li>})}
        </ul>
        </div>})}
    </div>
    )
}

export default Actors;
