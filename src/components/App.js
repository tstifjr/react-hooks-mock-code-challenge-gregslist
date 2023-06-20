import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import AddToList from "./AddToList.js";

function App() {
  const [listArr, setListArr] = useState([])
  const [filArr, setFilArr] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(data => {
        setListArr(data)
        setFilArr(data)
      })
  }, [])

  //useEffect(() => setFilArr(listArr), [])

  function handleDelete(e) {

    fetch(`http://localhost:6001/listings/${e.target.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(data => console.log(data))
    const newList = [...listArr].filter(list => (parseInt(e.target.id) !== parseInt(list.id)))
    setListArr(newList);

    const newListTu = [...filArr].filter(list => (parseInt(e.target.id) !== parseInt(list.id)))
    setFilArr(newListTu);
  }

  function renderFilter(updatedList) {
    setFilArr(updatedList);
  }

  const letsSort = () => {
    const sorted = [...filArr];
    sorted.sort((a, b) => {
      if (a.location < b.location) return -1;
      else if (b.location < a.location) return 1;
      else return 0;
    })
    setFilArr(sorted);
  }

  function updateList(newList) {
    const copy = [...listArr];
    copy.push(newList)
    setListArr(copy);
    setFilArr(copy);
  }

  return (

    <div className="app">
      <Header listArr={listArr} renderFilter={renderFilter} />
      <ListingsContainer listArr={filArr} handleDelete={handleDelete} letsSort={letsSort} />
      <AddToList updateList={updateList} />
    </div>
  );
}

export default App;
