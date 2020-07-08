

function Button(props) {
  return (
    <div className="cta-button">
      <button className="btn" onClick={props.openQuoteBox}>
        Get A Free Quote Now
      </button>
        <a href="https://api.whatsapp.com/send?phone=+923336483355" target="__blank">
          <img src="/Assets/cta_whatsapp.png" alt="cta-whatsapp"></img>
        </a>
    </div>
  );
}

export default Button;
