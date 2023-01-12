import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserInfo } from "../components/userInfo";

export default {
  title: "Movie/UserInfo",
  component: UserInfo,
  argTypes: {
    userName: { control: "text" },
  },
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (args) => (
  <UserInfo {...args} />
);

export const Base = Template.bind({});

Base.args = {
  userName: "TemplateName",
  userImg:
    "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
};
