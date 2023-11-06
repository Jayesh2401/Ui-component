import React from "react";
import BreadCrumbs from '../Components/BreadCrumbs';

export default {
  title: "BreadCrumbs",
  component: BreadCrumbs,
//   tags: ["autodocs"],
};

export const Default = () => (
  <BreadCrumbs
    routes={[
      {
        href: "/",
        label: "Home",
      },
      {
        href: "/breadcrumbs",
        label: "Breadcrumbs",
      },
    ]}
    separator=">"
  />
);
