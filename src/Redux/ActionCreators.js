import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../Middleware/baseUrl';

export const fetchProducts = () => (dispatch) => {
    return fetch(baseUrl)
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
        ////if no responmse from server 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }) 
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)));
};

export const productsFailed = (errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});