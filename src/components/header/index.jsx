import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

//Hook to access Reducer data
import {useSelector, useDispatch} from "react-redux";
import {loginUser, signOutUser} from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const {currentUser} =  useSelector(rootReducer => rootReducer.UserReducer)
  const dispatch = useDispatch()

  console.log({currentUser})

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
        <div onClick={handleCartClick}>Cart</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
