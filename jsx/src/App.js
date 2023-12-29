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
    <div>
        
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
    
    <div className="last">

    
    <p style={{alignContent:"center",justifyContent:"center"}}>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <img style={{width:"100px"}} src="https://us-tuna-sounds-images.voicemod.net/f69d2df3-86ae-45bd-ba11-52a4c7affca0-1673980665254.jpeg" alt="User" />}
      </div>
    
    
</div>

</div>


  );
};

export default App;