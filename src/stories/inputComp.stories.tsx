import react from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import { Input } from "../components/Input";

export default {
  title: "Movie/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  type: "email",
};
export const Password = Template.bind({});
Password.args = {
  type: "password",
};
