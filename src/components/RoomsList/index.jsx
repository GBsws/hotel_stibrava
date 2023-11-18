import "./style.css";
import { useState, useEffect } from "react";
import { Room } from "../Room";

export const RoomsList = ({onClick}) => {
    const[rooms,setRooms]=useState(null)
    
    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/pokoje");
      const data = await response.json();
      onClick(data.result[0])
      setRooms(data.result);
      console.log(data.result)
    };
    fetchData();
  }, []);
    if(rooms===null){
        return(
           <p>Načítám...</p> 
        )
    }
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vybrete si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
        {rooms.map((room)=> {
            return(
          <Room key={room.id} room={room} onClick={onClick}/>
          )})}
        </div>
      </div>
    </section>
  );
};
