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

//Creating mock toggle

const Template: StoryFn<typeof DateSelectButton> = (args) => {
  // useState to create reactive value(true/false) and setter (button)
  const [selected, setSelected] = useState(false);
  // useEffect allows us to use StoryBook toggle despite being overriden below.
  // whenever args (here - true/false) passed through app, renders until args (in array) are passed.
  useEffect(() => {
    setSelected(args.selected);
  }, [args.selected]);

  const newArgs = {
    ...args,
    //below overrides StoryBook select prop in control panel
    selected: selected,
    // adds onClick handler
    onClick: () => setSelected((selected) => !selected),
  };

  return <DateSelectButton {...newArgs} />;
};

export const Default = Template.bind({});
Default.args = {};
