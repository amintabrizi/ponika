self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/loginComponents/signUp.js":
/*!**************************************************!*\
  !*** ./src/components/loginComponents/signUp.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUp; }
/* harmony export */ });
/* harmony import */ var C_Users_Administrator_Desktop_anar_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../styles/modal.module.scss */ "./src/styles/modal.module.scss");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Axios_AxiosConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Axios/AxiosConfig */ "./src/Axios/AxiosConfig.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\anar\\src\\components\\loginComponents\\signUp.js",
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Administrator_Desktop_anar_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function SignUp(props) {
  _s();

  var initialState = {
    fullName: false,
    userName: false,
    email: false,
    password: false,
    privacyPolicy: false
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState),
      form = _useState[0],
      setForm = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var isFormValid = function isFormValid() {
    var fullName = form.fullName,
        userName = form.userName,
        email = form.email,
        password = form.password,
        privacyPolicy = form.privacyPolicy;
    return fullName && userName && email && password && privacyPolicy;
  };

  var handleInput = function handleInput(e, inputName) {
    setForm(_objectSpread(_objectSpread({}, form), {}, (0,C_Users_Administrator_Desktop_anar_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, inputName, e.target.value)));
    if (!!errors[inputName]) setErrors(_objectSpread(_objectSpread({}, errors), {}, (0,C_Users_Administrator_Desktop_anar_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, inputName, null)));
  };

  var handleFullnameErrors = function handleFullnameErrors() {
    var fullName = form.fullName;
    var fullnameValidationErrors = {};

    if (!fullName || fullName === '') {
      fullnameValidationErrors.fullName = 'Full name can not be empty!';
      setErrors(fullnameValidationErrors);
      return;
    } else if (fullName.length < 3) {
      fullnameValidationErrors.fullName = 'Full name is too short!';
      setErrors(fullnameValidationErrors);
      return;
    } else if (fullName.length > 30) {
      fullnameValidationErrors.fullName = 'Full name is too long!';
      setErrors(fullnameValidationErrors);
      return;
    } else if (!/^[a-z]{3,}([',. -][a-z]{3,})*$/.test(fullName)) {
      fullnameValidationErrors.fullName = 'You can only use lowercase letters';
      setErrors(fullnameValidationErrors);
      return;
    } else {
      setErrors({});
      return;
    }
  };

  var handleUsernameErrors = function handleUsernameErrors() {
    var userName = form.userName;
    var usernameValidationErrors = {}; // userName validation

    if (userName.length < 3) {
      usernameValidationErrors.userName = 'Username is too short!';
      setErrors(usernameValidationErrors);
      return;
    } else if (userName.length > 30) {
      usernameValidationErrors.userName = 'Username is too long!';
      setErrors(usernameValidationErrors);
      return;
    } else if (!userName || userName === '') {
      usernameValidationErrors.userName = 'Username can not be empty!';
      setErrors(usernameValidationErrors);
      return;
    }

    if (!/^[a-z]+/.test(userName)) {
      usernameValidationErrors.userName = 'Username must start with lowercase letters';
      setErrors(usernameValidationErrors);
      return;
    } else if (/(\s)+/.test(userName)) {
      usernameValidationErrors.userName = 'Username must not have any space characters';
      setErrors(usernameValidationErrors);
      return;
    } else if (/[A-Z]+/.test(userName)) {
      usernameValidationErrors.userName = 'You can only use lowercase letters and digits';
      setErrors(usernameValidationErrors);
      return;
    } else if (/[!@#$%^&*()\-+={}[\]|\\;:'",<.>\/?]{1,}/.test(userName)) {
      usernameValidationErrors.userName = 'You can only use lowercase letters and digits';
      setErrors(usernameValidationErrors);
      return;
    } else {
      setErrors({});
    }

    _Axios_AxiosConfig__WEBPACK_IMPORTED_MODULE_4__.default.post('/user/existencecheck', {
      "user": {
        "username": userName
      },
      "findOption": 0
    }).then(function (res) {
      if (res.data.status) {
        usernameValidationErrors.userName = 'This username has already been taken. Please pick another username';
        setErrors(usernameValidationErrors);
        return;
      } else {
        setErrors({});
      }
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var handleEmailErrors = function handleEmailErrors() {
    var email = form.email;
    var emailValidationErrors = {};

    if (!email || email === '') {
      emailValidationErrors.email = 'Email can not be empty!';
      setErrors(emailValidationErrors);
      return;
    } else if (email.length < 2) {
      emailValidationErrors.email = 'Email is too short!';
      setErrors(emailValidationErrors);
      return;
    } else if (email.length > 2) {
      if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)) {
        emailValidationErrors.email = 'Email is not valid';
        setErrors(emailValidationErrors);
        return;
      }

      _Axios_AxiosConfig__WEBPACK_IMPORTED_MODULE_4__.default.post('/user/existencecheck', {
        "user": {
          "email": email
        },
        "findOption": 1
      }).then(function (res) {
        if (res.data.status) {
          emailValidationErrors.email = 'This email has already been taken. Please pick another email';
          setErrors(emailValidationErrors);
          return;
        } else {
          setErrors({});
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  var handlePasswordErrors = function handlePasswordErrors() {
    var password = form.password;
    var passwordValidationErrors = {};

    if (!password || password === '') {
      passwordValidationErrors.password = 'Password can not be empty!';
      setErrors(passwordValidationErrors);
      return;
    } else if (password.length < 6) {
      passwordValidationErrors.password = 'Password must be at least 6 character';
      setErrors(passwordValidationErrors);
      return;
    } else if (password.length > 30) {
      passwordValidationErrors.password = 'Password is too long!';
      setErrors(passwordValidationErrors);
      return;
    } else {
      setErrors({});
    }
  };

  var handleCheckBox = function handleCheckBox() {
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      privacyPolicy: !form.privacyPolicy
    }));
  };

  var findFormErrors = function findFormErrors() {
    var fullName = form.fullName,
        userName = form.userName,
        email = form.email,
        password = form.password;
    var newErrors = {}; // fullName validation

    if (!fullName || fullName === '') {
      newErrors.fullName = 'Full name can not be empty!';
      setErrors(newErrors); //return newErrors;
    } else if (fullName.length < 3) {
      newErrors.fullName = 'Full name is too short!';
      setErrors(newErrors); //return newErrors;
    } else if (fullName.length > 30) {
      newErrors.fullName = 'Full name is too long!';
      setErrors(newErrors); //return newErrors;
    } else if (!/^[a-z]{3,}([',. -][a-z]{3,})*$/.test(fullName)) {
      newErrors.fullName = 'You can only use lowercase letters';
      setErrors(newErrors); //return newErrors;
    } // userName validation


    if (userName.length < 3) {
      newErrors.userName = 'Username is too short!';
      setErrors(newErrors); //return newErrors;
    } else if (userName.length > 30) {
      newErrors.userName = 'Username is too long!';
      setErrors(newErrors); //return newErrors;
    } else if (!userName || userName === '') {
      newErrors.userName = 'Username can not be empty!';
      setErrors(newErrors); //return newErrors;
    }

    if (!/^[a-z]+/.test(userName)) {
      newErrors.userName = 'Username must start with lowercase letters';
      setErrors(newErrors); //return newErrors;
    } else if (/(\s)+/.test(userName)) {
      newErrors.userName = 'Username must not have any space characters';
      setErrors(newErrors); //return newErrors;
    } else if (/[A-Z]+/.test(userName)) {
      newErrors.userName = 'You can only use lowercase letters and digits';
      setErrors(newErrors); //return newErrors;
    } else if (/[!@#$%^&*()\-+={}[\]|\\;:'",<.>\/?]{1,}/.test(userName)) {
      newErrors.userName = 'You can only use lowercase letters and digits';
      setErrors(newErrors); //return newErrors;
    } // axiosRequest.post('/user/existencecheck', {
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
      setErrors(newErrors); //return newErrors;
    } else if (email.length < 2) {
      newErrors.email = 'Email is too short!';
      setErrors(newErrors); //return newErrors;
    } else if (email.length > 2) {
      if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)) {
        newErrors.email = 'Email is not valid';
        setErrors(newErrors); //return newErrors;
      } // axiosRequest.post('/user/existencecheck', {
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

    } //password validation


    if (!password || password === '') {
      newErrors.password = 'Password can not be empty!';
      setErrors(newErrors); //return newErrors;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 character';
      setErrors(newErrors); //return newErrors;
    } else if (password.length > 30) {
      newErrors.password = 'Password is too long!';
      setErrors(newErrors); //return newErrors;
    }

    return newErrors;
  };

  var findUsernameErrors = function findUsernameErrors() {
    var userName = form.userName;
    _Axios_AxiosConfig__WEBPACK_IMPORTED_MODULE_4__.default.post('/user/existencecheck', {
      "user": {
        "username": userName
      },
      "findOption": 0
    }).then(function (res) {
      if (res.data.status) {
        setErrors(function (prevstate) {
          return _objectSpread(_objectSpread({}, prevstate), {}, {
            userName: 'This username has already been taken. Please pick another username'
          });
        }); //return existenceCheckErrors
      }
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // get our new errors

    findFormErrors();
    findUsernameErrors(); // Conditional logic:

    if (Object.keys(errors).length > 0) {
      console.log(errors);
    } else {
      console.log('ok');
    }
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Header, {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modalHeader), " position-relative"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return props.modalAction();
    },
    type: "button",
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close), " position-absolute bg-white border border-white p-0"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    src: "/svg/close.svg",
    height: 30,
    width: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modalTitle), " font-weight-normal"),
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 9
    }
  }, "Sign Up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
    className: "mx-4 px-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "social-login d-flex my-4 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 9
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://google.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "border mr-3 flex-grow-1",
    variant: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/svg/google.svg",
    className: "mr-1",
    height: 24,
    width: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 15
    }
  }), "Sign up with Google")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://facebook.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/svg/facebook.svg",
    height: 24,
    width: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 36
    }
  })))), __jsx("hr", {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divider), " divider my-4"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "social-login d-flex mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {
    className: "w-100",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    noValidate: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
    onBlur: function onBlur() {
      return handleFullnameErrors();
    },
    onChange: function onChange(e) {
      return handleInput(e, 'fullName');
    },
    placeholder: "Full Name",
    isInvalid: !!errors.fullName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    style: {
      left: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 17
    }
  }, errors.fullName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
    onBlur: function onBlur() {
      return handleUsernameErrors();
    },
    onChange: function onChange(e) {
      return handleInput(e, 'userName');
    },
    placeholder: "User name",
    isInvalid: !!errors.userName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    style: {
      left: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 17
    }
  }, errors.userName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    className: "mb-4 position-relative",
    controlId: "formGroupEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
    onBlur: function onBlur() {
      return handleEmailErrors();
    },
    onChange: function onChange(e) {
      return handleInput(e, 'email');
    },
    type: "email",
    placeholder: "Enter email",
    isInvalid: !!errors.email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 15
    }
  }, errors.email)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    controlId: "formGroupPassword",
    className: "mb-4 position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
    onBlur: function onBlur() {
      return handlePasswordErrors();
    },
    onChange: function onChange(e) {
      return handleInput(e, 'password');
    },
    type: "password",
    placeholder: "Password",
    isInvalid: !!errors.password,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 15
    }
  }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox mr-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 15
    }
  }, __jsx("input", {
    onChange: function onChange() {
      return handleCheckBox('privacyPolicy');
    },
    type: "checkbox",
    className: "custom-control-input",
    id: "customControlAutosizing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "customControlAutosizing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 17
    }
  }, "Creating an account means you\u2019re okay with our Terms of Service, and Privacy Policy."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    type: "submit",
    size: "md",
    block: true,
    variant: "danger",
    disabled: !isFormValid(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 15
    }
  }, "Create Account"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
    className: "d-flex justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 7
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return props.signInAction();
    },
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 9
    }
  }, "Already a member? ", __jsx("span", {
    className: "text-primary cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 86
    }
  }, "Sign In"))));
}

_s(SignUp, "0SoFPans18hS3Q3a54N4Z2h8j9E=");

_c = SignUp;

var _c;

$RefreshReg$(_c, "SignUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW5Db21wb25lbnRzL3NpZ25VcC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZ1bGxOYW1lIiwidXNlck5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJpdmFjeVBvbGljeSIsInVzZVN0YXRlIiwiZm9ybSIsInNldEZvcm0iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZUlucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRnVsbG5hbWVFcnJvcnMiLCJmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMiLCJsZW5ndGgiLCJ0ZXN0IiwiaGFuZGxlVXNlcm5hbWVFcnJvcnMiLCJ1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMiLCJheGlvc1JlcXVlc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFbWFpbEVycm9ycyIsImVtYWlsVmFsaWRhdGlvbkVycm9ycyIsIm1hdGNoIiwiaGFuZGxlUGFzc3dvcmRFcnJvcnMiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMiLCJoYW5kbGVDaGVja0JveCIsImZpbmRGb3JtRXJyb3JzIiwibmV3RXJyb3JzIiwiZmluZFVzZXJuYW1lRXJyb3JzIiwicHJldnN0YXRlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJPYmplY3QiLCJrZXlzIiwic3R5bGUiLCJtb2RhbEFjdGlvbiIsImxlZnQiLCJzaWduSW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUVwQyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFlB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QUE2RTtBQUFNLGFBQVMsRUFBQyw2QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE3RSxDQURGLENBL0VGLENBREY7QUFxRkQ7O0dBbGN1QmxELE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMmE5OGVmNWVmMjA4NWM1ZDMzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgRm9ybSwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi8uLi8uLi9zdHlsZXMvbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zUmVxdWVzdCBmcm9tICcuLy4uLy4uL0F4aW9zL0F4aW9zQ29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcChwcm9wcykge1xyXG5cclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBmdWxsTmFtZTogZmFsc2UsXHJcbiAgICB1c2VyTmFtZTogZmFsc2UsXHJcbiAgICBlbWFpbDogZmFsc2UsXHJcbiAgICBwYXNzd29yZDogZmFsc2UsXHJcbiAgICBwcml2YWN5UG9saWN5OiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBsZXQgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGZ1bGxOYW1lLCB1c2VyTmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwcml2YWN5UG9saWN5IH0gPSBmb3JtXHJcbiAgICByZXR1cm4gZnVsbE5hbWUgJiYgdXNlck5hbWUgJiYgZW1haWwgJiYgcGFzc3dvcmQgJiYgcHJpdmFjeVBvbGljeVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUlucHV0ID0gKGUsIGlucHV0TmFtZSkgPT4ge1xyXG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIFtpbnB1dE5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgaWYgKCEhZXJyb3JzW2lucHV0TmFtZV0pIHNldEVycm9ycyh7XHJcbiAgICAgIC4uLmVycm9ycyxcclxuICAgICAgW2lucHV0TmFtZV06IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlRnVsbG5hbWVFcnJvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGZ1bGxOYW1lIH0gPSBmb3JtXHJcbiAgICBjb25zdCBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMgPSB7fVxyXG4gICAgaWYgKCFmdWxsTmFtZSB8fCBmdWxsTmFtZSA9PT0gJycpIHtcclxuICAgICAgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmdWxsTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmdWxsTmFtZS5sZW5ndGggPiAzMCkge1xyXG4gICAgICBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghL15bYS16XXszLH0oWycsLiAtXVthLXpdezMsfSkqJC8udGVzdChmdWxsTmFtZSkpIHtcclxuICAgICAgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzLmZ1bGxOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZVVzZXJuYW1lRXJyb3JzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyTmFtZSB9ID0gZm9ybTtcclxuICAgIGNvbnN0IHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyA9IHt9O1xyXG4gICAgLy8gdXNlck5hbWUgdmFsaWRhdGlvblxyXG4gICAgaWYgKHVzZXJOYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlck5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghdXNlck5hbWUgfHwgdXNlck5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIS9eW2Etel0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBzdGFydCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC8oXFxzKSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBtdXN0IG5vdCBoYXZlIGFueSBzcGFjZSBjaGFyYWN0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bQS1aXSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL1shQCMkJV4mKigpXFwtKz17fVtcXF18XFxcXDs6J1wiLDwuPlxcLz9dezEsfS8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMgYW5kIGRpZ2l0cyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgIH1cclxuICAgIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgICAgXCJ1c2VyXCI6IHtcclxuICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXJOYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBcImZpbmRPcHRpb25cIjogMFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdUaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgdXNlcm5hbWUnXHJcbiAgICAgICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVFbWFpbEVycm9ycyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSBmb3JtO1xyXG4gICAgY29uc3QgZW1haWxWYWxpZGF0aW9uRXJyb3JzID0ge307XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCBlbWFpbCA9PT0gJycpIHtcclxuICAgICAgZW1haWxWYWxpZGF0aW9uRXJyb3JzLmVtYWlsID0gJ0VtYWlsIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKGVtYWlsVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChlbWFpbC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIGVtYWlsVmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKGVtYWlsVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChlbWFpbC5sZW5ndGggPiAyKSB7XHJcbiAgICAgIGlmICghZW1haWwubWF0Y2goL1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17MiwxNX0vZykpIHtcclxuICAgICAgICBlbWFpbFZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgbm90IHZhbGlkJztcclxuICAgICAgICBzZXRFcnJvcnMoZW1haWxWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgICAgIFwidXNlclwiOiB7XHJcbiAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmaW5kT3B0aW9uXCI6IDFcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGVtYWlsVmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9ICdUaGlzIGVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgZW1haWwnO1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoZW1haWxWYWxpZGF0aW9uRXJyb3JzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoe30pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVQYXNzd29yZEVycm9ycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IGZvcm07XHJcbiAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMgPSB7fTtcclxuXHJcbiAgICBpZiAoIXBhc3N3b3JkIHx8IHBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICBwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMocGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgcGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXInO1xyXG4gICAgICBzZXRFcnJvcnMocGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoID4gMzApIHtcclxuICAgICAgcGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVDaGVja0JveCA9ICgpID0+IHtcclxuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBwcml2YWN5UG9saWN5OiAhZm9ybS5wcml2YWN5UG9saWN5IH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5kRm9ybUVycm9ycyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGZ1bGxOYW1lLCB1c2VyTmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSBmb3JtXHJcbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7fVxyXG5cclxuICAgIC8vIGZ1bGxOYW1lIHZhbGlkYXRpb25cclxuICAgIGlmICghZnVsbE5hbWUgfHwgZnVsbE5hbWUgPT09ICcnKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICBuZXdFcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIS9eW2Etel17Myx9KFsnLC4gLV1bYS16XXszLH0pKiQvLnRlc3QoZnVsbE5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5mdWxsTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2VyTmFtZSB2YWxpZGF0aW9uXHJcbiAgICBpZiAodXNlck5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VyTmFtZS5sZW5ndGggPiAzMCkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCF1c2VyTmFtZSB8fCB1c2VyTmFtZSA9PT0gJycpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGlmICghL15bYS16XSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBtdXN0IHN0YXJ0IHdpdGggbG93ZXJjYXNlIGxldHRlcnMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoLyhcXHMpKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIG11c3Qgbm90IGhhdmUgYW55IHNwYWNlIGNoYXJhY3RlcnMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL1tBLVpdKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMgYW5kIGRpZ2l0cyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvWyFAIyQlXiYqKClcXC0rPXt9W1xcXXxcXFxcOzonXCIsPC4+XFwvP117MSx9Ly50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIC8vIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgIC8vICAgXCJ1c2VyXCI6IHtcclxuICAgIC8vICAgICBcInVzZXJuYW1lXCI6IHVzZXJOYW1lLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBcImZpbmRPcHRpb25cIjogMFxyXG4gICAgLy8gfSlcclxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgIC8vICAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdUaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgdXNlcm5hbWUnXHJcbiAgICAvLyAgICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgIC8vICAgICAgIHJldHVybiBuZXdFcnJvcnM7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyAgIH0pXHJcblxyXG4gICAgLy9lbWFpbCB2YWxpZGF0aW9uXHJcbiAgICBpZiAoIWVtYWlsIHx8IGVtYWlsID09PSAnJykge1xyXG4gICAgICBuZXdFcnJvcnMuZW1haWwgPSAnRW1haWwgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGVtYWlsLmxlbmd0aCA8IDIpIHtcclxuICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGVtYWlsLmxlbmd0aCA+IDIpIHtcclxuICAgICAgaWYgKCFlbWFpbC5tYXRjaCgvW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDE1fS9nKSkge1xyXG4gICAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyBub3QgdmFsaWQnO1xyXG4gICAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgICAgfVxyXG4gICAgICAvLyBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgIC8vICAgXCJ1c2VyXCI6IHtcclxuICAgICAgLy8gICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBcImZpbmRPcHRpb25cIjogMVxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgLy8gICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ1RoaXMgZW1haWwgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciBlbWFpbCc7XHJcbiAgICAgIC8vICAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpXHJcbiAgICAgIC8vICAgICAgIHJldHVybjtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9wYXNzd29yZCB2YWxpZGF0aW9uXHJcbiAgICBpZiAoIXBhc3N3b3JkIHx8IHBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICBuZXdFcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgbmV3RXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXInO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoID4gMzApIHtcclxuICAgICAgbmV3RXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3RXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmluZFVzZXJuYW1lRXJyb3JzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgdXNlck5hbWUgfSA9IGZvcm1cclxuXHJcblxyXG4gICAgYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgICBcInVzZXJcIjoge1xyXG4gICAgICAgIFwidXNlcm5hbWVcIjogdXNlck5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZmluZE9wdGlvblwiOiAwXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHByZXZzdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2c3RhdGUsIHVzZXJOYW1lOiAnVGhpcyB1c2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIHVzZXJuYW1lJ1xyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgLy9yZXR1cm4gZXhpc3RlbmNlQ2hlY2tFcnJvcnNcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgLy8gZ2V0IG91ciBuZXcgZXJyb3JzXHJcbiAgICBmaW5kRm9ybUVycm9ycygpO1xyXG4gICAgZmluZFVzZXJuYW1lRXJyb3JzKCk7XHJcbiAgICAvLyBDb25kaXRpb25hbCBsb2dpYzpcclxuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnb2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwuSGVhZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUubW9kYWxIZWFkZXJ9IHBvc2l0aW9uLXJlbGF0aXZlYH0+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm1vZGFsQWN0aW9uKCl9XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUuY2xvc2V9IHBvc2l0aW9uLWFic29sdXRlIGJnLXdoaXRlIGJvcmRlciBib3JkZXItd2hpdGUgcC0wYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N2Zy9jbG9zZS5zdmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxNb2RhbC5UaXRsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5tb2RhbFRpdGxlfSBmb250LXdlaWdodC1ub3JtYWxgfVxyXG4gICAgICAgICAgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXHJcbiAgICAgICAgPlNpZ24gVXA8L01vZGFsLlRpdGxlPlxyXG5cclxuICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcblxyXG4gICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJteC00IHB4LTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpbiBkLWZsZXggbXktNCBwYi0yXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgbXItMyBmbGV4LWdyb3ctMVwiIHZhcmlhbnQ9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9nb29nbGUuc3ZnXCIgY2xhc3NOYW1lPVwibXItMVwiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5TaWduIHVwIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9mYWNlYm9vay5jb21cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiPjxpbWcgc3JjPVwiL3N2Zy9mYWNlYm9vay5zdmdcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9e2Ake3N0eWxlLmRpdmlkZXJ9IGRpdmlkZXIgbXktNGB9PjwvaHI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luIGQtZmxleCBtdC00XCI+XHJcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJ3LTEwMFwiIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkJsdXI9eygpID0+IGhhbmRsZUZ1bGxuYW1lRXJyb3JzKCl9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXQoZSwgJ2Z1bGxOYW1lJyl9IHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy5mdWxsTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT0naW52YWxpZCcgdG9vbHRpcCBzdHlsZT17eyBsZWZ0OiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkJsdXI9eygpID0+IGhhbmRsZVVzZXJuYW1lRXJyb3JzKCl9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXQoZSwgJ3VzZXJOYW1lJyl9IHBsYWNlaG9sZGVyPVwiVXNlciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy51c2VyTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT0naW52YWxpZCcgdG9vbHRpcCBzdHlsZT17eyBsZWZ0OiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTQgcG9zaXRpb24tcmVsYXRpdmVcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBFbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25CbHVyPXsoKSA9PiBoYW5kbGVFbWFpbEVycm9ycygpfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KGUsICdlbWFpbCcpfSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMuZW1haWx9IC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPSdpbnZhbGlkJyB0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtR3JvdXBQYXNzd29yZFwiIGNsYXNzTmFtZT1cIm1iLTQgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQmx1cj17KCkgPT4gaGFuZGxlUGFzc3dvcmRFcnJvcnMoKX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLCAncGFzc3dvcmQnKX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLnBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT0naW52YWxpZCcgdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtci1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrQm94KCdwcml2YWN5UG9saWN5Jyl9IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJjdXN0b21Db250cm9sQXV0b3NpemluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiY3VzdG9tQ29udHJvbEF1dG9zaXppbmdcIj5DcmVhdGluZyBhbiBhY2NvdW50IG1lYW5zIHlvdeKAmXJlIG9rYXkgd2l0aCBvdXIgVGVybXMgb2YgU2VydmljZSwgYW5kIFByaXZhY3kgUG9saWN5LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm15LTRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwibWRcIiBibG9jayB2YXJpYW50PVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNGb3JtVmFsaWQoKX1cclxuICAgICAgICAgICAgICA+Q3JlYXRlIEFjY291bnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuXHJcbiAgICAgIDxNb2RhbC5Gb290ZXIgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLnNpZ25JbkFjdGlvbigpfSBjbGFzc05hbWU9XCJweS0yXCI+QWxyZWFkeSBhIG1lbWJlcj8gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCI+U2lnbiBJbjwvc3Bhbj48L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==