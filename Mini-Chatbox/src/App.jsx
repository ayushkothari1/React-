import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="w-64 h-10 bg-white"></div>
      <Header />
    </div>
  );
}

export default App;
