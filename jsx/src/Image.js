import React from "react";
import product from "./product";

const Image = () => {
  return (
    <div class="imgBx">
    <img src={product.imageUrl} alt="nike-air-shoe"/>
</div>
  )
};

export default Image;