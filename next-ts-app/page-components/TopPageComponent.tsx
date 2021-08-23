import React from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";

const TopPageComponent=({ page, products,firstCategory }: TopPageComponentProps): JSX.Element => {
    return <>
        {products && products.length}
    </>;
}

export default TopPageComponent;