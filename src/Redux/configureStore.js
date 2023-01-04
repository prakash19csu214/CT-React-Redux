import { createStore, combineReducers, applyMiddleware } from "redux";
import { Products } from "./products";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { CartProducts } from "./cartProducts";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            cartProducts: CartProducts
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}