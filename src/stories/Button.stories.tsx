import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Button from "../components/Button";


//LINK our props
export default {
  component: Button,
  argTypes: {
    //LINK my props to args.
    primary: { control: 'boolean' },
    default_height: { control: 'boolean'}
  },
} as ComponentMeta<typeof Button> //read type of button and compare it to MetaData that Storybook needs (??)

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
//what is a template?

export const Primary = Template.bind({}) //what is .bind
export const Secondary = Template.bind({})
export const DefaultSize = Template.bind({}) //what is .bind
export const SmallSize = Template.bind({})

//now specify DEFAULT VALUES OF THE ARGS:
Primary.args = {
  primary: true,
  label: 'default label'

};

Secondary.args = {
  primary: true,
  label: 'default label'
};

DefaultSize.args = {
  default_height: true
}

SmallSize.args = {
  default_height: false
}




