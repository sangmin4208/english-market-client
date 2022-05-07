import type { AppProps } from 'next/app'
import Footer from '@components/layout/Footer'
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from '@components/layout/header/Header';

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
