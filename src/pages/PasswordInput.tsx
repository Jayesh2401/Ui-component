// import CommonPassword from "../Components/CommonPassword";

// function PasswordInput() {
//   return (
//     <div>
//       <CommonPassword label="Password" placeholder="Enter your password"  />
//     </div>
//   );
// }

// export default PasswordInput;

import React from "react";
import CommonPassword from "../Components/CommonPassword";

function PasswordInput() {
  return (
    <div>
      <CommonPassword
        label="Password"
        placeholder="Enter your password"
        inputClassName="your-input-class"
        labelClassName="your-input-class"
        buttonClassName="your-button-class"
      />
    </div>
  );
}

export default PasswordInput;
