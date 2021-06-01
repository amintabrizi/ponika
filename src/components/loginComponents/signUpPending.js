import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import style from './../../styles/modal.module.scss';
import Image from "next/image";
import Link from 'next/link';
import axiosRequest from './../../Axios/AxiosConfig';


export default function SignUpPending(props) {
  return (
    <>
      <Modal.Header className={`${style.modalHeader} position-relative`}>

        <button
          onClick={() => props.modalAction()}
          type="button"
          className={`${style.close} position-absolute bg-white border border-white p-0`}
        >
          <Image src="/svg/close.svg" height={30} width={30} />
        </button>

        <Modal.Title
          className={`${style.modalTitle} font-weight-normal`}
          id="contained-modal-title-vcenter"
        >Awaiting Confirmation</Modal.Title>

      </Modal.Header>

      <Modal.Body className="mx-4 px-0">
        <div className="social-login d-flex my-4 pb-2">
          <Link href="http://google.com" passHref>
            <Button className="border mr-3 flex-grow-1" variant="light">
              <img src="/svg/google.svg" className="mr-1" height={24} width={24} />Sign up with Google
            </Button>
          </Link>
          <Link href="http://facebook.com" passHref>
            <Button variant="info"><img src="/svg/facebook.svg" height={24} width={24} /></Button>
          </Link>
        </div>

        <hr className={`${style.divider} divider my-4`}></hr>

        <div className="social-login d-flex mt-4 flex-column">
          <h3>Hello Amin!</h3>
          <strong className="my-2">Do not close this window until opening the email link.</strong>
          <p>We just sent an email to <span className="text-danger">amintabrizi@gmail.com</span><span className="ml-1">(<span className="text-primary">undo</span>)</span>
            <br />
Verify that the provided security code matches the following text:</p>
          <div className="p-3 my-3 security-code text-center bg-success text-white font-weight-bold rounded">Delightful Capybara</div>
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
  )
}