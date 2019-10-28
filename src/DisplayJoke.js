import React from "react";

const DisplayJoke = ({ joke }) => {
  return (
    <div className="DisplayJoke">
      <p>Chuck says: {joke.value}</p>
      <img src={joke.icon_url} alt="chuck norris pic" />
    </div>
  );
};

export default DisplayJoke;
