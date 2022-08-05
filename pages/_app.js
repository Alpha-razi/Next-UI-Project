import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import  { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/theme/index";
import { Normalize } from "styled-normalize";
import useHover from "../utills/useHover";
import Cursor from "../components/cursor/cursor";
import { AppContext } from '../components/ContextApi/context';

function MyApp({ Component, pageProps }) {

  const [hoverRef, isHovered] = useHover();

  return (
    <AppContext.Provider value={{hoverRef}}>
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
        <Cursor hover={isHovered} />
      </>
    </ThemeProvider>
    </AppContext.Provider> 
  );
}

export default MyApp;
