import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalNav from 'components/GlobalNav'
import GlobalFooter from 'components/GlobalFooter'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Ønskelisten | Din fortrukkende ønskeseddel online.</title>
                <meta name="description" content="Gem alle dine ønsker et centralt sted, og gør det nemt at dele ønskerne med familie og venner." />
            </Head>
            <GlobalNav />
            <Component {...pageProps} />
            <GlobalFooter />
        </>
    )
}

export default App