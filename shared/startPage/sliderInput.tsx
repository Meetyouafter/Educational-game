import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SliderInput = ({ value, onChange, marks }) => {
  const labelStyle = {
    fontFamily: "Calibri",
    fontWeight: 700,
    fontSize: 24,
    color: "#4F4B61",
    transform: "translate(-80%, -45px)",
  };

  const sliderMarks = marks.reduce((acc, cur, idx) => {
    acc[idx] = {
      label: cur,
      style: labelStyle,
    };
    return acc;
  }, {});

  const handleChange = (value) => {
    onChange(sliderMarks[value].label);
  };

  const mapValueToLabel = marks.reduce((acc, cur, idx) => {
    acc[cur] = idx;
    return acc;
  }, {});

  return (
    <Slider
      value={mapValueToLabel[value]}
      min={0}
      max={marks.length - 1}
      marks={sliderMarks}
      step={null}
      onChange={handleChange}
      dotStyle={{
        display: "none",
      }}
      trackStyle={{
        display: "none",
      }}
      railStyle={{
        background: "#FFD748",
        height: 21,
        borderRadius: 10,
      }}

      handleStyle={{
        background: "#104987",
        border: "none",
        boxShadow: "none",
        width: 23,
        height: 23,
        opacity: 1,
        marginTop: 0,
      }}
    />
  );
};

export { SliderInput };
