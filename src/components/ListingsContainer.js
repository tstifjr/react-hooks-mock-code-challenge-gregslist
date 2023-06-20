import React from "react";
import ListingCard from "./ListingCard";
import Sort from "./Sort";

function ListingsContainer({listArr, handleDelete, letsSort}) {

  const displayCards = listArr.map((listing)=><ListingCard description={listing.description} location={listing.location} image={listing.image} key={listing.id} id={listing.id} handleDelete={handleDelete}/>)
  return (
    <main>
      <Sort letsSort={letsSort}/>
      <ul className="cards">
       {displayCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
