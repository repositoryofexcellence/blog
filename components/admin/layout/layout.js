import React, {Fragment, useEffect} from 'react';

const LayoutAdmin = (props) => {
    useEffect(() => {

    }, []);
    return (
        <Fragment>
            Admin
            {props.children}
        </Fragment>
    );
};

export default LayoutAdmin;