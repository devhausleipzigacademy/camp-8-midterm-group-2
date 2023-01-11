import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "../components/TabsCastCrew";

export default {
  title: "Movie/Tabs",
  component: Tabs,
  argTypes: {
    type: {
      options: ["Selected", "Available"],
      control: { type: "radio" },
    },
  },
};
const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />;

export const Button = Template.bind({});
Button.args = {
  type: "Selected",
  label: "Cast",
};
