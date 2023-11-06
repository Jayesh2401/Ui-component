import React, { useState } from "react";
import CustomSlider from "../Components/CustomSlider";

const Slider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(20);

  const handleSliderChange = (newValue: number) => {
    setSliderValue(newValue);
  };

  const h = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Custom Slider Example</h1>
      <CustomSlider
        label="Slider Label"
        min={0}
        max={100}
        step={5}
        size="w-full"
        emptyTrackColor="var(--your-empty-track-color)"
        filledTrackColor="var(--your-filled-track-color)"
        thumbColor="var(--your-thumb-color)"
        orientation="horizontal"
        isDisabled={false}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      Current Value: <span className="font-bold">{sliderValue}</span>
      <label
        htmlFor="medium-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default range
      </label>
      {/* <div className="relative "> */}
      <input
        id="custom-range"
        type="range"
        min="0"
        max="100"
        step="5"
        value={sliderValue}
        onChange={h}
        className="mi-input w-full h-2 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        style={{
          borderRadius: "25px",
        }}
      />
      <br />
      Current Value: <span className="font-bold">{sliderValue}</span>
    </div>
  );
};

export default Slider;
