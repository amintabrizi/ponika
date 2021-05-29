import {
  SIGN_UP,
  SIGN_IN,
  FORGET_PASSWORD,
  CONFIRM_EMAIL,
} from "../types/types";

export default function loginMethodReducer(
  loginMethodState = "sign_up",
  action
) {
  switch (action.type) {
    case SIGN_UP:
      return "sign_up";
    case SIGN_IN:
      return "sign_in";
    case FORGET_PASSWORD:
      return "forget_password";
    case CONFIRM_EMAIL:
      return "confirm_email";
    default:
      return loginMethodState;
  }
}
