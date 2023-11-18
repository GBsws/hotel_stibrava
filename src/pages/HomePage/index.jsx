import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { RoomsList } from "../../components/RoomsList";
import { RoomDetail } from "../../components/RoomDetail";
import { Form } from "../../components/Form";
import { useState } from "react";

export const HomePage = () => {
  const [selected, setSelected] = useState(null);
  const handleClick = (room) => {
    console.log(room);
    setSelected(room);
  };

  if (selected){
    console.log('img', selected.img)

  }
  


  return (
    <div className="container">
      <Header />
      <main>
        <RoomsList onClick={handleClick} />
        <div>
        { selected !==null?(<RoomDetail
              name={selected.name}
              img={selected.img}
              price={selected.price}
              description={selected.description}
            />):null}
            
          

          <Form />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
