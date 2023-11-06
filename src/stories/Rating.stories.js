import CustomRating from "../Components/CustomRating";
import "../App.css";
export default {
  title: "StarRating",
  component: CustomRating,
  tags: ["autodocs"],
};

const Template = (args) => <CustomRating {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxRating: 5,
  rating: 2.5,
  onRatingChange: (newRating) => {
        console.log("Selected:", newRating);
      },
};




// import React from "react";
// import CustomRating from "../Components/CustomRating";

// export default {
//   title: "StarRating",
//   component: CustomRating,
//   tags: ["autodocs"],
// };

// const Template = (args) => <CustomRating {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   maxRating: 5,
//   rating: 3, // Set an initial rating
//   onRatingChange: (newRating) => {
//     console.log("Selected:", newRating);
//   },
// };

// // Simulate a rating change in Storybook
// setTimeout(() => {
//   Default.args.onRatingChange(4); // Change the rating after a delay (adjust as needed)
// }, 1000);
