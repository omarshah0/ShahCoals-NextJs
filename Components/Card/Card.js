function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src="/Assets/img_avatar.png" alt="Avatar" />
      <p>{props.text}</p>
      <p>{props.text}</p>
      <p>{props.text}</p>
      <p>{props.text}</p>
      <p>{props.text}</p>
      <div className="chart">
        <li>
          <h5>Moisture - {props.moisture}</h5>
          <span className="bar">
            <span style={{ width: props.moisture }}></span>
          </span>
        </li>
        <li>
          <h5>Volatile Matter - {props.volatileMatter}</h5>
          <span className="bar">
            <span style={{ width: props.volatileMatter }}></span>
          </span>
        </li>
        <li>
          <h5>Fixed Carbon - {props.fixedCarbon}</h5>
          <span className="bar">
            <span style={{ width: props.fixedCarbon }}></span>
          </span>
        </li>
        <li>
          <h5>Sulfur - {props.sulfur}</h5>
          <span className="bar">
            <span style={{ width: props.sulfur }}></span>
          </span>
        </li>
        <li>
          <h5>Ash - {props.ash}</h5>
          <span className="bar">
            <span style={{ width: props.ash }}></span>
          </span>
        </li>
      </div>
    </div>
  );
}

export default Card;
