import type { Meta, StoryObj } from "@storybook/react";
// import { ReactComponent as Logo } from "../../assets/fontF.svg";
import { Logo, Header } from "@components";

const LINKS = [
  {
    label: "home",
    to: "/",
  },
  {
    label: "blog",
    to: "/blog",
  },
  {
    label: "gallery",
    to: "/gallery",
  },
  {
    label: "others",
    to: "/others",
  },
  {
    label: "about",
    to: "/about-me",
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Molecules/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;
