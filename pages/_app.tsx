import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalNav from 'components/GlobalNav'
import GlobalFooter from 'components/GlobalFooter'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalNav />
            <Component {...pageProps} />
            <GlobalFooter />
        </>
    )
}

export default App