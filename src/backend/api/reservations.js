const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const details = await knex("reservation").select("*");
    response.json(details);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  const newReservation = request.body;
  const adding = await knex("reservation").insert(newReservation);
  response.json(adding);
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  const details = await knex("reservation").select("*").where({ meal_id: id });
  response.json(details);
});

router.put("/:id", async (request, response) => {
  const id = request.params.id;
  updatedInfo = request.body;
  const update = await knex("reservation")
    .where({ id: id })
    .update(updatedInfo);
  response.json(update);
});

router.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const deleteById = await knex("reservation").where({ id: id }).delete("*");
  response.json(deleteById);
});

module.exports = router;
