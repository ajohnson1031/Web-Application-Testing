import React, { useState } from "react";

const Display = ({ balls, strikes, fouls, hits }) => {
  return (
    <div className="display">
      <div className="ball-count counter">
        <h2>Balls:</h2>
        <p>{balls}</p>
      </div>
      <div className="strike-count counter">
        <h2>Strikes:</h2>
        <p>{strikes}</p>
      </div>
      <div className="foul-count counter">
        <h2>Fouls:</h2>
        <p>{fouls}</p>
      </div>
      <div className="hit-count counter">
        <h2>Hits:</h2>
        <p>{hits}</p>
      </div>
    </div>
  );
};

export default Display;
