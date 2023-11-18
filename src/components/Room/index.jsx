export const Room=({room, onClick})=>{
    const address= "http://localhost:4000"
    const handleClick=()=>{
        onClick(room)
        }
return(
    <div className="card" onClick={handleClick}>
            <img className="card__image" src={address+room.img} />
            <div className="card__title">{room.name}</div>
            <div className="card__body">{room.price} Kč na osobu</div>
          </div>
)
}