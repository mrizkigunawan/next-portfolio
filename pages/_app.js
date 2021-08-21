import Head from "next/head";
import Nav from "../components/Nav";
import PageTransition from "../components/PageTransition";
import { ThemeWrapper } from "../context/AppContext";
import "../styles/style.css";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeWrapper>
      <Head>
        <title>Gun Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="rizki gunawan portofolio" />
        <meta
          name="description"
          content="Seorang Front-end Dev yang suka membangun tampilan website yang memiliki performa yang cepat, interaktifitas dan visual yang keren"
        />
      </Head>
      <Nav />
      {/* eslint-disable-next-line react/prop-types */}
      <PageTransition route={router.route}>
        <Component {...pageProps} />
      </PageTransition>
    </ThemeWrapper>
  );
}

export default MyApp;
