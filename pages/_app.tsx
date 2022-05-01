import type { AppProps } from 'next/app'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
    ${reset}
`;


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyles />
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
}

export default MyApp
