import React, { useEffect, useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import {
  SeatSelectButton,
  SeatSelectButtonProps,
} from "../components/SeatSelectButton";

type NewType = Meta<typeof SeatSelectButton>;

export default {
  title: "Movie /Seat Select Button",
  component: SeatSelectButton,
  argTypes: {},
};

const Template: StoryFn<typeof SeatSelectButton> = (args) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(args.selected);
  }, [args.selected]);

  const newArgs = {
    ...args,
    selected: selected,
    onClick: () => setSelected((selected) => !selected),
  };

  return <SeatSelectButton {...newArgs} />;
};

export const Default = Template.bind({});
Default.args = {};
