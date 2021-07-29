import Head from "next/head";
import config from "../lib/config";
import Footer from "./footer";
import Navbar from "./navbar";
import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="Joseph Lynn, JavaScript, React, Web Development"
        />
        <meta
          name="description"
          content="Personal Website for Joseph Lynn, Frontend Web Developer"
        />
        <meta
          property="og:image"
          content={`https://nextjs-blog-brown-iota.vercel.app${config.siteImage}`}
        />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={config.description} />
        <meta name="og:url" content="https://josephlynn.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={config.social.twitter} />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta
          name="twitter:image"
          content={`https://nextjs-blog-brown-iota.vercel.app${config.siteImage}`}
        />
      </Head>
      <header className={styles.header}>
        <Navbar config={config} />
      </header>
      <main className={styles.container}>{children}</main>
      <Footer config={config} />
    </>
  );
};

export default Layout;
