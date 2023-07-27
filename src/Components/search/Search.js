import React, { useState, useEffect } from "react";
// import "../App.css";
import './search.css'
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { findWeather } from "../../store/cardSlice";
import axios from "axios";

const Search = () => {
  const [enteredCity, setEnteredCity] = useState("");
  const dispatch = useDispatch();


  const apiKey = "8ba84efae4b9ba8ad40626052cd17a09";
  const cards = useSelector((state) => state.card);

  const searchHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${apiKey}&units=metric`
    );
    console.log("url", response.data);
    dispatch(findWeather(response.data));
    setEnteredCity("");
  };

  return (
    <div>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <form className="middle">
            <input
              onChange={(e) => {
                setEnteredCity(e.target.value);
              }}
              value={enteredCity}
              type="text"
              placeholder="Enter a City"
            />
            <button onClick={searchHandler} type="submit">
              <i className="fas fa-search fa-lg"></i>
            </button>
            <span className="msg"></span>
          </form>
        </div>
      </section>

      <div className="card-container" style={{ display: "flex", width: "90%" }}>
        {cards.map((card) => (
          <Card key={card.id} city={card.name} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Search;
