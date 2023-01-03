import '../styles/dist.css'
import LayoutClient from "../components/client/layout/layout";
import LayoutAdmin from "../components/admin/layout/layout";

export default function App({Component, pageProps, router}) {
    console.log(router.route)


    return (
        router.route.includes('yonetim-paneli') ?
            <LayoutAdmin>
                <Component {...pageProps} />
            </LayoutAdmin> :
            <LayoutClient>
                <Component {...pageProps} />
            </LayoutClient>
    )
}