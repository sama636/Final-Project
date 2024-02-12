import React, { useEffect, useState } from "react";
import "./Filter.scss";
import axios from "axios";

export default function Filter({ setFilterQuery }) {
  const [category, setCategory] = useState([]);
  const [filterValues, setFilterValues] = useState({
    category: "",
    q: "",
    price_gte: "",
    price_lte: "",
    bedrooms: "",
    bathrooms: "",
  });

  useEffect(() => {
    axios("http://localhost:3004/Categories").then((data) =>
      setCategory(data.data)
    );
  }, []);

  function changeFilter(e) {

    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
  }
  function handeForm(e) {
    console.log("ssss");
    e.preventDefault();
    let queryArr = [];
    for (let key in filterValues) {
      if (filterValues[key] != "") {
        queryArr.push(`${key}=${filterValues[key]}`);
      }
    }
    const filterArr = queryArr.join("&");
    setFilterQuery(filterArr);
  }
  return (
    <div className="container ">
      <form onSubmit={handeForm} className="d-flex flex-column gap-4 p-3">
        {/* <select
          name="category"
          value={filterValues.category}
          onChange={changeFilter}
          className="w-100"
        >
          <option value="">Choose Category</option>
          {category.map((Categories) => {
            return <option value={Categories}>{Categories}</option>;
          })}
        </select> */}
        <input
          name="q"
          value={filterValues.q}
          onChange={changeFilter}
          className="w-100"
          type="text"
          placeholder="Search"
        />
        <input
          name="rooms"
          value={filterValues.rooms}
          onChange={changeFilter}
          className="w-100"
          type="text"
          placeholder="Bedrooms"
        />
        <input
          name="bathroom"
          value={filterValues.bathroom}
          onChange={changeFilter}
          className="w-100"
          type="text"
          placeholder="Bathrooms"
        />
        <input
          name="price_gte"
          value={filterValues.price_gte}
          onChange={changeFilter}
          className="w-100"
          type="text"
          placeholder="Min price"
        />
        <input
          name="price_lte"
          value={filterValues.price_lte}
          onChange={changeFilter}
          className="w-100"
          type="text"
          placeholder="Max price"
        />
        <button type="submit" className="btnCall rounded-2 text-white py-1 fs-4 px-4">
          Filter
        </button>
      </form>
    </div>
  );
}
