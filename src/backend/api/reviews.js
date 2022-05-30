const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const details = await knex("review").select("*");
    response.json(details);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  const newReview = request.body;
  const adding = await knex("review").insert(newReview);
  response.json(adding);
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  const details = await knex("review").select("*").where({ id: id });
  response.json(details);
});

router.put("/:id", async (request, response) => {
  const id = request.params.id;
  updatedInfo = request.body;
  const update = await knex("review").where({ id: id }).update(updatedInfo);
  response.json(update);
});

router.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const deleteById = await knex("review").where({ id: id }).delete("*");
  response.json(deleteById);
});

module.exports = router;
