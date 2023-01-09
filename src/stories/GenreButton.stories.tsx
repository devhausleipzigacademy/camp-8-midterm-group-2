import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GenreButton } from "../components/GenreButton";
import { genres } from "../utils/genres";
import "../index.css";

const buttonOptions = Object.keys(genres);

const meta: Meta<typeof GenreButton> = {
  title: "Movie/GenreButton",
  component: GenreButton,
  argTypes: {
    genre: {
      options: buttonOptions,
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof GenreButton>;

export const Default: Story = {
  args: { genre: "romance" },
};
