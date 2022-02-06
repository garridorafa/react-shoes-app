import React from "react";

import Text from "./";

export default {
  title: "Components/Text",
  component: Text,
};

const Template = (args) => (
  <Text type="title" {...args}>
    klk
  </Text>
);

export const Standard = Template.bind({});

Standard.args = {};
