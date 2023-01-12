import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DetailHeader } from "../components/DetailHeaderLayOut";

const meta: Meta<typeof DetailHeader> = {
  title: "detailHeaderLayout",
  component: DetailHeader,
  argTypes: {
    /* here put different route options? */
  },
};
export default meta;

type Story = StoryObj<typeof DetailHeader>;

export const Default: Story = {
  args: {},
};
