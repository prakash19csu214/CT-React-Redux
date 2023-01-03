import React from "react";
import CartProducts from "../../Components/CartProducts";
import Heading from "../../Components/Heading";
import "./index.css";

function Cart() {

  return (
    <>
      <div className="container cartt">
        <div className="text-center">
          <Heading props="Products in your cart" />
        </div>

        <div className="carttProduct">
          <div className="sec-3 my-4 container">
            <div className="row container d-flex justify-content-center">
              <CartProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
