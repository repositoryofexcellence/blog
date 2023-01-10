import React, {Fragment, useEffect} from 'react';
import Script from "next/script";
import LayoutScripts from "./LayoutScripts";

const LayoutAdmin = (props) => {
    useEffect(() => {
        const body = document.querySelector('body');
        body.id = "kt_app_body"
        body.setAttribute("data-kt-app-layout","dark-sidebar")
        body.setAttribute("data-kt-app-header-fixed","true")
        body.setAttribute("data-kt-app-sidebar-enabled","true")
        body.setAttribute("data-kt-app-sidebar-fixed","true")
        body.setAttribute("data-kt-app-sidebar-hoverable","true")
        body.setAttribute("data-kt-app-sidebar-push-header","true")
        body.setAttribute("data-kt-app-sidebar-push-toolbar","true")
        body.setAttribute("data-kt-app-sidebar-push-footer","true")
        body.setAttribute("data-kt-app-toolbar-enabled","true")
        body.classList.add('app-default')
        return () => {
            body.id = ""
            body.remove("data-kt-app-layout")
            body.remove("data-kt-app-header-fixed")
            body.remove("data-kt-app-sidebar-enabled")
            body.remove("data-kt-app-sidebar-fixed")
            body.remove("data-kt-app-sidebar-hoverable")
            body.remove("data-kt-app-sidebar-push-header")
            body.remove("data-kt-app-sidebar-push-toolbar")
            body.remove("data-kt-app-sidebar-push-footer")
            body.remove("data-kt-app-toolbar-enabled")
            body.classList.remove('app-default')
        }
    }, []);



    return (
        <Fragment>
            {props.children}
<LayoutScripts/>
        </Fragment>
    );
};

export default LayoutAdmin;