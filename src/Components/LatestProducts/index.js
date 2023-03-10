import React from "react";
import './index.css'

const LatestProducts = ({product}) => {
  return (
    <div className='col-4 col-sm-3 mx-3 my-2'>
      <div className="row d-flex justify-content-center featured">
        <img src={product.image} alt={product.title} className="img-fluid featured-img" />
      </div>
      <div className="text-center featured-para">
      {product.title}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {product.price}
      <span className="latest-mini">{product.price}</span>
      </div>
    </div>
  );
};

export default LatestProducts;
