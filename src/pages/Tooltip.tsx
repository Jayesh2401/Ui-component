import React from 'react';
import CustomTooltip from '../Components/CustomTooltip';

const Tooltip: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CustomTooltip text="Top Tooltip" placement="top">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Hover me (top)
        </button>
      </CustomTooltip>

      <CustomTooltip text="Bottom Tooltip" placement="bottom">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Hover me (bottom)
        </button>
      </CustomTooltip>

      <CustomTooltip text="Left Tooltip" placement="left">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Hover me (left)
        </button>
      </CustomTooltip>

      <CustomTooltip text="Right Tooltip" placement="right">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Hover me (right)
        </button>
      </CustomTooltip>
    </div>
  );
};

export default Tooltip;
