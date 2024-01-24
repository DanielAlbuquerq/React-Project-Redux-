// Styles
import rootReducer from "../../redux/root-reducer";
import * as Styles from "./styles";

import {useSelector} from 'react-redux'
import CartItem from "../cart-item/index"
import { selectProductsTotalPrice } from "../../redux/cart/cart.selector";


const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  
  const {products} = useSelector(rootReducer => rootReducer.cartReducer)
  const productTotalPrice = useSelector(selectProductsTotalPrice)
 
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Your cart</Styles.CartTitle>
        
        {products.map((product, index) => (<CartItem key={index} product={product}/>) )}
        
        <Styles.CartTotal>
          Total: R$ {productTotalPrice}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
