import React from "react";
import "./index.css";

function ListCard({ product }) {
  return (
    <>
      <div className="col-12 col-md-4 my-5">
        <div className="d-flex justify-content-center featured mr-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid list-img"
          />
        </div>
      </div>
      <div className="col-11 col-md-5 mt-5 ml-2">
        <div className="row text-center featured-head my-2">
          {product.title}
        </div>
        <div className="row text-center featured-para">
          <b> $ {product.price} </b>&nbsp; &nbsp;
        </div>
        <div className="list-para row my-1">{product.description}</div>
        {/* <div className="row text-center featured-para my-2">
            <span className="fa list-icon fa-shopping-cart"></span>
            <span className="fa list-icon fa-heart-o"></span>
            <span className="fa list-icon fa-search-plus"></span>
          </div> */}
        <div className="row mt-2">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <span className="btnn2-text">Add To Card</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ListCard;
