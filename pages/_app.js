import LayoutClient from "../components/client/layout/layout";
import LayoutAdmin from "../components/admin/layout/layout";
import '../styles/dist.css'
import '../styles/bs.css'
export default function App({Component, pageProps, router}) {
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