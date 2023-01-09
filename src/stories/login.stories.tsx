import react from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import { Login } from "../components/login";

export default {
  title: "Movie/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
