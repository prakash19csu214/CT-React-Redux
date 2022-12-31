import React from "react";
import "./index.css";
import { Jumbotron } from "reactstrap";
import Heading from "../../Components/Heading";
import { Button } from "../../Components/Button";
import { Loading } from "../../Components/Loading";
import ListCard from "../../Components/ListCard";

export default function Home(props) {
  const products = props.products.products.map((product) => {
    return <ListCard product={product} key={product.id} />;
  });

  const ProductsRender = () => {
    if (props.products.isLoading) {
      return (
        <div className="container d-flex justify-content-center my-2">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (props.products.errMess) {
      return (
        <div className="container d-flex justify-content-center my-2">
          <div className="row">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      );
    } else
      return (
        <div>
          <div className="sec-3 my-4 container">
            <div className="row justify-content-center d-flex">
              <div className="row container d-flex justify-content-center">
                {products}
              </div>
            </div>
          </div>
          <div className="bg-section my-4">
            <div className="row justify-content-center d-flex">
              <div className="my-5 mx-5">
                <Heading
                  props="Get Leatest Update By Subscribe
    Our Newslater"
                />
              </div>
              <div className="row container d-flex justify-content-center my-4">
                <div className="">
                  <Button props="Shop Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };

  return (
    <>
      <Jumbotron>
        <div className="row container">
          <div className="col-12 col-sm-12">
            <div className="row row-header">
              <div className="col-12 col-sm-12 heading">
                <p style={{ color: "var(--primary-color)" }}>
                  Best Furniture For Your Castle....
                </p>
                <b>New Furniture Collection Trends in 2020</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <button className="btnn">
                  <div className="align-item-center btnn-text">Shop Now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="sec-3 my-4 container">
            <div className="row justify-content-center d-flex">
              <div className="row container d-flex justify-content-center">
              <Heading props="Products Using Redux" />
              <ProductsRender />
              </div>
            </div>
          </div>
      
      

    </>
  );
}
