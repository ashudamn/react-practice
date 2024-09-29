import React from "react";

function Home(props) {
  return (
    <div>
      <h1>Home component</h1>
      <div className="cart-wrapper"></div>
      <div>
        <div className="btn-wrapper">
            <button onClick={()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}}>Add Iphone</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
