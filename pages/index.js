import Head from "next/head";
import "styles/home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Visol</title>
        <link rel="icon" href="favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta name="keywords" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,  user-scalable=no"
        />
      </Head>

      <main className="main">
        <section className="heroMain"></section>
      </main>
    </div>
  );
}
