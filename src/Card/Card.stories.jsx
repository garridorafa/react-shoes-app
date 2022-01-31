import React from "react";

import Card from "./";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  id: 1,
  title: "zapa",
  image: "shoe1.jpg",
  price: 55.69,
  category: "shoes",
};
