import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
});

export const removeProductFrCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
});
























