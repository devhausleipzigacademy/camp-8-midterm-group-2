import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { DateSelectButton } from "../components/DateSelectButton";

type NewType = Meta<typeof DateSelectButton>;

export default {
  title: "Movie /Date Select Button",
  component: DateSelectButton,
  argTypes: {},
};

const Template: StoryFn<typeof DateSelectButton> = (args) => (
  <DateSelectButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
