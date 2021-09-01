import React from "react";
import styles from "./Tag.module.css";
import { PProps } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
  size = "m",
  color="ghost",
  children,
  className,
  href,
  ...props
}: PProps): JSX.Element => {
  return (
    <>
      <div
        className={cn(
          styles.tag,
          className,
          {
            [styles.s]: size == "s",
            [styles.m]: size == "m",
          },
          {
            [styles.ghost]: color == "ghost",
            [styles.red]: color == "red",
            [styles.green]: color == "green",
            [styles.grey]: color == "grey",
          }
        )}
        {...props}
      >
          {href?<a>{children}</a> : <>{children}</>}
      </div>
    </>
  );
};


