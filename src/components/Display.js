import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Display = () => {
  const swingTypes = ["ball", "strike", "foul", "hit"];

  const [swingResult, setSwingResult] = useLocalStorage(
    swingTypes[Math.floor(Math.random() * swingTypes.length)],
    0
  );

  return (
    <div className="display">
      <div className="ball-count counter">
        <h2>Balls:</h2>
        <p>{swingResult || 0}</p>
      </div>
      <div className="strike-count counter">
        <h2>Strikes:</h2>
        <p>{swingResult || 0}</p>
      </div>
      <div className="foul-count counter">
        <h2>Fouls:</h2>
        <p>{swingResult || 0}</p>
      </div>
      <div className="hit-count counter">
        <h2>Hits:</h2>
        <p>{swingResult || 0}</p>
      </div>
    </div>
  );
};

export default Display;
