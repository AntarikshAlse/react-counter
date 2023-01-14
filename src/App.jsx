import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (msg === true && count >= 0) setMsg(false);
    // reset
    if (count >= 10 && reset === false) {
      setReset(true);
    } else if (count < 10 && reset === true) {
      setReset(false);
    }
  }, [count]);

  const handleCount = (flag) => {
    if (flag === "-") {
      if (count > 0) {
        setCount(() => count - 1);
      } else if (count === 0 && msg === false) {
        setMsg(true);
      }
    } else if (flag === 0) {
      setCount(0);
    } else {
      setCount(() => count + 1);
    }
  };
  return (
    <div className="App">
      <h1>Counter Using React</h1>
      <div className="card w-50">
        Your Current count is {count}
        <hr />
        {msg && <p style={{ color: "red" }}>Error : Cannot go below 0</p>}
        <div className="flex">
          <button className="bg-white" onClick={() => handleCount("-")}>
            Decrement
          </button>
          <button className="bg-white" onClick={() => handleCount("+")}>
            Increament
          </button>

          {reset && <button onClick={() => handleCount(0)}>Back To 0</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
