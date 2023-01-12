import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchInput } from "../components/SearchInput";

export default {
  title: "Home/SearchInput",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = { type: "primary", label: "default label" };
