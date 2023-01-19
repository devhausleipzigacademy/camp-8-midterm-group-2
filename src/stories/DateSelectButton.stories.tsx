import React, { useEffect, useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import {
  DateSelectButton,
  DateSelectButtonProps,
} from "../components/DateSelectButton";

type NewType = Meta<typeof DateSelectButton>;

export default {
  title: "Movie /Date Select Button",
  component: DateSelectButton,
  argTypes: {},
};

const Template: StoryFn<typeof DateSelectButton> = (args) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(args.selected);
  }, [args.selected]);

  const newArgs = {
    ...args,
    selected: selected,
    onClick: () => setSelected((selected) => !selected),
  };

  return <DateSelectButton {...newArgs} />;
};

export const Default = Template.bind({});
Default.args = {};
