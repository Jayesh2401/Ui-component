import CustomSlider from "../Components/CustomSlider";
import '../App.css'

const MyDecorator = (story) => {
  return <div className="w-full h-[190px]">{story()}</div>;
};

export default {
    title: "Slider",
    component: CustomSlider,
    tags: ["autodocs"],
    decorators: [MyDecorator],
    argTypes: {
      onChange: {
        control: {
          type: "function",
        },
        type: "function",
        description:
          "A callback function that is called when the value of the selected option changes. The function takes one argument, which is the new selected option.",
      },
      disabled: {
        type: "boolean",
        description: "Whether or not the button is disabled",
      },
      className: {
        control: {
          type: "string",
        },
        type: "string",
        description: "The custom class name for the slider",
      },
    },
  };
  
  const Template = (args) => {
    return <CustomSlider {...args} />;
  };
  
  export const PrimaryButton = Template.bind({});