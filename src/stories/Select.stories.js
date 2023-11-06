import Select from '../Components/Select';

const MyDecorator = (story) => {
  return <div className='w-full h-[190px]'>{story()}</div>;
};

export default {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [MyDecorator],
  argTypes: {
    onSelect: {
      name: 'onSelect',
      description: `Return selected value as an object.`,
      control: {
        type: 'function',
      },
    },
    options: {
      type: 'array',
      required: true,
      description:
        'The options for the select component. An array of objects with value and label properties.',
    },
    defaultOption: {
      type: 'object',
      description: 'The option that should be selected by default.',
    },
    placeholder: {
      type: 'string',
      description: 'The placeholder text for the input field.',
    },
    width: {
      type: 'number',
      description: 'The width of the select component in pixels.',
    },
  },
};

const Template = (args) => <Select {...args} />;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
];

export const Selection = Template.bind({});
Selection.args = {
  options: options,
  placeholder: 'Choose option',
  width: 500,
  onSelect: (option) => {
    console.log('Selected:', option);
  },
};

export const DefaultSelected = Template.bind({});
DefaultSelected.args = {
  options: options,
  placeholder: 'Choose option',
  defaultOption: options[1],
  width: 500,
  onSelect: (option) => {
    console.log('Selected:', option);
  },
};
