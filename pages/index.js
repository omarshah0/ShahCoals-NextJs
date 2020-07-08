import Head from "next/head";
import Link from "next/link";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Card from "../Components/Card/Card";
import Button from "../Components/CTAButton/Button";
// import QuoteBox from "../Components/GetQuoteBox/QuoteBox";
import { useState } from "react";
import Router from "next/router";

export default function Home() {
  const [quoteBox, setQuoteBox] = useState(true);
  return (
    <main>
      {console.log("IM RENDERED FIRST")}
      <Head>
        <title>ShahCoals</title>
        <link rel="icon" href="/favicon.ico" />
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
        <Button openQuoteBox={() => setQuoteBox(true)} />
      </section>
      <section className="ShahCoals-products">
        <h1 className="popular-products">ShahCoals Popular Products</h1>
        <div className="card-container">
          <Card
            name="BK-6 (6-Footy)"
            text="This is some basic info of Coal 6-Footy"
            moisture="30%"
            volatileMatter="40%"
            fixedCarbon="50%"
            sulfur="60%"
            ash="70%"
          />
          <Card
            name="BK-4 (4-Footy)"
            text="This is some basic info of Coal 4-Footy"
            moisture="70%"
            volatileMatter="60%"
            fixedCarbon="50%"
            sulfur="40%"
            ash="30%"
          />
          <Card
            name="BK-2 (2-Footy)"
            text="This is some basic info of Coal 2-Footy"
            moisture="20%"
            volatileMatter="40%"
            fixedCarbon="60%"
            sulfur="40%"
            ash="20%"
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
