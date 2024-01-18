import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case CartActionTypes.ADD_PRODUCT:
            //variable to check if the product is already in cart(method some() used)
            const  productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );
            

            //if product already in cart, increase its quantity by 1.
            if(productIsAlreadyInCart){
                return{...state, products: state.products.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product
                    ),
                  };
            }

            // if product is not in cart, add it to.
            return{
                ...state,
                products: [...state.products, {...action.payload, quantity: + 1}]
            }
        
            // return{
            //     ...state, 
            //     products: [...state.products, action.payload],
            // };
        
        default:
            return state;
    }
};

export default cartReducer;