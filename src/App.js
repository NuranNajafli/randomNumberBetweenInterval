import { useState } from "react";

function App() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [random, setRandom] = useState(13);

  const handleRandom = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1)) + min);
  };
  return (
    <div className="main">
      <div className="box">
        <div className="top">
          {" "}
          Random Number: <span>{random}</span>
        </div>
        <div className="center">
          <div className="left">
            <label>Min</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(+e.target.value)}
            />
          </div>
          <div className="right">
            <label>Max</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(+e.target.value)}
            />
          </div>
        </div>
        <div className="bottom">
          <button onClick={handleRandom}>Get Random Number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
