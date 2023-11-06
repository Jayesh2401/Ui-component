import Button from '../Components/Button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      type: 'string',
      description: 'The text that will be displayed on the button',
    },
    onClick: {
      type: 'func',
      exclude: true,
      control: {
        type: 'function',
      },
      description: 'A function that will be called when the button is clicked',
    },
    disabled: {
      type: 'boolean',
      description: 'Whether or not the button is disabled',
    },
    styleType: {
      type: 'string',
      enum: ['primary', 'secondary', 'danger'],
      description: 'The style of the button',
    },
    loading: {
      type: 'boolean',
      description: 'Whether or not the button is loading',
    },
    loadingText: {
      type: 'string',
      description: 'The text that will be displayed when the button is loading',
    },
    className: {
      type: 'string',
      description: 'An additional class name to be applied to the button',
    },
  },
  // argTypes: {
  //   text: { control: 'text' }, // Allows users to input text
  //   loadingText: { control: 'text' }, // Allows users to input text for loadingText
  // },
};

// Define the first story
const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

// Define the second story
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: 'Secondary button',
  styleType: 'secondary',
  loadingText: 'Loading...',
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  text: 'loading button',
  loadingText: 'Loading...',
  loading: true,
};

export const ButtonExamples = () => (
  <>
    <div className='flex items-center gap-x-10'>
      <Button
        text='Primary Loading'
        onClick={() => {
          // your code
        }}
        loading={true}
        loadingText='Fetching data'
      />
      <Button
        text='Disabled Button'
        onClick={() => {
          // your code
        }}
        disabled
      />
      <Button
        text='Secondary Button'
        onClick={() => alert('Clicked me')}
        styleType='secondary'
      />
      <Button
        text='Danger Button'
        onClick={() => {
          // your code
        }}
        styleType='danger'
      />
    </div>
  </>
);
