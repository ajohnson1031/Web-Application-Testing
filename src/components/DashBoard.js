import React from "react";
import { handleBallTest } from "./helpers";

const DashBoard = ({
  balls,
  setBalls,
  strikes,
  setStrikes,
  fouls,
  setFouls,
  hits,
  setHits
}) => {
  const handleBallClick = e => {
    e.preventDefault();
    if (balls >= 3) {
      setBalls(0);
      setHits(Number(hits) + 1);
      setStrikes(0);
      setFouls(0);
    } else setBalls(Number(balls) + 1);
  };
  const handleStrikeClick = e => {
    e.preventDefault();
    if (strikes >= 2) {
      setStrikes(0);
      setFouls(0);
      setBalls(0);
      setHits(0);
    } else setStrikes(Number(strikes) + 1);
  };
  const handleFoulClick = e => {
    e.preventDefault();

    if (strikes >= 2) {
    } else {
      setStrikes(Number(strikes) + 1);
    }
    setFouls(Number(fouls) + 1);
  };
  const handleHitClick = e => {
    e.preventDefault();
    setBalls(0);
    setStrikes(0);
    setFouls(0);
    setHits(Number(hits) + 1);
  };
  return (
    <div className="dashboard">
      <button onClick={handleBallClick}>Ball</button>
      <button onClick={handleStrikeClick}>Strike</button>
      <button onClick={handleFoulClick}>Foul</button>
      <button onClick={handleHitClick}>Hit</button>
    </div>
  );
};

export default DashBoard;
