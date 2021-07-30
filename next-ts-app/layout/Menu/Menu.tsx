import React, { useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "../../context/app.context";

const Menu = (): JSX.Element => {
  const {menu,setMenu,firstCategory}=useContext(AppContext);
  return (
    <ul>
    {menu.map(element=>(<li key={element._id.secondCategory}>{element._id.secondCategory}</li>))}
  </ul>
  );
};

export default Menu;
