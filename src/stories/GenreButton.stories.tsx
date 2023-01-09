import react from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import { GenreButton } from "../components/GenreButton";
import { genres } from "../utils/genres";

const buttonOptions = Object.keys(genres);
export default {
  title: "Movie/GenreButton",
  component: GenreButton,
  argTypes: {
    genre: {
      options: buttonOptions,
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof GenreButton>;

const Template: ComponentStory<typeof GenreButton> = (args) => (
  <GenreButton {...args} />
);

export const Default = Template.bind({});
Default.args = { genre: "romance" };
