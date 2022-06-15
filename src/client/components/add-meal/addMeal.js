import React, { useMemo, useState } from "react";
import "./addMeal.css";
export const NewMeal = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    deliveringTime: "",
    maxReservations: "",
    price: "",
    createdDate: "",
  });

  const formISComplete = useMemo(() => {
    return Object.values(inputs).every(Boolean);
  }, [inputs]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function addingMealByFetch(meal) {
    fetch("/api/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meal),
    })
      .then((res) => {
        if (res.ok) {
          alert("success!! " + inputs.title + " added");
          return res.json();
        }
        alert("Error fetching! Error code: " + res.status);
        return;
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addingMealByFetch({
      title: inputs.title,
      description: inputs.description,
      location: inputs.location,
      delivering_time: inputs.deliveringTime,
      max_reservations: inputs.maxReservations,
      price: inputs.price,
      created_date: inputs.createdDate,
    });
  };

  return (
    <div className="container">
      <h1>Add new meal</h1>
      {/* // style={{ textAlign: "center" }} */}
      <form className="add-meal-form">
        <div className="input-block">
          <input
            id="title"
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
            onBlur={(event) => {
              event.target.value != ""
                ? event.target.classList.add("active")
                : event.target.classList.remove("active");
            }}
            required
          />
          <label htmlFor="title">Name</label>
          <div className="border"></div>
        </div>
        <div className="input-block">
          <input
            id="description"
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
            onBlur={(event) => {
              event.target.value != ""
                ? event.target.classList.add("active")
                : event.target.classList.remove("active");
            }}
            required
          />
          <label htmlFor="description">Description </label>
          <div className="border"></div>
        </div>
        <div className="input-block">
          <input
            id="location"
            type="text"
            name="location"
            value={inputs.location || ""}
            onChange={handleChange}
            onBlur={(event) => {
              event.target.value != ""
                ? event.target.classList.add("active")
                : event.target.classList.remove("active");
            }}
            required
          />{" "}
          <label htmlFor="location">Location</label>
          <div className="border"></div>
        </div>
        <div className="input-block">
          <input
            id="DeliveringTime"
            type="datetime-local"
            name="deliveringTime"
            value={inputs.deliveringTime || ""}
            onChange={handleChange}
            onBlur={(event) => {
              event.target.value != ""
                ? event.target.classList.add("active")
                : event.target.classList.remove("active");
            }}
            required
          />
          <label htmlFor="DeliveringTime">Delivering time</label>
          <div className="border"></div>
        </div>
        <div className="input-block">
          <input
            id="maxReservation"
            type="number"
            name="maxReservations"
            min="1"
            value={inputs.maxReservations || ""}
            onChange={handleChange}
            onBlur={(event) => {
              event.target.value != ""
                ? event.target.classList.add("active")
                : event.target.classList.remove("active");
            }}
            required
          />{" "}
          <label htmlFor="maxReservation">Max Reservation</label>
          <div className="border"></div>
        </div>
        <div className="input-block">
          <input
            id="price"
            type="number"
            name="price"
            min="1"
            value={inputs.price || ""}
            onChange={handleChange}
            onBlur={(event) => {
              event.target.value != ""
                ? event.target.classList.add("active")
                : event.target.classList.remove("active");
            }}
            required
          />
          <label htmlFor="price">Price </label>
          <div className="border"></div>
        </div>
        <div className="input-block">
          <input
            id="createdDate"
            type="date"
            name="createdDate"
            value={inputs.createdDate || ""}
            onChange={handleChange}
            onBlur={(event) => {
              event.target.value != ""
                ? event.target.classList.add("active")
                : event.target.classList.remove("active");
            }}
            required
          />{" "}
          <label htmlFor="createdDate">Created Date </label>
          <div className="border"></div>
        </div>
        <button type="submit" onClick={handleSubmit} disabled={!formISComplete}>
          Add new Meal
        </button>
      </form>
    </div>
  );
};
