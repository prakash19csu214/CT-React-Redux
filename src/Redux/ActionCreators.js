import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../Shared/baseUrl";
import { localUrl } from "../Shared/localUrl";

export const postCart =
  (productId, productImg, productName, productPrice, productDescription) => (dispatch) => {
    const newCartProduct = {
      cartId: productId,
      cartImg: productImg,
      cartName: productName,
      cartPrice: productPrice,
      cartDescription: productDescription,
    };

    //function for posting cart products

    return fetch(localUrl, {
      method: "POST",
      body: JSON.stringify(newCartProduct),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "same-origin",
    }).then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      ////if no response from server
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addCart(response)))
    .catch(error => {
        console.log('Post Cart Product', error.message); 
        alert('Product in cart could not be posted\nError'+ error.message);
    });
  };

  export const addCart = (cartProduct) => ({
    type: ActionTypes.ADD_CART,
    payload: cartProduct
  })

  //function for fetching cart products

  export const fetchCartProducts = () => (dispatch) => {
    return fetch(localUrl)
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
        //if no responmse from server 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }) 
        .then(response => response.json())
        .then(products => dispatch(addCartProducts(products)))
        .catch(error => dispatch(addCartProductsFailed(error.message)));
  }

  export const addCartProducts = (cartProducts) => ({
    type: ActionTypes.ADD_CART_PRODUCTS,
    payload: cartProducts

  });

  export const addCartProductsFailed = (errMess) => ({
    type: ActionTypes.ADD_CART_PRODUCTS_FAILED,
    payload: errMess

  })

export const fetchProducts = () => (dispatch) => {
  dispatch(productsLoading(true));
  return fetch(baseUrl)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      ////if no responmse from server
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((products) => dispatch(addProducts(products)))
    .catch((error) => dispatch(productsFailed(error.message)));
};

export const productsLoading = () => ({
  type: ActionTypes.PRODUCTS_LOADING,
});

export const productsFailed = (errmess) => ({
  type: ActionTypes.PRODUCTS_FAILED,
  payload: errmess,
});

export const addProducts = (products) => ({
  type: ActionTypes.ADD_PRODUCTS,
  payload: products,
});
