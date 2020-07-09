import Head from "next/head";
import Link from "next/link";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Card from "../Components/Card/Card";
import Button from "../Components/CTAButton/Button";

export default function Home() {
  return (
    <main>
      <Head>
        <title>ShahCoals | Sole Proprietor</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="ODn0FHTxIpoyCcfRAtV3yaoUvb3IoWrfj6pZfr7elEo"
        />
        <meta
          name="description"
          content="ShahCoals Sole Proprietor aims to provide best quality Coal in Pakistan. We have BK6 6-Footy, BK4 4-Footy BK2 2-Footy and other Coal types. Check it out on our website ShahCoal.com."
        />
      </Head>
      <Header />
      <section className="container">
        <div className="video">
          <video autoPlay loop muted>
            <source src="/Assets/ShahCoals.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="title">
          <h1>ShahCoals</h1>
          <h2>
            We Aim To Deliver The <span>HIGHEST QUALITY COAL</span> We Mine.
          </h2>
        </div>
        <Button />
      </section>
      <section className="ShahCoals-products">
        <h1 className="popular-products">ShahCoals Popular Products</h1>
        <div className="card-container">
          <Card
            name="BK-6 (6-Footy)"
            text="This is some basic info of Coal 6-Footy"
            moisture="3.5% - 4%"
            volatileMatter="40% - 45%"
            fixedCarbon="50% - 55%"
            sulfur="7% - 8%"
            ash="3.5% - 4%"
            clarificValue="7300 - 7600"
          />
          <Card
            name="BK-6 (6-Footy)"
            text="This is some basic info of Coal 6-Footy"
            moisture="3.5% - 4%"
            volatileMatter="40% - 45%"
            fixedCarbon="50% - 55%"
            sulfur="7% - 8%"
            ash="3.5% - 4%"
            clarificValue="7300 - 7600"
          />
          <Card
            name="BK-6 (6-Footy)"
            text="This is some basic info of Coal 6-Footy"
            moisture="3.5% - 4%"
            volatileMatter="40% - 45%"
            fixedCarbon="50% - 55%"
            sulfur="7% - 8%"
            ash="3.5% - 4%"
            clarificValue="7300 - 7600"
          />
        </div>
        <Link href="/about">
          <button className="btn">More Products</button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
