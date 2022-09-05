import React from "react";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidear.props";
import cn from "classnames";
import {Menu} from "../Menu/Menu";
import Logo from "../logo.svg";
import { Search } from "../../components";

export const Sidebar = ({ className,...props }: SidebarProps): JSX.Element => {
  return (
    <>
      <div {...props} className={cn(className,styles.sedebar)}>
        <Logo className={styles.logo}/>
        <Search/>
        <Menu />
      </div>
    </>
  );
};

export default Sidebar;
