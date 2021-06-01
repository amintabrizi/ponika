import * as types from './../types/types'

export const signUpAction = () => ({
    type: types.SIGN_UP
})

export const signUpPendingAction = () => ({
    type: types.SIGN_UP_PENDING
})

export const signInAction = () => ({
    type: types.SIGN_IN
})

export const forgetPasswordAction = () => ({
    type: types.FORGET_PASSWORD
})

export const confirmEmailAction = () => ({
    type: types.CONFIRM_EMAIL
})

export const modalAction = () => ({
    type: types.HANDLE_MODAL
})

