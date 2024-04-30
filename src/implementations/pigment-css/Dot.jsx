import { styled } from "@pigment-css/react";
import React from "react";

const StyledDot = styled("div", {
  shouldForwardProp(propName) {
    return !["size", "x", "y"].includes(propName);
  },
})(() => ({
  position: "absolute",
  cursor: "pointer",
  width: 0,
  height: 0,
  borderColor: "transparent",
  borderStyle: "solid",
  borderWidth: ({ size }) => `${size / 2}px`,
  borderTopWidth: 0,
  transform: "translate(50%, 50%)",
  marginLeft: ({ x }) => `${x}px`,
  marginTop: ({ y }) => `${y}px`,
}));

export default function Dot({ color, ...props }) {
  return <StyledDot {...props} style={{ borderBottomColor: color }} />;
}
