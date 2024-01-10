import React, { useEffect, useState } from "react";
import "./Filter.scss";
import axios from "axios";

export default function Filter({setFilterQuery}) {
  const [category, setCategory] = useState([]);
  const [filterValues, setFilterValues] = useState({
    q: "",
    category: "",
    price_gte: "",
    price_lte: "",
  });

  useEffect(() => {
    axios("http://localhost:3004/Categories").then((data) =>
      setCategory(data.data)
    );
  }, []);
  function changeFilter(e) {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
  }
  function handeForm(e){
    e.preventDefault();
    let queryArr = [];
    for(let key in filterValues){
      if(filterValues[key] != ""){
        queryArr.push(`${key}=${filterValues[key]}`)
      }
    }
    const filterArr = queryArr.join("&")
    setFilterQuery(filterArr)
  }
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form onSubmit={handeForm} className="d-flex p-3 gap-3 ">
        <input
        name="q"
          value={filterValues.q}
          onChange={changeFilter}
          className="w-100"
          type="text"
          placeholder="search..."
        />
        <select
        name="category"
          value={filterValues.category}
          onChange={changeFilter}
          className="w-100"
        >
          <option value="">Choose Category</option>
          {category.map((Categories) => {
            return <option value={Categories}>{Categories}</option>;
          })}
        </select>
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
        <button type="submit" className="btn btn-primary fs-4">Filter</button>
      </form>
    </div>
  );
}
