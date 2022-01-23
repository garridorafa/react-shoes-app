import React from "react";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const PrimaryPOP = Template.bind({});

PrimaryPOP.args = {
  primary: true,
  label: "Button",
};
