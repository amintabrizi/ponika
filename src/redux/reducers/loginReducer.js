import { HANDLE_LOGIN } from './../types/types'

export default function loginReducer(loginState = false, action) {
    switch (action.type) {
        case HANDLE_LOGIN:
            return !loginState;

        default:
            return loginState;
    }
}