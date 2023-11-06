import React from "react";
import Select from "../Components/Select";

const App: React.FC = () => {

  interface Option {
    value: string;
    label: string;
  }
  const handleSelect = (option: Option) => {
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
    { value: "option9", label: "Option 9" },
    { value: "option10", label: "Option 10" },
  ];

  return (
    <div className="">
      <Select options={options} width={500} placeholder="Choose option" onSelect={(option) => handleSelect(option)} />
    </div>
  );
};

export default App;
