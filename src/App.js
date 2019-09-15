import React from "react";
import Display from "./components/Display";
import DashBoard from "./components/DashBoard";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [balls, setBalls] = useLocalStorage("ball-count", 0);
  const [strikes, setStrikes] = useLocalStorage("strike-count", 0);
  const [fouls, setFouls] = useLocalStorage("foul-count", 0);
  const [hits, setHits] = useLocalStorage("hit-count", 0);
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="inner-wrapper">
          <div className="header">
            <h1>Lambda League</h1>
          </div>
          <Display balls={balls} strikes={strikes} fouls={fouls} hits={hits} />
          <DashBoard
            balls={balls}
            setBalls={setBalls}
            hits={hits}
            setHits={setHits}
            fouls={fouls}
            setFouls={setFouls}
            strikes={strikes}
            setStrikes={setStrikes}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
