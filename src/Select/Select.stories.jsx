import React from "react";

import Select from "./";

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  label: "Select",
  choices: [
    { id: "a", name: "Option A" },
    { id: "b", name: "Option B" },
    { id: "c", name: "Option C" },
  ],
};
