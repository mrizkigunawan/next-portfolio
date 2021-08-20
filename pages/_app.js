import Head from "next/head";
import Nav from "../components/Nav";
import { ThemeWrapper } from "../context/AppContext";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Head>
        <title>Gun Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="gunawan" />
        <meta name="description" content="rizki gunawan portfolio" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
