import React, {Fragment} from 'react';
import '../../../styles/bs.css'
const LayoutStyle = (props) => {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    );
};

export default LayoutStyle;