import React from "react";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card } from "react-bootstrap";
import './App.css';

const firstName = "Rayen"; 

const App = () => {
  return (
    <div class="container">
    <div class="card">
        <div class="imgBx">
            <Image/>
        </div>

        <div class="contentBx">

            <Name/>

            <div class="size">
                <Description/>
                

            </div>

            <div class="color">

                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#">Buy Now</a>
            <div>
            <Price/>
            </div>
        </div>

    </div>
</div>

  );
};

export default App;