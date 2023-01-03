import React from "react";

function CartProducts() {
  return (
    <>
      <div className="col-12 col-md-4 my-5">
        <div className="d-flex justify-content-center featured mr-5">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Fjallraven"
            className="img-fluid list-img"
          />
        </div>
      </div>
      <div className="col-11 col-md-5 mt-5 ml-2">
        <div className="row my-2">
            <div className="col-4 row text-center featured-head ">
            Fjallraven
            </div>
            <div className="col-8">
            <button class="btn btn-outline-success my-2 my-sm-0 float-right" to="/cart" type="cart">
              <span className="fa fa-lg fa-trash"></span>
            </button>
            </div>
            </div>
        <div className="row text-center featured-para">
          <b> $ 109.95 </b>&nbsp; &nbsp;
        </div>
        <div className="list-para row my-1">
          Slim-fitting style, contrast raglan long sleeve, three-button henley
          placket, light weight & soft fabric for breathable and comfortable
          wearing. And Solid stitched shirts with round neck made for durability
          and a great fit for casual fashion wear and diehard baseball fans. The
          Henley style round neckline includes a three-button placket.
        </div>
        <div className="row text-center featured-para my-2">
          <span className="fa list-icon fa-shopping-cart"></span>
          <span className="fa list-icon fa-heart-o"></span>
          <span className="fa list-icon fa-search-plus"></span>
        </div>
      </div>
    </>
  );
}

export default CartProducts;
