import React from "react";
import Salmon from "./food pictures/Salmon.jpg";
import mlokhiye from "./food pictures/Mlokhya.jpeg";
import Avocado from "./food pictures/Avocado.jpg";
import burger from "./food pictures/burger.jpg";
import fruitSalad from "./food pictures/frugt salad.jpg";
import nutsKabab from "./food pictures/nuts Kebab.jpg";

import "./home.css";
export function Home() {
  return (
    <div className="imgs-collection">
      <img
        className="homePgImg"
        src={mlokhiye}
        alt="Mloukhya meal"
        width="500"
        height="400"
      />
      <img
        className="homePgImg"
        src={Salmon}
        alt="Salmon meal"
        width="500"
        height="400"
      />
      <img
        className="homePgImg"
        src={Avocado}
        alt="Avocado"
        width="500"
        height="400"
      />
      <img
        className="homePgImg"
        src={burger}
        alt="burger"
        width="500"
        height="400"
      />
      <img
        className="homePgImg"
        src={fruitSalad}
        alt="fruitSalad"
        width="500"
        height="400"
      />
      <img
        className="homePgImg"
        src={nutsKabab}
        alt="nutsKabab"
        width="500"
        height="400"
      />
    </div>
  );
}
