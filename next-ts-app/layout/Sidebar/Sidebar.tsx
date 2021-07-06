import React from 'react';
import styles from './Sidebar.module.css';
import {SidebarProps} from './Sidear.props';
import cn from 'classnames';


const Sidebar = ({...props}:SidebarProps):JSX.Element => {
    return (
        <>
<div {...props}>
Sidebar
</div>
        </>
    );
};

export default Sidebar;