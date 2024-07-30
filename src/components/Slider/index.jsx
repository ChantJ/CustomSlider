import { useEffect, useState } from "react";
import Slider from "./Slider";
import "./slider.css";

const SliderContainer = ({ positions }) => {
  const [value, setValue] = useState("0");

  useEffect(() => {
    setValue(positions[0]);
  }, [positions]);

  const onRelease = (e) => {
    let val = e.target.value;
    if (positions.includes(val)) setValue(val);
    else {
      let newVal = "0";
      let diff = Infinity;
      for (const pos of positions) {
        if (Math.abs(val - pos) < diff) {
          newVal = pos;
          diff = Math.abs(val - pos);
        } else {
          setValue(newVal);
          break;
        }
      }
      setValue(newVal);
    }
  };
  return (
    <div className="slider-container">
      <div>current predefined positions are: {positions.join(", ")}</div>
      <div>current position is: {value}</div>
      <Slider
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onRelease={onRelease}
      />
    </div>
  );
};

export default SliderContainer;
