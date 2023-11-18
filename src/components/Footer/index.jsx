import "./style.css";
export const Footer = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p>
            Hotel Stříbrava <br />
            Ke Kamenné lávce 12 <br/>
            31724 Libnice nad Stříbravou<br/>
            <a href="recepce@hotelstribrava.cz">recepce@hotelstribrava.cz</a>
          </p>
        </div>
        <img src="img/mapa.svg" />
      </div>
    </section>
  );
};
