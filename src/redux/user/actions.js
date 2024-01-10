import { UserActionTypes } from "./actions-types"

export const loginUser = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload,
})

export const signOutUser = () => ({
    type: UserActionTypes.SIGNOUT,
})

