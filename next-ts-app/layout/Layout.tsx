import React, { FunctionComponent } from "react";
import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";
import cn from "classnames";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

export const withLayout=<T extends Record<string,unknown>>(Component:FunctionComponent<T>)=>{
return function ComponentWithLayout(props:T):JSX.Element {
  return (
    <Layout>
      <Component {...props}/>
    </Layout>
  );
};
};