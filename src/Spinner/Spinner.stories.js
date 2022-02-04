import React from "react";

import Spinner from "./";

export default {
  title: "Components/Spinner",
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Standard = Template.bind({});

Standard.args = {};
