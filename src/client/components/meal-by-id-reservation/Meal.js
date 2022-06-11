import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React from "react";
import "./meal.css";
export function Meal() {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  const [reserve, setReserve] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [inputs, setInputs] = useState({});

  async function fetchMealById() {
    const response = await fetch(`/api/meals/${id}`);
    const data = await response.json();
    setMeal(() => data);
  }
  async function fetchReservationsByMealId() {
    const response = await fetch(`/api/reservations/${id}`);
    const data = await response.json();
    setReservations(() => data);
  }

  useEffect(() => {
    fetchMealById();
    fetchReservationsByMealId();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function getCurrentDate() {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return date;
  }
  function addReservationbyFetch(reservationInfo) {
    fetch("http://localhost:5000/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationInfo),
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let reservationsMade = 0;
    let availableReservations = 0;
    reservations.map((AReservation) => {
      reservationsMade = reservationsMade + AReservation.number_of_guests;
    });
    meal.map((AMeal) => {
      availableReservations = availableReservations + AMeal.max_reservations;
    });
    if (availableReservations >= reservationsMade + inputs.NumberOfMeals) {
      addReservationbyFetch({
        number_of_guests: inputs.NumberOfMeals,
        created_date: getCurrentDate(),
        meal_id: id,
        contact_phone: inputs.PhoneNumber,
        contact_name: inputs.Name,
        contact_email: inputs.Email,
      });
      alert("You reservation succeed");
    } else {
      alert("Can not Provide you with this amount of meals");
    }
  };

  const onReserveHandler = () => {
    setReserve(!reserve);
  };
  {
    meal.map((TheMeal) => {
      let d = new Date(TheMeal.delivering_time).toLocaleString();
      TheMeal.delivering_time = d;
    });
  }

  return (
    <div className="meal-container">
      <h1>Welcome to your meal by id </h1>
      {meal.map((TheMeal) => (
        <ul className="meal-info">
          <li>
            <span className="key-name">Name:</span> {TheMeal.title}{" "}
          </li>
          <li>
            <span className="key-name">Description:</span> {TheMeal.description}{" "}
          </li>
          <li>
            <span className="key-name">Location:</span> {TheMeal.location}{" "}
          </li>
          <li>
            <span className="key-name">Delivering time:</span>{" "}
            {TheMeal.delivering_time}{" "}
          </li>
          <li>
            <span className="key-name">Max reservations:</span>{" "}
            {TheMeal.max_reservations}{" "}
          </li>
          <li>
            <span className="key-name">Price:</span> {TheMeal.price}{" "}
          </li>
        </ul>
      ))}
      {reserve ? (
        <form className="make-reservation-form">
          <div className="input-block">
            <input
              type="text"
              name="Name"
              value={inputs.Name || ""}
              onChange={handleChange}
              onBlur={(event) => {
                event.target.value != ""
                  ? event.target.classList.add("active")
                  : event.target.classList.remove("active");
              }}
              required
            />
            <label>Name</label>
            <div className="border"></div>
          </div>
          <div className="input-block">
            <input
              type="number"
              name="NumberOfMeals"
              value={inputs.NumberOfMeals || ""}
              onChange={handleChange}
              onBlur={(event) => {
                event.target.value != ""
                  ? event.target.classList.add("active")
                  : event.target.classList.remove("active");
              }}
              required
            />
            <label>Number of meals</label>
            <div className="border"></div>
          </div>
          <div className="input-block">
            <input
              type="text"
              name="PhoneNumber"
              value={inputs.PhoneNumber || ""}
              onChange={handleChange}
              onBlur={(event) => {
                event.target.value != ""
                  ? event.target.classList.add("active")
                  : event.target.classList.remove("active");
              }}
              required
            />
            <label>Phone number</label>
            <div className="border"></div>
          </div>

          <div className="input-block">
            <input
              type="email"
              name="Email"
              value={inputs.Email || ""}
              onChange={handleChange}
              onBlur={(event) => {
                event.target.value != ""
                  ? event.target.classList.add("active")
                  : event.target.classList.remove("active");
              }}
              required
            />
            <label>Email</label>
            <div className="border"></div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add new Reservation
          </button>
        </form>
      ) : (
        <>
          <button className="reservation-btn" onClick={onReserveHandler}>
            Reserve
          </button>
          <Link to={`/meals`}>
            <button className="back-btn back">Back</button>
          </Link>
        </>
      )}
    </div>
  );
}
