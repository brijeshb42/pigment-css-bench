import { styled } from "@pigment-css/react";
import View from "./View";

const styles = {
  outer: {
    alignSelf: "flex-start",
    padding: 4,
  },
  row: {
    flexDirection: "row",
  },
  color0: {
    backgroundColor: "#14171A",
  },
  color1: {
    backgroundColor: "#AAB8C2",
  },
  color2: {
    backgroundColor: "#E6ECF0",
  },
  color3: {
    backgroundColor: "#FFAD1F",
  },
  color4: {
    backgroundColor: "#F45D22",
  },
  color5: {
    backgroundColor: "#E0245E",
  },
  fixed: {
    width: 6,
    height: 6,
  },
};

const Box = styled(View, {
  shouldForwardProp(propName) {
    return !["color", "fixed", "layout", "outer"].includes(propName);
  },
})({
  variants: [
    ...[0, 1, 2, 3, 4, 5].map((color) => ({
      props: {
        color,
      },
      style: styles[`color${color}`],
    })),
    {
      props: {
        fixed: true,
      },
      style: styles.fixed,
    },
    {
      props: {
        layout: "row",
      },
      style: styles.row,
    },
    {
      props: {
        outer: true,
      },
      style: styles.outer,
    },
  ],
});

if (typeof Box !== "string") {
  Box.defaultProps = {
    fixed: false,
    layout: "column",
    outer: false,
  };
}

export default Box;
