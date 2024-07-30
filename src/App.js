import { useState } from "react";
import "./App.css";
import PredefinedPositions from "./components/Predefined";
import SliderContainer from "./components/Slider";

function App() {
  const [positions, setPositions] = useState([]);
  return (
    <div className="App">
      <h1>Custum Slider</h1>
      <PredefinedPositions setPositions={setPositions} />
      {positions.length > 0 && <SliderContainer positions={positions} />}
    </div>
  );
}

export default App;
