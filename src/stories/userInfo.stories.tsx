import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserInfo } from "../components/userInfo";

export default {
  title: "Movie/UserInfo",
  component: UserInfo,
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (args) => (
  <UserInfo {...args} />
);

export const Base = Template.bind({});

Base.args = {
  userName: "",
};
