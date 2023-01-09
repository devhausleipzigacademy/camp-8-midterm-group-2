import react from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import { Login } from "../routes/Login";

export default {
  title: "Movie/LoginCom",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
