import Head from "next/head";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function About() {
  return (
    <div>
      <Head>
        <title>ShahCoals - About</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"></link>
        <meta
          name="description"
          content="ShahCoals is the Sole Proprietor established in 2014. We have Coal from Chamalong and Dukki Coal Mines, Pakistan. For more info contact us at +923336483355 or send email at info@shahcoals.com."
        />
      </Head>
      <Header />
      <div className="about"></div>
      <Footer />
    </div>
  );
}

export default About;
