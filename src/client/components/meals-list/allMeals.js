import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./mealsList.css";

async function fetchMeals() {
  const response = await fetch("/api/meals");
  const data = await response.json();
  return data;
}
export function Meals() {
  const [meals, setMeals] = useState([]);
  const [requestState, setRequestState] = useState("initial");

  useEffect(() => {
    setRequestState("loading");
    fetchMeals()
      .then((data) => {
        setMeals(data);
        setRequestState("success");
      })
      .catch((e) => setRequestState("error"));
  }, []);

  const isLoading = requestState === "initial" || requestState === "loading";
  const isError = requestState === "error";

  return (
    <div className="meals-menu">
      <h1>Meals</h1>

      {isError && <h1>Error </h1>}
      {isLoading ? (
        <h2>Loading ....</h2>
      ) : (
        <ul className="meals-list">
          {meals.map((aMeal) => (
            <li className="meal" key={aMeal.id}>
              <span className="meal-title">{aMeal.title}</span> <br />
              <span className="second-line">
                {" "}
                <span className="meal-price">{aMeal.price},-</span>
                <Link to={`/meals/${aMeal.id}`}>
                  <button className="booking-btn">Book</button>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
