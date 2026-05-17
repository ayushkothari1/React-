import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./componenets/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName: "AYUSH",
    age: 21,
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card userName="chaiaurcode" btnText="click me" />
      <Card userName="Samosa aur react" btnText="visit me" />
    </>
  );
}

export default App;
