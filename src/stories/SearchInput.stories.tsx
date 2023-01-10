import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { SearchInput } from "../components/SearchInput";

export default {
  title: "searchInput",
  component: SearchInput,
  argTypes: {
    primary: { control: "boolean" },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = { type: "primary", label: "default label" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", label: "default label" };

// export const Primary = () => {
//   // Sets the hooks for both the label and primary props
//   const [value, setValue] = useState("Secondary");
//   const [isPrimary, setIsPrimary] = useState(false);

//   // Sets a click handler to change the label's value
//   const handleOnChange = () => {
//     if (!isPrimary) {
//       setIsPrimary(true);
//       setValue("Primary");
//     }
//   };
//   return (
//     <SearchInput primary={isPrimary} onClick={handleOnChange} label={value} />
//   );
// };
