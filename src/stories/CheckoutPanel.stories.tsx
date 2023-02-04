import React, { useEffect, useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { CheckoutPanel, CheckoutPanelProps } from "../components/CheckoutPanel";

// try to use this data to make a mock component in the story
// put tempdata into useState and onclick of story checkboxes, update state

const availableSeats = [
  "A-1",
  "A-2",
  "A-3",
  "A-4",
  "A-5",
  "A-6",
  "B-1",
  "B-2",
  "B-3",
  "B-4",
  "B-5",
  "B-6",
  "B-7",
  "B-8",
  "C-1",
  "C-2",
  "C-3",
  "C-4",
  "C-5",
  "C-6",
  "C-7",
  "C-8",
  "D-1",
  "D-2",
  "D-3",
  "D-4",
  "D-5",
  "D-6",
  "D-7",
  "D-8",
  "E-1",
  "E-2",
  "E-3",
  "E-4",
  "E-5",
  "E-6",
  "E-7",
  "E-8",
  "F-1",
  "F-2",
  "F-3",
  "F-4",
  "F-5",
  "F-6",
];

type NewType = Meta<typeof CheckoutPanel>;

export default {
  title: "Movie /Checkout Panel",
  component: CheckoutPanel,
  argTypes: {
    seatsChosen: {
      options: availableSeats,
      control: { type: "check" },
    },
    show: {
      control: { type: "boolean" },
    },
  },
};

const Template: StoryFn<typeof CheckoutPanel> = (args) => {
  const newArgs = {
    ...args,
    click: () => {},
  };

  return (
    <div>
      <div
        className="
      max-width-[600px]"
      >
        <CheckoutPanel {...newArgs} />;
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { show: false, seatsChosen: [] };
