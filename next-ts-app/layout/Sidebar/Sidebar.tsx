import React from "react";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidear.props";
import cn from "classnames";
import Menu from "../Menu/Menu";
import Logo from "../logo.svg";

const Sidebar = ({ className,...props }: SidebarProps): JSX.Element => {
  return (
    <>
      <div {...props} className={cn(className,styles.sedebar)}>
        <Logo className={styles.logo}/>
        <div>Search</div>
        <Menu />
      </div>
    </>
  );
};

export default Sidebar;
