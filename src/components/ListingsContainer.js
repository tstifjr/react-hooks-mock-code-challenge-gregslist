import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Sort from "./Sort";
import AddToList from "./AddToList";

function ListingsContainer({ search }) {
  const [listArr, setListArr] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(data => {
        setListArr(data)
      })
  }, [])

  function handleDelete(e) {
    // fetch(`http://localhost:6001/listings/${e.target.id}`, {
    //   method: "DELETE"
    // })
    //   .then(r => r.json())
    //   .then(data => console.log(data))
    setListArr((newList) => newList.filter(list => (parseInt(e.target.id) !== parseInt(list.id))));
  }

  const filteredArray = (array) => {
    if (search === "") return array;
    else {
      return array.filter(list => {
        const loList = list.description.toLowerCase();
        const loSearch = search.toLowerCase();
        return loList.match(loSearch);
      })
    }
  }
  
  function handleSort() {
    letsSort(listArr);
  }

  const letsSort = (array) => {
    const sorted = [...array];
    sorted.sort((a, b) => {
      if (a.location < b.location) return -1;
      else if (b.location < a.location) return 1;
      else return 0;
    })
    setListArr(sorted);
  }

  function updateList(newList) {
    const copy = [...listArr];
    copy.push(newList)
    setListArr(copy);
  }

  const displayCards = filteredArray(listArr).map((listing) => <ListingCard description={listing.description} location={listing.location} image={listing.image} key={listing.id} id={listing.id} handleDelete={handleDelete} />)
  return (
    <main>
      <Sort handleSort={handleSort} />
      <AddToList updateList={updateList} />
      <ul className="cards">
        {displayCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
