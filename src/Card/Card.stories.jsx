import React from "react";
import { Route } from "react-router-dom";

import Card from "./";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => (
  <Route>
    <Card {...args} />
  </Route>
);

export const Standard = Template.bind({});

Standard.args = {
  id: 1,
  title: "zapa",
  image: "shoe1",
  price: null,
  category: "shoes",
};
