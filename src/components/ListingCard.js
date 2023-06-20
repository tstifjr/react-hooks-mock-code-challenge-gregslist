import React, {useState} from "react";

function ListingCard({description, location, image="https://via.placeholder.com/300x300", id, handleDelete}) {
  const [isFav,setIsFav] = useState(false);

  const handleFav = () => {
    setIsFav(!isFav);
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFav}>☆</button>
        )}

        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
