import classnames from "classnames";
import React from "react";
import View from "./View";

import styles from "./box-styles.module.css";

const Box = ({
  color,
  fixed = false,
  layout = "column",
  outer = false,
  className,
  ...other
}) => (
  <View
    {...other}
    className={classnames(
      styles[`color${color}`],
      {
        [styles.fixed]: fixed,
        [styles.outer]: outer,
        [styles.row]: layout === "row",
      },
      className
    )}
  />
);

export default Box;
