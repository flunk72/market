import React from "react";
import { HtagProps } from "./HTag.props";
import { H1, H2, H3 } from "./HTag.styled";

const HTag = ({ tag, children }: HtagProps) => {
  switch (tag) {
    case "h1":
      return <H1>{children}</H1>;
    case "h2":
      return <H2>{children}</H2>;
    case "h3":
      return <H3> {children}</H3>;
    default:
      return <></>;
  }
};

export default HTag;
