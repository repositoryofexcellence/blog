import LayoutClient from "../components/client/layout/layout";
import LayoutAdmin from "../components/admin/layout/layout";
import Script from "next/script";
import React from "react";


export default function App({Component, pageProps, router}) {
    return (
        router.route.includes('yonetim-paneli') ?
            <>
                <LayoutAdmin>
                    <Component {...pageProps} />

                </LayoutAdmin>

            </>
            :
            <LayoutClient>

                <Component {...pageProps} />
            </LayoutClient>
    )
}