import "./style.css";

export const RoomDetail = ({ name, img, price, description }) => {
  const adresa = `http://localhost:4000${img}`;
  console.log(adresa);
  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {name}, {price} Kč na osobu za noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={adresa} />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
