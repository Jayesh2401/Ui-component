import React, { useState } from 'react';
import { Meta, Story } from '@storybook/addon-docs';
import RadioGroup from '../Components/RadioButtonToggle';

export default {
  title: 'Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: {
        type: 'object',
      },
      description:
        'The options for the radio group. An array of objects with label and value properties.',
    },
    selectedValue: {
      control: {
        type: 'object',
      },
      type: 'object',
      description:
        'The option that is initially selected. An object with label and value properties.',
    },
    onChange: {
      control: {
        type: 'function',
      },
      type: 'function',
      description:
        'The function that is called when the value of the selected option changes. The function takes one argument, which is the new selected option.',
    },
    className: {
      control: {
        type: 'string',
      },
      type: 'string',
      description: 'The CSS class name for the radio group.',
    },
  },
};

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];
const Template = () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedOption, setSelectedOption] = useState();
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <RadioGroup
      options={options}
      selectedValue={selectedOption}
      onChange={handleOptionChange}
    />
  );
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  options: options,
};

// const Radio = () => {
//   const [selectedOption, setSelectedOption] = useState();

//   const handleOptionChange = (value) => {
//     setSelectedOption(value);
//   };

//   return (
//     <RadioGroup
//       options={options}
//       selectedValue={selectedOption}
//       onChange={handleOptionChange}
//     />
//   );
// };
