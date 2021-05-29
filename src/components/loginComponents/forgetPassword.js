import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import style from "./../../styles/modal.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ForgetPassword(props) {
  return (
    <>
      <Modal.Header className={`${style.modalHeader} position-relative`}>
        <button
          onClick={() => props.modalAction()}
          type="button"
          className={`${style.close} position-absolute bg-white border border-white p-0`}>
          <Image src="/svg/close.svg" height={30} width={30} />
        </button>

        <Modal.Title
          className={`${style.modalTitle} font-weight-normal`}
          id="contained-modal-title-vcenter">
          Forget Password
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="mx-4 px-0">
        <div className="social-login d-flex my-4 pb-2">
          <Link href="http://google.com" passHref>
            <Button className="border mr-3 flex-grow-1" variant="light">
              <img
                src="/svg/google.svg"
                className="mr-1"
                height={24}
                width={24}
              />
              Sign up with Google
            </Button>
          </Link>
          <Link href="http://facebook.com" passHref>
            <Button variant="info">
              <img src="/svg/facebook.svg" height={24} width={24} />
            </Button>
          </Link>
        </div>

        <hr className={`${style.divider} divider my-4`}></hr>

        <div className="social-login d-flex mt-4">
          <Form className="w-100" onSubmit={(e) => handleSubmit(e)} noValidate>
            <p>
              Enter the email address you used when you joined and we’ll send
              you new code to reset your password.
            </p>
            <Form.Group
              className="mb-4 position-relative"
              controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Control.Feedback
                type="invalid"
                tooltip></Form.Control.Feedback>
            </Form.Group>
            <Col className="my-4">
              <Button type="submit" size="md" block variant="danger">
                Submit
              </Button>
            </Col>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <div onClick={() => props.signInAction()} className="py-2">
          Already a member?{" "}
          <span className="text-primary cursor-pointer">Sign In</span>
        </div>
        <div onClick={() => props.signUpAction()} className="py-2">
          Not a member?{" "}
          <span className="text-primary cursor-pointer">Sign up now</span>
        </div>
      </Modal.Footer>
    </>
  );
}
