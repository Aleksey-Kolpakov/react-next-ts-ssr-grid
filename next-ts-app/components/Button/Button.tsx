import React from 'react';
import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import cn from 'classnames';

const Button = ({appearence,children,className,...props}:ButtonProps):JSX.Element => {
    return (
        <>
        <button className={cn(styles.button,className,{
            [styles.primary]:appearence=='primary',
            [styles.ghost]:appearence=='ghost',
            })}
            {...props}
            >{children}</button>
        </>
    );
};

export default Button;