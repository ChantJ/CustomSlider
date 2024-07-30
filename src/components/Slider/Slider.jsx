import { steps } from "../constants";

const Slider = ({ value, onChange, onRelease }) => {
  return (
    <div className="range-container">
      <input
        className="slider"
        type={"range"}
        value={value}
        min="1"
        max="100"
        style={{
          background: `linear-gradient(to right,    #0af75a,
            #05c546,
            #049234 ${value}%, #ddd ${value}%)`,
        }}
        onClick={onRelease}
        onChange={onChange}
      />
      <div className="range-labels">
        {steps.map((label, index) => (
          <span
            key={index}
            className="range-label"
            style={{ left: `calc(${index * 10}% )` }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
