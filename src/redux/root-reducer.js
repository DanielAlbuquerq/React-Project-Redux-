import { combineReducers } from "redux";
import UserReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({UserReducer, cartReducer});

export default rootReducer;