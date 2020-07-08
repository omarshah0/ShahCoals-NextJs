import Head from "next/head";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function About() {
  return (
    <div>
      <Head>
        <title>ShahCoals - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="contact"></div>
      <Footer />
    </div>
  );
}

export default About;
