import axios from 'axios';
import React, {  } from 'react';
import "../../assets/Css/search.css";


const SearchProduct = () => {
 
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
