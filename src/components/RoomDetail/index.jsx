import "./style.css";

export const RoomDetail = ({name,img,price,description}) => {
   return(
  <section class="light">
    <div class="container">
      <h2>Pokoj {name}, {price} Kč na osobu za noc</h2>
      <div class="columns-2">
        <div class="column">
          <img src={img} />
          <p>
            {description}
          </p>
        </div>
      
      </div>
    </div>
  </section>
   )
};
