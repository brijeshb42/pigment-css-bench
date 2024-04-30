import classnames from "classnames";
import React from "react";
import styles from "./view-styles.module.css";

function View(props) {
  return (
    <div {...props} className={classnames(styles.initial, props.className)} />
  );
}

export default View;
