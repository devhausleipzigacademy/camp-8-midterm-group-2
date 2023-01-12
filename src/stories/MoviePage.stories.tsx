import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { Movies } from "../routes";

const meta: Meta<typeof Movies> = {
  title: "Movie/MoviePage",
  component: Movies,
};
export default meta;

type Story = StoryObj<typeof Movies>;

export const Default: Story = {
  args: {},
};
