import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import  { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/theme/index";
import { Normalize } from "styled-normalize";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Normalize />
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          <title>Alpha Squad</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider> 
  );
}

export default MyApp;
