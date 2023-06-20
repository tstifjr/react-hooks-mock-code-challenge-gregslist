import React, {useState} from "react";

function Search({listArr, renderFilter}) {

  const [searchInput, setSearchInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const copy = [...listArr];
    const updatedList = copy.filter(list=>
      {
        const loList = list.description.toLowerCase();
        const loSearch = searchInput.toLowerCase();
      return loList.match(loSearch);
    })
    if (searchInput === "") {renderFilter(copy)}
    else renderFilter(updatedList);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
