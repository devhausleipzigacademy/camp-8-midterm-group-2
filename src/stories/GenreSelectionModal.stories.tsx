import { Meta, StoryObj } from "@storybook/react";
import { GenreSelectionModal } from "../components/GenreSelectionModal";
import "../index.css";

const meta: Meta<typeof GenreSelectionModal> = {
  title: "Movie/GenreSelectionModal",
  component: GenreSelectionModal,
};
export default meta;

type Story = StoryObj<typeof GenreSelectionModal>;

export const Default: Story = {
  args: { isOpen: true },
};
