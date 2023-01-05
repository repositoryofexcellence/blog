import React, {useEffect} from 'react';

const LayoutAdmin = (props) => {
    useEffect(() => {
        const body = document.querySelector('body');
        body?.classList.add('bootstrap-bundle');
        return () => {
            body?.classList.remove('bootstrap-bundle');
        }
    }, []);
    return (
        <div>
            Admin
            {props.children}
        </div>
    );
};

export default LayoutAdmin;