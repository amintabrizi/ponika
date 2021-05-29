import { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import style from './../../styles/modal.module.scss';
import Image from "next/image";
import Link from 'next/link';
import axiosRequest from './../../Axios/AxiosConfig';

export default function SignUp(props) {

  const initialState = {
    fullName: false,
    userName: false,
    email: false,
    password: false,
    privacyPolicy: false
  }

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  let isFormValid = () => {
    const { fullName, userName, email, password, privacyPolicy } = form
    return fullName && userName && email && password && privacyPolicy
  }

  let handleInput = (e, inputName) => {
    setForm({ ...form, [inputName]: e.target.value })
    if (!!errors[inputName]) setErrors({
      ...errors,
      [inputName]: null
    })
  }

  let handleFullnameErrors = () => {
    const { fullName } = form
    const fullnameValidationErrors = {}
    if (!fullName || fullName === '') {
      fullnameValidationErrors.fullName = 'Full name can not be empty!';
      setErrors(fullnameValidationErrors);
      return;
    }
    else if (fullName.length < 3) {
      fullnameValidationErrors.fullName = 'Full name is too short!';
      setErrors(fullnameValidationErrors);
      return;
    }
    else if (fullName.length > 30) {
      fullnameValidationErrors.fullName = 'Full name is too long!';
      setErrors(fullnameValidationErrors);
      return;
    }
    else if (!/^[a-z]{3,}([',. -][a-z]{3,})*$/.test(fullName)) {
      fullnameValidationErrors.fullName = 'You can only use lowercase letters';
      setErrors(fullnameValidationErrors);
      return;
    } else {
      setErrors({});
      return;
    }
  }

  let handleUsernameErrors = () => {
    const { userName } = form;
    const usernameValidationErrors = {};
    // userName validation
    if (userName.length < 3) {
      usernameValidationErrors.userName = 'Username is too short!';
      setErrors(usernameValidationErrors);
      return;
    }
    else if (userName.length > 30) {
      usernameValidationErrors.userName = 'Username is too long!';
      setErrors(usernameValidationErrors);
      return;
    }
    else if (!userName || userName === '') {
      usernameValidationErrors.userName = 'Username can not be empty!';
      setErrors(usernameValidationErrors);
      return;
    }
    if (!/^[a-z]+/.test(userName)) {
      usernameValidationErrors.userName = 'Username must start with lowercase letters';
      setErrors(usernameValidationErrors);
      return;
    }
    else if (/(\s)+/.test(userName)) {
      usernameValidationErrors.userName = 'Username must not have any space characters';
      setErrors(usernameValidationErrors);
      return;
    }
    else if (/[A-Z]+/.test(userName)) {
      usernameValidationErrors.userName = 'You can only use lowercase letters and digits';
      setErrors(usernameValidationErrors);
      return;
    }
    else if (/[!@#$%^&*()\-+={}[\]|\\;:'",<.>\/?]{1,}/.test(userName)) {
      usernameValidationErrors.userName = 'You can only use lowercase letters and digits';
      setErrors(usernameValidationErrors);
      return;
    }
    else {
      setErrors({});
    }
    axiosRequest.post('/user/existencecheck', {
      "user": {
        "username": userName,
      },
      "findOption": 0
    })
      .then((res) => {
        if (res.data.status) {
          usernameValidationErrors.userName = 'This username has already been taken. Please pick another username'
          setErrors(usernameValidationErrors);
          return;
        } else {
          setErrors({});
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let handleEmailErrors = () => {

    const { email } = form;
    const emailValidationErrors = {};

    if (!email || email === '') {
      emailValidationErrors.email = 'Email can not be empty!';
      setErrors(emailValidationErrors);
      return;
    }

    else if (email.length < 2) {
      emailValidationErrors.email = 'Email is too short!';
      setErrors(emailValidationErrors);
      return;
    }

    else if (email.length > 2) {
      if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)) {
        emailValidationErrors.email = 'Email is not valid';
        setErrors(emailValidationErrors);
        return;
      }
      axiosRequest.post('/user/existencecheck', {
        "user": {
          "email": email,
        },
        "findOption": 1
      })
        .then((res) => {
          if (res.data.status) {
            emailValidationErrors.email = 'This email has already been taken. Please pick another email';
            setErrors(emailValidationErrors)
            return;
          } else {
            setErrors({});
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  let handlePasswordErrors = () => {
    const { password } = form;
    const passwordValidationErrors = {};

    if (!password || password === '') {
      passwordValidationErrors.password = 'Password can not be empty!';
      setErrors(passwordValidationErrors);
      return;
    }

    else if (password.length < 6) {
      passwordValidationErrors.password = 'Password must be at least 6 character';
      setErrors(passwordValidationErrors);
      return;
    }
    else if (password.length > 30) {
      passwordValidationErrors.password = 'Password is too long!';
      setErrors(passwordValidationErrors);
      return;
    }
    else {
      setErrors({});
    }
  }

  let handleCheckBox = () => {
    setForm({ ...form, privacyPolicy: !form.privacyPolicy })
  }

  const findFormErrors = () => {

    const { fullName, userName, email, password } = form
    const newErrors = {}

    // fullName validation
    if (!fullName || fullName === '') {
      newErrors.fullName = 'Full name can not be empty!';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (fullName.length < 3) {
      newErrors.fullName = 'Full name is too short!';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (fullName.length > 30) {
      newErrors.fullName = 'Full name is too long!';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (!/^[a-z]{3,}([',. -][a-z]{3,})*$/.test(fullName)) {
      newErrors.fullName = 'You can only use lowercase letters';
      setErrors(newErrors);
      //return newErrors;
    }

    // userName validation
    if (userName.length < 3) {
      newErrors.userName = 'Username is too short!';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (userName.length > 30) {
      newErrors.userName = 'Username is too long!';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (!userName || userName === '') {
      newErrors.userName = 'Username can not be empty!';
      setErrors(newErrors);
      //return newErrors;
    }
    if (!/^[a-z]+/.test(userName)) {
      newErrors.userName = 'Username must start with lowercase letters';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (/(\s)+/.test(userName)) {
      newErrors.userName = 'Username must not have any space characters';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (/[A-Z]+/.test(userName)) {
      newErrors.userName = 'You can only use lowercase letters and digits';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (/[!@#$%^&*()\-+={}[\]|\\;:'",<.>\/?]{1,}/.test(userName)) {
      newErrors.userName = 'You can only use lowercase letters and digits';
      setErrors(newErrors);
      //return newErrors;
    }
    // axiosRequest.post('/user/existencecheck', {
    //   "user": {
    //     "username": userName,
    //   },
    //   "findOption": 0
    // })
    //   .then((res) => {
    //     if (res.data.status) {
    //       newErrors.userName = 'This username has already been taken. Please pick another username'
    //       setErrors(newErrors);
    //       return newErrors;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

    //email validation
    if (!email || email === '') {
      newErrors.email = 'Email can not be empty!';
      setErrors(newErrors);
      //return newErrors;
    }

    else if (email.length < 2) {
      newErrors.email = 'Email is too short!';
      setErrors(newErrors);
      //return newErrors;
    }

    else if (email.length > 2) {
      if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)) {
        newErrors.email = 'Email is not valid';
        setErrors(newErrors);
        //return newErrors;
      }
      // axiosRequest.post('/user/existencecheck', {
      //   "user": {
      //     "email": email,
      //   },
      //   "findOption": 1
      // })
      //   .then((res) => {
      //     if (res.data.status) {
      //       newErrors.email = 'This email has already been taken. Please pick another email';
      //       setErrors(newErrors)
      //       return;
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
    }

    //password validation
    if (!password || password === '') {
      newErrors.password = 'Password can not be empty!';
      setErrors(newErrors);
      //return newErrors;
    }

    else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 character';
      setErrors(newErrors);
      //return newErrors;
    }
    else if (password.length > 30) {
      newErrors.password = 'Password is too long!';
      setErrors(newErrors);
      //return newErrors;
    }
    return newErrors;
  }

  const findUsernameErrors = () => {

    const { userName } = form


    axiosRequest.post('/user/existencecheck', {
      "user": {
        "username": userName,
      },
      "findOption": 0
    })
      .then((res) => {
        if (res.data.status) {
          setErrors(prevstate => ({
            ...prevstate, userName: 'This username has already been taken. Please pick another username'
          }));
          //return existenceCheckErrors
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }


  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    findFormErrors();
    findUsernameErrors();
    // Conditional logic:
    if (Object.keys(errors).length === 0) {
      console.log('ok');
    }
  }

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
        >Sign Up</Modal.Title>

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

        <div className="social-login d-flex mt-4">
          <Form className="w-100" onSubmit={(e) => handleSubmit(e)} noValidate>
            <Row className="mb-4">
              <Col>
                <Form.Control onBlur={() => handleFullnameErrors()} onChange={(e) => handleInput(e, 'fullName')} placeholder="Full Name"
                  isInvalid={!!errors.fullName} />
                <Form.Control.Feedback type='invalid' tooltip style={{ left: '15px' }}>
                  {errors.fullName}
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Control onBlur={() => handleUsernameErrors()} onChange={(e) => handleInput(e, 'userName')} placeholder="User name"
                  isInvalid={!!errors.userName} />
                <Form.Control.Feedback type='invalid' tooltip style={{ left: '15px' }}>
                  {errors.userName}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Form.Group className="mb-4 position-relative" controlId="formGroupEmail">
              <Form.Control onBlur={() => handleEmailErrors()} onChange={(e) => handleInput(e, 'email')} type="email" placeholder="Enter email"
                isInvalid={!!errors.email} />
              <Form.Control.Feedback type='invalid' tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupPassword" className="mb-4 position-relative">
              <Form.Control onBlur={() => handlePasswordErrors()} onChange={(e) => handleInput(e, 'password')} type="password" placeholder="Password"
                isInvalid={!!errors.password} />
              <Form.Control.Feedback type='invalid' tooltip>
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Col className="p-0">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input onChange={() => handleCheckBox('privacyPolicy')} type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                <label className="custom-control-label" htmlFor="customControlAutosizing">Creating an account means you’re okay with our Terms of Service, and Privacy Policy.</label>
              </div>
            </Col>
            <Col className="my-4">
              <Button type="submit" size="md" block variant="danger"
                disabled={!isFormValid()}
              >Create Account</Button>
            </Col>
          </Form>
        </div>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-end">
        <div onClick={() => props.signInAction()} className="py-2">Already a member? <span className="text-primary cursor-pointer">Sign In</span></div>
      </Modal.Footer>
    </>
  )
}
