import React, { useState } from "react";
import CommonCheckbox from "../Components/CommonCheckbox";

const CheckBox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkbox Example</h1>
      <CommonCheckbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        label="Check me"
        name="first"
        className="accent-emerald-500"
      />
      <p>Checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  );
};

export default CheckBox;
