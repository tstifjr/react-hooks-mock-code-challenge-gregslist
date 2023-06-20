import React from "react";
import Search from "./Search";

function Header({listArr, renderFilter}) {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listArr={listArr} renderFilter={renderFilter}/>
    </header>
  );
}

export default Header;
