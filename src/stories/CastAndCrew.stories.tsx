import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CastAndCrew } from "../components/CastAndCrew";

export default {
  title: "Movie/CastAndCrew",
  component: CastAndCrew,
  argTypes: {
    userName: { control: "text" },
  },
} as ComponentMeta<typeof CastAndCrew>;

const Template: ComponentStory<typeof CastAndCrew> = (args) => (
  <CastAndCrew {...args} />
);

export const Base = Template.bind({});

Base.args = {
  image:
    "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
  name: "Juanito",
  character: "blabla",
};
