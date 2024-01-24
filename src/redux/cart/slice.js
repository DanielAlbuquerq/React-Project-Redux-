import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {

            //variable to check if the product is already in cart(method some() used)
            const  productIsAlreadyInCart = state.products.some(
            (product) => product.id === action.payload.id
            );
            

            //if product already in cart, increase its quantity by 1.
            if(productIsAlreadyInCart){
                state.products = state.products.map(product => product.id === action.payload.id ? 
                        {...product, quantity: product.quantity + 1} : product
                    );
                return
            }

            // if product is not in cart, add it to.    
                state.products = [...state.products, {...action.payload, quantity: + 1}]

        }
    }
})

export const {addProduct} = cartSlice.actions;