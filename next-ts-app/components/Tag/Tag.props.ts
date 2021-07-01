
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children:ReactNode,
    size?: 's'|'m',
    color?: 'ghost'|'red'|'green'|'grey'|'primary',
    href?:string
}