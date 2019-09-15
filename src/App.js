import React from "react";
import Display from "./components/Display";
function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="inner-wrapper">
          <div className="header">
            <h1>Lambda League</h1>
          </div>
          <Display />
        </div>
      </div>
    </div>
  );
}

export default App;
