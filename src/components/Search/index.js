import React, { useState } from 'react';
import "../../assets/Css/search.css";


const SearchProduct = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <form className="example">
        <input
          type="text"
          name="title"
          placeholder="Search in Wine.Delivery"
          // value={input}
          />
          <button>SEARCH</button>
      </form>

    </>
  );
}


export default SearchProduct;
