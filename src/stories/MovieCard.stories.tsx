import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { MovieCard } from "../components/MovieCard";

const poster_paths = [
  "/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
  "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
  "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
  "/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
  "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
  "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
  "/irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
  "/pIFeu5gF7ofAxI9NqrWbJAjjKn6.jpg",
  "/S99eCSnRFfeZJmDaIGIZF58H7w.jpg",
  "/d7uLLwLsRwwQlTigSBnPj4CU2sP.jpg",
  "/dpeR3ue0Q93Rk8jhE2DzVPMRGIm.jpg",
  "/ebdDGnqQXDGfiggHSazaWCLF6Lf.jpg",
  "/1kLYRzVj6byWvFa3SLrAOcfgnfp.jpg",
  "/hODjtxAqWZVE5Y3ghOOBtwwGveg.jpg",
  "/bQrNm5WIWUpCOwMbyz2PwbM8Lxp.jpg",
  "/42bRH1aEUge6Iia7yS18XV3Wpjg.jpg",
];
const meta: Meta<typeof MovieCard> = {
  title: "Movie/MovieCard",
  component: MovieCard,
  argTypes: {
    poster_path: {
      options: poster_paths,
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: {
    poster_path: "/S99eCSnRFfeZJmDaIGIZF58H7w.jpg",
    title: "Epic movie",
  },
};
