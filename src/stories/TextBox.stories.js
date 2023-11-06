import React, { useState } from 'react';
import InputField from '../Components/TextBox';

export default {
  title: 'TextBox',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      description: 'The label for the input field.',
    },
    value: {
      type: 'string',
      description: 'The initial value of the input field.',
    },
    onChange: {
      control: {
        type: 'function',
      },
      type: 'function',
      description:
        'A callback function that is called when the value of the input field changes.',
    },
    placeholder: {
      type: 'string',
      description: 'The placeholder text for the input field.',
    },
    type: {
      type: 'string',
      control: {
        type: 'select',
      },
      options: [
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
      description:
        "The type of input field. The possible values are 'text', 'email', 'password', etc.",
    },
    disabled: {
      type: 'boolean',
      description: 'Whether the input field is disabled.',
    },
    required: {
      type: 'boolean',
      description: 'Whether the input field is required.',
    },
    inputMode: {
      options: [
        'text',
        'decimal',
        'numeric',
        'tel',
        'search',
        'email',
        'url',
        'none',
      ],
      control: {
        type: 'select',
      },
      type: 'string',
      description:
        "The input mode for the input field. The possible values are 'text', 'decimal', 'numeric', etc.",
    },
    autoComplete: {
      type: 'string',
      description:
        "The autoComplete property for the input field. The possible values are 'on' and 'off'.",
    },
    id: {
      type: 'string',
      description: 'The id for the input field.',
    },
    maxLength: {
      type: 'number',
      description: 'The maximum length of the input field.',
    },
    className: {
      type: 'string',
      description: 'The CSS class name for the input field.',
    },
    name: {
      type: 'string',
      description: 'The name of the input field.',
    },
    error: {
      type: 'string',
      description: 'The error message for the input field.',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <InputField {...args} />;
};

export const PrimaryText = Template.bind({
  label: 'Enter your name',
  placeholder: 'Enter your name',
});

// Define initial props for your TextField story

// You can create additional stories with different props
export const PasswordField = Template.bind({});
PasswordField.args = {
  label: 'Your email address',
  placeholder: 'Enter your name',
};

export const RequiredField = Template.bind({});
RequiredField.args = {
  label: 'Your name',
  placeholder: 'Enter your name',
  required: true,
};

export const DisabledField = Template.bind({});
DisabledField.args = {
  label: 'Your name',
  placeholder: 'Enter your name',
  disabled: true,
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  label: 'Your name',
  placeholder: 'Enter your name',
  className:
    'border-gray-300 p-2 rounded-md focus:border-[#7f56d9] focus:outline-none',
};

// You can also create a story with error message
// export const TextFieldWithError = Template.bind({});
// TextFieldWithError.args = {
//   label: 'Email',
//   placeholder: 'Enter your email',
// };
