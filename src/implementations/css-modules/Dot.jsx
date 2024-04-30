import classNames from "classnames";
import styles from "./dot.module.css";

export default function Dot({ color, size, className, style, x, y, ...rest }) {
  return (
    <div
      {...rest}
      className={classNames(styles.dot, className)}
      style={{
        ...style,
        borderBottomColor: color,
        borderRightWidth: `${size / 2}px`,
        borderBottomWidth: `${size / 2}px`,
        borderLeftWidth: `${size / 2}px`,
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
      }}
    />
  );
}
