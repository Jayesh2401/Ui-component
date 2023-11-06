// import MultiSelect from "../Components/MultiSelect";

// const MyDecorator = (story) => {
//   return <div className="w-full h-[190px]">{story()}</div>;
// };

// export default {
//   title: "MultiSelect",
//   component: MultiSelect,
//   tags: ["autodocs"],
//   decorators: [MyDecorator],
//   argTypes: {
//     onSelect: {
//       name: "onSelect",
//       description: `Return selected value as an object.`,
//       control: {
//         type: "function",
//       },
//     },
//     onDeselect: {
//       name: "onDeselect",
//       description: `delete selected value as an object.`,
//       control: {
//         type: "function",
//       },
//     },
//     options: {
//       type: "array",
//       required: true,
//       description:
//         "The options for the MultiSelect component. An array of objects with value and label properties.",
//     },
//     defaultOption: {
//       type: "object",
//       description: "The option that should be selected by default.",
//     },
//     placeholder: {
//       type: "string",
//       description: "The placeholder text for the input field.",
//     },
//     width: {
//       type: "number",
//       description: "The width of the MultiSelect component in pixels.",
//     },
//   },
// };

// const Template = (args) => <MultiSelect {...args} />;

// const options = [
//   { value: "option1", label: "Option 1" },
//   { value: "option2", label: "Option 2" },
//   { value: "option3", label: "Option 3" },
//   { value: "option4", label: "Option 4" },
//   { value: "option5", label: "Option 5" },
//   { value: "option6", label: "Option 6" },
//   { value: "option7", label: "Option 7" },
//   { value: "option8", label: "Option 8" },
//   { value: "option9", label: "Option 9" },
//   { value: "option10", label: "Option 10" },
// ];

// export const MultiSelection = Template?.bind({});
// MultiSelection.args = {
//   options,
//   placeholder: "Select options",
//   width: 500,
//   selectedOptions: [
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//   ],
//   onSelect: (option) => {
//     console.log("Selected:", option);
//   },
//   onDeselect: (option) => {
//     console.log("Deselected:", option);
//   },
// };

import MultiSelect from "../Components/MultiSelect";
import React, { useState } from "react";

const MyDecorator = (story) => {
  return <div className="w-full h-[190px]">{story()}</div>;
};

export default {
  title: "MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  decorators: [MyDecorator],
  argTypes: {
    onSelect: {
      name: "onSelect",
      description: `Return selected value as an object.`,
      control: {
        type: "function",
      },
    },
    onDeselect: {
      name: "onDeselect",
      description: `Delete selected value as an object.`,
      control: {
        type: "function",
      },
    },
    options: {
      type: "array",
      required: true,
      description:
        "The options for the MultiSelect component. An array of objects with value and label properties.",
    },
    defaultOption: {
      type: "object",
      description: "The option that should be selected by default.",
    },
    placeholder: {
      type: "string",
      description: "The placeholder text for the input field.",
    },
    width: {
      type: "number",
      description: "The width of the MultiSelect component in pixels.",
    },
  },
};

const Template = (args) => {
  const [selectedOptions, setSelectedOptions] = useState(
    args.selectedOptions || []
  );

  const handleSelect = (option) => {
    const updatedSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(updatedSelectedOptions);
    args.onSelect && args.onSelect(option);
  };

  const handleDeselect = (option) => {
    const updatedSelectedOptions = selectedOptions.filter(
      (selected) => selected.value !== option.value
    );
    setSelectedOptions(updatedSelectedOptions);
    args.onDeselect && args.onDeselect(option);
  };

  return (
    <MultiSelect
      {...args}
      selectedOptions={selectedOptions}
      onSelect={handleSelect}
      onDeselect={handleDeselect}
    />
  );
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

export const MultiSelection = Template.bind({});
MultiSelection.args = {
  options,
  placeholder: "Select options",
  width: 900,
  selectedOptions: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ],
};
