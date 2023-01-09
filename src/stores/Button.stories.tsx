import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button";

//LINK our props
export default {
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>; //read type of button and compare it to MetaData that Storybook needs (??)

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
//what is a template?

export const Primary = Template.bind({}); //what is .bind

//now specify DEFAULT VALUES OF THE ARGS:
Primary.args = {
  label: "default label",
};
