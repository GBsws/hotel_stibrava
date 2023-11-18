import "./style.css";
export const Header = () => {
  return (
    <>
    {/* <img src="hotel.jpg" alt="obrázek hotelu" /> */}
    <div className="banner">
      <div className="banner__stripe">
        <div className="container">
          <h1>Hotel Stříbrava</h1>
          <p className="lead">
            Rodinný hotel v malebné krajině Českého Středohoří.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
