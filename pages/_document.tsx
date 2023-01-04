import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="da">
                <Head>
                    {/* PWA primary color */}
                    {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
                    <link rel="shortcut icon" href="/favicon.ico" />
                    {/* <meta property="og:image" content="/og-image.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="300" />
                    <meta property="og:image:height" content="300" /> */}
                    <meta property='og:title' content="Ønskelisten | Din fortrukkende ønskeseddel online" />
                    <meta property='og:description' content="Del den med familie og venner, så de ved præcis, hvad du ønsker dig til dit næste bryllup, fødselsdag eller jul. Vores platform gør det nemt for dig at holde styr på dine ønsker og for dem at få inspiration til gaver." />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    {/* Inject MUI styles first to match with the prepend: true configuration. */}
                    {(this.props as any).emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}