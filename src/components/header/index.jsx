import { useState, useMemo } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

//Hook to access Reducer data
import {useSelector, useDispatch} from "react-redux";
import {loginUser, signOutUser} from "../../redux/user/actions";
import rootReducer from "../../redux/root-reducer";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} =  useSelector(rootReducer => rootReducer.UserReducer);
  const {products} = useSelector(rootReducer => rootReducer.cartReducer);

  const dispatch = useDispatch()

  const productsCount = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [products]) 

  const handleLoginClick = () => {
    dispatch(loginUser({name: "daniel", email:"daniel@daniel.com"}))
    console.log('handleLoginClick clicked')
  } 

  const handleSignOutClick = () => {
    dispatch(signOutUser())
    console.log('handleSigOutClick clicked')
  } 

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleSignOutClick}>Sign Out</div> : <div onClick={handleLoginClick}>Login</div> }
        <div onClick={handleCartClick}>Cart ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
