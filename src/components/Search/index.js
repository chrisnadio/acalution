import React, { useState } from 'react';
// import search from "../../assets/images/search.png";
import "../../assets/Css/search.css";


const SearchProduct = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <form>
        <div className="search-form">
          <table className="element-container">
            <tr>
              <td>
                <input
                  type="text"
                  className="search-input"
                 
                  name="title"
                  placeholder="Search in Wine.Delivery"
                  // value={input}
                />
              
                <button className="search-button">SEARCH</button>
              </td>
            </tr>
          </table>
        </div>
      </form>

    </>
  );
}


export default SearchProduct;
