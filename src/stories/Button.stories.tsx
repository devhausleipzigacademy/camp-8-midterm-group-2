import Button from "../components/Button";

//LINK our props
export default {
  component: Button,
  argTypes: {
    //LINK my props to args.
    primary: { control: "boolean" },
    default_height: { control: "boolean" },
  },
};

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
// //what is a template?

// export const Primary = Template.bind({}) //what does .bind do
// export const Secondary = Template.bind({})
// export const DefaultSize = Template.bind({})
// export const SmallSize = Template.bind({})

//now specify DEFAULT VALUES OF THE ARGS:
export const Primary = {
  args: {
    primary: true,
    label: "default label",
  },
};

export const Secondary = {
  args: {
    primary: true,
    label: "default label",
  },
};

export const DefaultSize = {
  args: {
    default_height: true,
  },
};

export const SmallSize = {
  args: {
    default_height: false,
  },
};
