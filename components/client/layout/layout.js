import React, { useState, useEffect } from 'react';

const LayoutClient = (props) => {
    useEffect(() => {
        const body = document.querySelector('body');
        body?.classList.add('tailwind-bundle');
        return () => {
            body?.classList.remove('tailwind-bundle');
        }
    }, []);

    return (
        <div>
            Client
            {props.children}
        </div>
    );
};

export default LayoutClient;