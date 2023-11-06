import React from "react";
import Tabbination from "../Components/Tabbination";

const Tabination: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Tab Example</h1>
      <Tabbination
        className="bg-teal-300"
        activeClass="!bg-purple-400 text-white"
      >
        <Tabbination.Tab label="Tab 1" className="bg-amber-600">
          <div>Content of Tab 1</div>
        </Tabbination.Tab>
        <Tabbination.Tab label="Tab 2">
          <div>Content of Tab 2</div>
        </Tabbination.Tab>
        <Tabbination.Tab label="Tab 3">
          <div>Content of Tab 3</div>
        </Tabbination.Tab>
      </Tabbination>
    </div>
  );
};

export default Tabination;
