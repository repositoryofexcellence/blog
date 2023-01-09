import React, {useEffect} from 'react';

const LayoutAdmin = (props) => {
    useEffect(() => {

    }, []);
    return (
        <>
            Admin
            {props.children}
        </>
    );
};

export default LayoutAdmin;