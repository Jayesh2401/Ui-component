import React, { useState } from 'react';
import CommonTextarea from '../Components/CommonTextarea';

export default {
  title: 'TextArea',
  component: CommonTextarea,
  tags: ['autodocs'],
  argTypes: {
    variation: {
      type: 'string',
      description:
        'The variation of the textarea. The possible values are "box" and "bottom-line".',
      control: {
        type: 'radio',
      },
      options: ['box', 'bottom-line'],
    },
    size: {
      type: 'string',
      description:
        'The size of the textarea. The possible values are "small", "medium", and "large".',
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    label: {
      type: 'string',
      description: 'The label for the textarea.',
    },
    disable: {
      type: 'boolean',
      description: 'Whether the textarea is disabled.',
    },
    className: {
      type: 'string',
      description: 'The CSS class name for the textarea.',
    },
    maxHeight: {
      type: 'number',
      description: 'The maximum height of the textarea.',
    },
    containerClass: {
      type: 'string',
      description: 'The CSS class name for the container element.',
    },
    placeHolder: {
      type: 'string',
      description: 'The placeholder text for the textarea.',
    },
    labelClass: {
      type: 'string',
      description: 'The CSS class name for the label element.',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <CommonTextarea {...args} />;
};

export const PrimaryTextArea = Template.bind({
  label: 'Enter your name',
  placeholder: 'Enter your name',
});

// Define initial props for your TextField story

// You can create additional stories with different props

// export const RequiredField = Template.bind({});
// RequiredField.args = {
//   label: 'Your name',
//   placeholder: 'Enter your name',
//   required: true,
// };

// export const DisabledField = Template.bind({});
// DisabledField.args = {
//   label: 'Your name',
//   placeholder: 'Enter your name',
//   disabled: true,
// };

// export const CustomClassName = Template.bind({});
// CustomClassName.args = {
//   label: 'Your name',
//   placeholder: 'Enter your name',
//   className:
//     'border-gray-300 p-2 rounded-md focus:border-[#7f56d9] focus:outline-none',
// };

// You can also create a story with error message
// export const TextFieldWithError = Template.bind({});
// TextFieldWithError.args = {
//   label: 'Email',
//   placeholder: 'Enter your email',
// };
