import "./index.css";
import "../Components/Header/Header.css";
import "../Components/Body/Body.css";
import "../Components/Card/Card.css";
import "../Components/CTAButton/Button.css";
import "../Components/About/About.css";
import "../Components/Contact/Contact.css";
import "../Components/Products/Products.css";
import "../Components/Footer/Footer.css";
import "../Components/GetQuoteBox/QuoteBox.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}