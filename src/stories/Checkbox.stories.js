import CommonCheckbox from '../Components/CommonCheckbox';

export default {
  title: 'Checkbox',
  component: CommonCheckbox,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      control: {
        type: 'function',
      },
      type: 'function',
      description:
        'A callback function that is called when the value of the selected option changes. The function takes one argument, which is the new selected option.',
    },
    className: {
      control: {
        type: 'string',
      },
      type: 'string',
      description: 'The custom class name for the checkbox',
    },
  },
};

const Template = (args) => {
  return <CommonCheckbox {...args} />;
};

export const NormalCheckbox = Template.bind({});
export const DisabledChecked = Template.bind({});
export const WithoutLabel = Template.bind({});

DisabledChecked.args = {
  checked: true,
  label: 'checkbox',
  disabled: true,
};
