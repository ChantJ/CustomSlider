import { useRef } from "react";
import "./predefined.css";

const PredefinedPositions = ({ setPositions }) => {
  const ref = useRef();
  const addPosition = () => {
    let positions = [...new Set(ref.current.value.split(",").sort((a, b) => a - b))]
    ref.current.value = "";
    setPositions(positions);
  };
  return (
    <div className="input-container">
      <div>
        Please eneter predefined positions for the Slider seperated by ","
      </div>
      <div>
        <input ref={ref} />
        <button className="generate-btn" onClick={addPosition}>
          {" "}
          Generate Slider{" "}
        </button>
      </div>
    </div>
  );
};

export default PredefinedPositions;
