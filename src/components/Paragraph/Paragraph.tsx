import React from "react";
import { HtagProps } from "./Paragraph.props";
import { Ps, Pm, Pl } from "./Paragraph.styled";

const HTag = ({ size, children }: HtagProps) => {
  switch (size) {
    case "s":
      return <Ps>{children}</Ps>;
    case "m":
      return <Pm>{children}</Pm>;
    case "l":
      return <Pl> {children}</Pl>;
    default:
      return <></>;
  }
};

export default HTag;
