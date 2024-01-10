
import {UserActionTypes} from "../../redux/user/actions-types";

const initialState = {
    currentUser: null
};

const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case UserActionTypes.LOGIN:
            return { ...state, currentUser: action.payload};
        case UserActionTypes.SIGNOUT:
            return { ...state, currentUser: null}
        default:
            return state
    }   
};

export default UserReducer;