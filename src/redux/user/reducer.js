const initialState = {
    currentUser: null
};

const UserReducer = (state = initialState, action) => {
    if (action.type === "user/login"){
        return { ...state, currentUser: action.payload};
    }
    if (action.type === "user/signOut"){
        return { ...state, currentUser: null};
    }

    return state;
};

export default UserReducer;