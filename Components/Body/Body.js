import React, { useState } from "react";
// Import of 3rd Party Packages
import {NavLink} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// Import of Functional Components
import Card from "../Card/Card";
import Button from "../CTAButton/Button";
import QuoteBox from "../GetQuoteBox/QuoteBox";
// Import of CSS Files and Videos
import "./Body.css";
import Movie from "../../Assets/ShahCoals.mp4";

function Body() {
  const [quoteBox, setQuoteBox] = useState(false);

  return (
    <main>
      <CSSTransition
        in={quoteBox}
        timeout={200}
        classNames="slide"
        unmountOnExit
      >
        <QuoteBox closeQuoteBox={() => setQuoteBox(false)} />
      </CSSTransition>
      <section className="container">
        <div className="video">
          <video autoPlay loop muted>
            <source src={Movie} type="video/mp4" />
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
            moisture="3.5% - 4%"
            volatileMatter="40% - 45%"
            fixedCarbon="50% - 55%"
            sulfur="7% - 8%"
            ash="3.5% - 4%"
            clarificValue="7300 - 7600"
          />
          {/* <Card
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
          /> */}
        </div>
        {/* <NavLink exact to="/products">
          <button className="btn">More Products</button>{" "}
        </NavLink> */}
      </section>
    </main>
  );
}

export default Body;
