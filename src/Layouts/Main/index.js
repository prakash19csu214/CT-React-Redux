import React, { Component } from "react";
import Home from "../../Pages/HomePage";
import { connect } from 'react-redux';
import Header from "../Header";
import Footer from "../Footer";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {NewArrivals, BestSeller, SpecialOffer, Featured} from '../../Components/HomeNested'
import { fetchProducts } from "../../Redux/ActionCreators";

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {dispatch(fetchProducts())}

});

class Main extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();

  }

  
  render() {

    const HomePage = () => {
      return(
        <Home products={this.props.products}
        isLoading={this.props.products.isLoading}
    errMess={this.props.products.errMess} />
      );
    }


  return (
    <>
      <Header />
        <Switch>
          <Route path="/home" component={HomePage}>
            <Route path="arrivals" element={<NewArrivals />} />
            <Route path="bestSeller" element={<BestSeller />} />
            <Route path="featured" element={<Featured />} />
            <Route path="specialOffer" element={<SpecialOffer />} />
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
    </>
  )
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));