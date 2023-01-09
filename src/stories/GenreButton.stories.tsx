import react from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import { GenreButton } from "../components/GenreButton";

export default {
  title: "Movie/GenreButton",
  component: GenreButton,
} as ComponentMeta<typeof GenreButton>;

const Template: ComponentStory<typeof GenreButton> = (args) => (
  <GenreButton {...args} />
);

export const Default = Template.bind({});
// Default.args
