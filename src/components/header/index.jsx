import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

//Hook to access Reducer data
import {useSelector, useDispatch} from "react-redux";
import {UserActionTypes} from "../../redux/user/actions-types";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} =  useSelector(rootReducer => rootReducer.UserReducer)
  const dispatch = useDispatch()

  console.log({currentUser})

  const handleLoginClick = () => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: {name: "Daniel", email:"daniel_daniel@daniel.daniel"}
    })
    console.log('handleLoginClick clicked')
  } 

  const handleSignOutClick = () => {
    dispatch({
      type: UserActionTypes.SignOut,
      payload: {name: "Daniel", email:"daniel_daniel@daniel.daniel"}
    })
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
