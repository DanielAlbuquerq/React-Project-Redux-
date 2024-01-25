import { combineReducers } from "redux";
// import UserReducer from "./user/reducer";
import userReducer from "./user/slice";
import cartReducer from "./cart/slice";


const rootReducer = combineReducers({userReducer, cartReducer});

export default rootReducer;
