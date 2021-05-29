import * as types from './../types/types'

export default function modalReducer(state = false, action) {
    switch (action.type) {
        case types.HANDLE_MODAL:
            return !state

        default:
            return state
    }
}
