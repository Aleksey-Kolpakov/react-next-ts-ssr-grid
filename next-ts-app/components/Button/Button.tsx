import React from 'react';
import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button = ({appearence,children,arrow='none',className,...props}:ButtonProps):JSX.Element => {
    return (
        <>
        <button className={cn(styles.button,className,{
            [styles.primary]:appearence=='primary',
            [styles.ghost]:appearence=='ghost',
            })}
            {...props}
            >{children}
                        {arrow!=='none'&& <span className={cn(styles.arrow,{
                [styles.arrowRight]:arrow=='right',
                [styles.arrowDown]:arrow=='down',
            })}>
                <ArrowIcon/>
                </span>}
            
            </button>

        </>
    );
};

export default Button;