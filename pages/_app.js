import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    * { box-sizing: border-box; }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/images/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <meta lang="en" />
        <meta name="theme-color" content="#006AAC" />
        <meta property="og:title" content="Let's Create Gifts" />
        <meta property="og:description" content="Let's Create Gifts is a manufacturer and seller of premium quality personalised gifts. From bottles to boxes to custom cut and printed designs — we're there for whatever you need." />
        <meta property="og:image" content="x" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
