import React from "react";

const GenerateJoke = ({ selectJoke }) => {
  return (
    <div className="GenerateJoke">
      <button onClick={selectJoke}>Get Joke</button>
    </div>
  );
};

export default GenerateJoke;
