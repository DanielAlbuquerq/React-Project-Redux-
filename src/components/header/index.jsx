// Components
import Cart from "../cart/index";
import AlertMessage from "../user/userAlert";

// Styles
import * as Styles from "./styles";

//Hook to access Reducer data
import {useSelector, useDispatch} from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selector";
import {userLogin, userLogout} from "../../redux/user/slice";
import { useState } from "react";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} =  useSelector(rootReducer => rootReducer.userReducer);
  const productsCount = useSelector(selectProductsCount)

  const dispatch = useDispatch()
  
  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleSignOutClick = () => {
    dispatch(userLogout())
    console.log(currentUser)
  } 

  const myHandleLoginClick = () => {
    dispatch(userLogin())
    console.log(currentUser)
    return AlertMessage()
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleSignOutClick}>Sign Out</div> : <div onClick={myHandleLoginClick}>Login</div> }
        <div onClick={handleCartClick}>Cart ({productsCount})</div>
      </Styles.Buttons>

      {/* <Styles.Buttons>
        {currentUser ? <div onClick={handleSignOutClick}>Sign Out</div> : <div onClick={handleLoginClick}>Login</div> }
        <div onClick={handleCartClick}>Cart ({productsCount})</div>
      </Styles.Buttons> */}

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
