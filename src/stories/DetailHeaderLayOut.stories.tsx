import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DetailHeader } from "../components/DetailHeaderLayOut";

const meta: Meta<typeof DetailHeader> = {
  title: "detailHeaderLayout",
  component: DetailHeader,
  argTypes: {
    title: {
      options: ["Select Time", "Select Seats", "Crap"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DetailHeader>;

export const Default: Story = {
  args: {
    title: "Select Time",
    toAddress: "",
  },
};
