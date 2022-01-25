import React from "react";

import Button from "./";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
  disabled: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: false,
  label: "Button",
  disabled: false,
};

export const Disable = Template.bind({});

Disable.args = {
  primary: false,
  label: "Button",
  disabled: true,
};
