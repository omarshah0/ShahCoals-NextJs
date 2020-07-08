function Footer() {
  return (
    <div className="footer">
      <div className="follow-us">
        <h1>FOLLOW #SHAHCOALS</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/shahcoals" target="__blank">
            <img src="/Assets/fb_logo.png" alt="follow-facebook"></img>
          </a>
          <a href="https://www.instagram.com/shahcoals" target="__blank">
            <img src="/Assets/insta_logo.png" alt="follow-instagram"></img>
          </a>
          <a href="https://www.twitter.com/shahcoals" target="__blank">
            <img src="/Assets/twitter_logo.png" alt="follow-twitter"></img>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+923336483355"
            target="__blank"
          >
            <img src="/Assets/whatsapp_logo.png" alt="follow-whatsapp"></img>
          </a>
        </div>
      </div>
      <div className="newsletter">
        <div className="line-style"></div>
        <h1>NEWSLETTER</h1>
        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL ADDRESS HERE"
        ></input>
      </div>
    </div>
  );
}

export default Footer;
