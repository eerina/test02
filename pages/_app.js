import 'tailwindcss/tailwind.css'
import Layout from "../components/layout";

function MyApp({Component, pageProps}) {
    return pageProps.layout === false ?
        <Component {...pageProps} /> :
        <Layout>
            <Component {...pageProps} />
        </Layout>
}

export default MyApp
