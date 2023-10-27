import { Image } from ".";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    property1: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "two",
    className: {},
    imageClassName: {},
    image: "/img/image-10.png",
  },
};
