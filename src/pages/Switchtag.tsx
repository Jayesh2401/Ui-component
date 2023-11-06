import React, { useState } from "react";
import CustomSwitch from "../Components/CustomSwitch";

const Switchtag: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Custom Switch Example</h1>
      <CustomSwitch
        id="mySwitch"
        checked={isChecked}
        onChange={handleSwitchChange}
        label="Toggle me"
        disabled={false}
        className="custom-switch  dark:checked:before:bg-yellow-200 "
      />
      <p>Switch is {isChecked ? "on" : "off"}</p>
    </div>
  );
};

export default Switchtag;
