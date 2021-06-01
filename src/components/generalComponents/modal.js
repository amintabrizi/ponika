import React from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import Image from "next/image";
import {
  modalAction,
  signUpAction,
  signUpPendingAction,
  signInAction,
  forgetPasswordAction,
} from "./../../redux/actions/actions";

//import Components
import SignUp from "../loginComponents/signUp";
import SignUpPending from "./../loginComponents/signUpPending";
import SignIn from "../loginComponents/signIn";
import ForgetPassword from "./../loginComponents/forgetPassword";

//import styles
import style from "./../../styles/modal.module.scss";

function ModalComponent(props) {
  let HandleLoginComponent = () => {
    if (props.loginMethodState === "sign_up") {
      return (
        <SignUp
          signInAction={props.signInAction}
          signUpPendingAction={props.signUpPendingAction}
          modalAction={props.modalAction}
        />
      );
    }
    if (props.loginMethodState === "sign_up_pending") {
      return (
        <SignUpPending
          modalAction={props.modalAction}
        />
      );
    }
    if (props.loginMethodState === "sign_in") {
      return (
        <SignIn
          signUpAction={props.signUpAction}
          modalAction={props.modalAction}
          forgetPasswordAction={props.forgetPasswordAction}
        />
      );
    }
    if (props.loginMethodState === "forget_password") {
      return (
        <ForgetPassword
          signInAction={props.signInAction}
          signUpAction={props.signUpAction}
        />
      );
    }
  };

  return (
    <>
      <Modal
        show={props.modalState}
        onHide={props.modalAction}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <div className="d-flex">
          <div
            className={`${style.pomegranateSection} left-section col-6 d-flex justify-content-center align-items-center rounded-left`}>
            <Image src="/images/pomegranate.jpg" width={800} height={600} />
          </div>
          <div className="right-section col-6">{HandleLoginComponent()}</div>
        </div>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    modalState: state.modalReducer,
    loginMethodState: state.loginMethodReducer,
  };
};

export default connect(mapStateToProps, {
  modalAction,
  signUpAction,
  signUpPendingAction,
  signInAction,
  forgetPasswordAction,
})(ModalComponent);
