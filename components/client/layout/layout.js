import React, {useState, useEffect, Fragment} from 'react';

const LayoutClient = (props) => {
    useEffect(() => {

    }, []);

    return (
        <Fragment>
            Client
            {props.children}
        </Fragment>
    );

};

export default LayoutClient;