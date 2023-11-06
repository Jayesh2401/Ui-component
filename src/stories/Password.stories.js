import CommonPassword from "../Components/CommonPassword";

export default {
  title: "Password",
  component: CommonPassword,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      control: {
        type: "function",
      },
      type: "function",
      description:
        "A callback function that gets value of string which user give.",
    },
    className: {
      control: {
        type: "string",
      },
      type: "string",
      description: "The custom class name for the input type password",
    },
  },
};

export const Template = (args) => {
  return <CommonPassword {...args} />;
};
