import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="da">
                <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                    {/* Primary Meta Tags */}
                    <title>Ønskelisten | Din fortrukkende ønskeseddel online</title>
                    <meta name="title" content="Ønskelisten | Din fortrukkende ønskeseddel online" />
                    <meta name="description" content="Opret din egen ønskeliste på vores platform. Del den med familie og venner, så de ved præcis, hvad du ønsker dig til dit næste bryllup, fødselsdag eller jul. Vores platform gør det nemt for dig at holde styr på dine ønsker og for dem at få inspiration til gaver." />
                    
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://oenskelisten.dk" />
                    <meta property="og:title" content="Ønskelisten | Din fortrukkende ønskeseddel online" />
                    <meta property="og:description" content="Opret din egen ønskeliste på vores platform. Del den med familie og venner, så de ved præcis, hvad du ønsker dig til dit næste bryllup, fødselsdag eller jul. Vores platform gør det nemt for dig at holde styr på dine ønsker og for dem at få inspiration til gaver." />
                    <meta property="og:image" content="https://oenskelisten.dk/dashboard.webp" />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://oenskelisten.dk" />
                    <meta property="twitter:title" content="Ønskelisten | Din fortrukkende ønskeseddel online" />
                    <meta property="twitter:description" content="Opret din egen ønskeliste på vores platform. Del den med familie og venner, så de ved præcis, hvad du ønsker dig til dit næste bryllup, fødselsdag eller jul. Vores platform gør det nemt for dig at holde styr på dine ønsker og for dem at få inspiration til gaver." />
                    <meta property="twitter:image" content="https://oenskelisten.dk/dashboard.webp" />
                    {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
                    
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
                
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}