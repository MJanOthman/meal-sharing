const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further infoo
    const maxPrice = request.query.maxPrice;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;
    const availableReservations = request.query.availableReservations;
    let allMeals = await knex("meal")
      .leftJoin("reservation", "meal.id", "=", "reservation.meal_id")
      .select("*");
    if (maxPrice || title || createdAfter || limit || availableReservations) {
      if (maxPrice) {
        allMeals = allMeals.filter((meal) => meal.price < parseInt(maxPrice));
      }
      if (title) {
        allMeals = allMeals.filter((meal) =>
          meal.title.toLowerCase().includes(title.toLowerCase())
        );
      }
      if (createdAfter) {
        allMeals = allMeals.filter(
          (meal) => Date.parse(meal.created_date) >= Date.parse(createdAfter)
        );
      }
      if (limit) {
        allMeals = allMeals.slice(0, limit);
      }
      if (availableReservations) {
        allMeals = allMeals.filter(
          (meal) => meal.max_reservations > meal.number_of_guests
        );
      }

      response.json(allMeals);
    } else {
      const titles = await knex("meal").select("*");
      response.json(titles);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  const newMeal = request.body;
  const adding = await knex("meal").insert(newMeal);
  response.json(adding);
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  const title = await knex("meal").select("*").where({ id: id });
  response.json(title);
});

router.put("/:id", async (request, response) => {
  const id = request.params.id;
  updatedInfo = request.body;
  const update = await knex("meal").where({ id: id }).update(updatedInfo);
  response.json(update);
});

router.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const deleteById = await knex("meal").where({ id: id }).delete("*");
  response.json(deleteById);
});

module.exports = router;
