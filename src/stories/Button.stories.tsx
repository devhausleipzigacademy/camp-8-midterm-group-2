import Button from "../components/Button";

//LINK our props
export default {
  component: Button,
  argTypes: {
    primary: { control: "boolean" },
    SmallSize: { control: "boolean" },
  },
};

export const Primary = {
  args: {
    type: "primary",
    label: "default label",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    label: "default label",
  },
};

export const DefaultSize = {
  args: {
    height: "default",
  },
};

export const SmallSize = {
  args: {
    height: "small",
  },
};

////ISSUES
//how to implement state?
