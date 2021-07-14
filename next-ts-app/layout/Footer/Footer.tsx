import React from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import {format} from 'date-fns';


const Footer = ({ className,...props }: FooterProps): JSX.Element => {
  return <div className={cn(styles.footer,className)} {...props}>
    <p className={styles.rights}>OwlTop © 2020 - {format(new Date(),'yyyy')} Все права защищены</p>
    <a href="#" target="_blank" className={styles.agreement}>Пользовательское соглашение</a>
    <a href="#" target="_blank" className={styles.policy}>Политика конфиденциальности</a>
    </div>;
};

export default Footer;
