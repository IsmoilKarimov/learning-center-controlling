import React, { useState, useEffect } from "react";
import "./Search.scss";
import { data } from "./data";
import { Link } from "react-router-dom";

const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }

  return listOfCars.filter(({ car_model }) =>
    car_model.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Search = () => {
  const [carList, setCarList] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data);
      setCarList(filteredCars);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  return (
    <div>
      <div className="container">
        <div className="list">
          {/* <h1>Studentes list</h1> */}
          <form className="form" action="#">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form__input"
              type="text"
              placeholder="Search contacts"
            />
          </form>

          <ul className="">
            {carList.map((car, index) => {
              return (
                <Link to="/" key={index}>
                  {car.car_model}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
