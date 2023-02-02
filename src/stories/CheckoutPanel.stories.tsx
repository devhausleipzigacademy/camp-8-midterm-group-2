import React, { useEffect, useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import {
  CheckoutPanel,
  CheckoutPanelProps,
  tempSeatsData,
} from "../components/CheckoutPanel";

// try to use this data to make a mock component in the story
// put tempdata into useState and onclick of story checkboxes, update state

type NewType = Meta<typeof CheckoutPanel>;

export default {
  title: "Movie /Checkout Panel",
  component: CheckoutPanel,
  argTypes: {
    seatsChosen: {
      options: tempSeatsData,
      control: { type: "checkbox" },
    },
  },
};

const Template: StoryFn<typeof CheckoutPanel> = (args) => {
  const [tempSeatsData, setTempSeatsData] = useState<string[]>([]);
  useEffect(() => {
    setTempSeatsData(args.seatsChosen);
  }, [args]);

  const newArgs = {
    ...args,
    tempSeatsData: tempSeatsData,
    // onClick: () => setSeatsChosen(),
  };

  return <CheckoutPanel {...newArgs} />;
};

export const Default = Template.bind({});
Default.args = {};
