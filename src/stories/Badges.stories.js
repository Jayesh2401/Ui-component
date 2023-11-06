// import BadegsComponent from "../Components/BadegsComponent";

// const MyDecorator = (story) => {
//   return <div className="w-full h-[190px]">{story()}</div>;
// };

// export default {
//   title: "Badges",
//   component: BadegsComponent,
//   tags: ["autodocs"],
//   decorators: [MyDecorator],
//   argTypes: {
//     onChange: {
//       control: {
//         type: "function",
//       },
//       type: "function",
//       description:
//         "A callback function that is called when the value of the selected option changes. The function takes one argument, which is the new selected option.",
//     },
//     disabled: {
//       type: "boolean",
//       description: "Whether or not the button is disabled",
//     },
//     className: {
//       control: {
//         type: "string",
//       },
//       type: "string",
//       description: "The custom class name for the slider",
//     },
//     text: {
//       control: {
//         type: "text",
//       },
//       type: "string",
//       description: "The text to be displayed on the badge",
//     },
//   },
// };

// const Template = (args) => {
//   return <BadegsComponent {...args} />;
// };

// export const PrimaryButton = Template.bind({});
// PrimaryButton.args = {
//   text: "Button",
// };


import BadegsComponent from "../Components/BadegsComponent";

const MyDecorator = (story) => {
  return <div className="w-full h-[190px]">{story()}</div>;
};

export default {
  title: "Badges",
  component: BadegsComponent,
  tags: ["autodocs"],
  decorators: [MyDecorator],
  argTypes: {
    text: {
      control: {
        type: "text",
      },
      type: "string",
      description: "The text to be displayed on the badge",
    },
    backgroundColor: {
      control: {
        type: "text",
      },
      type: "string",
      description: "The background color of the badge",
    },
    borderColor: {
      control: {
        type: "text",
      },
      type: "string",
      description: "The border color of the badge",
    },
    icon: {
      control: {
        type: "text",
      },
      type: "string",
      description: "An optional icon to display alongside the text",
    },
    textColor: {
      control: {
        type: "text",
      },
      type: "string",
      description: "The text color of the badge",
    },
    className: {
      control: {
        type: "text",
      },
      type: "string",
      description: "The custom class name for the badge",
    },
  },
};

const Template = (args) => {
  return <BadegsComponent {...args} />;
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: "Button",
  backgroundColor: "bg-red-200",
  borderColor: "border-green-400",
  icon: "🚀",
  textColor: "white",
  className: "custom-badge",
};
