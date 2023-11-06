import React from "react";
import Tabbination from "../Components/Tabbination";

export default {
  title: "Tabbination",
  component: Tabbination,
  tags: ["autodocs"],
};

const Template = (args) => <Tabbination {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "bg-teal-300",
  activeClass: "!bg-purple-400 text-white",
  children: [
    <Tabbination.Tab label="Tab 1" className="bg-amber-600">
      <div>Content of Tab 1</div>
    </Tabbination.Tab>,
    <Tabbination.Tab label="Tab 2">
      <div>Content of Tab 2</div>
    </Tabbination.Tab>,
    <Tabbination.Tab label="Tab 3">
      <div>Content of Tab 3</div>
    </Tabbination.Tab>,
  ],
};
