import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'
import {useEffect} from "react";



const  Document = () => {

    useEffect(() => {
        const router = useRouter()


        console.log(router)
        return () => {

        }
    }, []);


    return (
        <Html>
            <Head />
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
export default Document