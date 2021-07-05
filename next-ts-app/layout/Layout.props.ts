
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children:ReactNode,
}