import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;
  // const addValue = () => {
  //   console.log("clicked", counter);
  //   setCounter(counter + 1);
  // };

  const addValue = () => {
    if (counter < 20) {
      setCounter((prev) => prev + 1);
      console.log("clicked", counter + 1);
    }
  };

  // const decreaseValue = () => {
  //   setCounter(counter - 1);
  // };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
      console.log("clicked", counter - 1);
    }
  };

  return (
    <div id="center">
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter}</h2>

      <div className="btns">
        <button onClick={addValue}>Add value{counter}</button>
        <button onClick={decreaseValue}>Decrease value{counter}</button>
      </div>
      <p>footer: {counter}</p>
    </div>
  );
}

export default App;
