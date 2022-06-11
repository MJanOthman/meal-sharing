import React from "react";
import { BrowserRouter, Router, Link, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import { Home } from "./components/home-page/homePage.js";
import { About } from "./components/about/about";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Meals } from "./components/meals-list/allMeals";
import { Meal } from "./components/meal-by-id-reservation/Meal";
import { NewMeal } from "./components/add-meal/addMeal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/meals">
          <Meals></Meals>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/meals/:id">
          <Meal></Meal>
        </Route>
        <Route exact path="/addmeal">
          <NewMeal />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
