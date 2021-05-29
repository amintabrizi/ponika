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
        password = form.password,
        privacyPolicy = form.privacyPolicy;
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
    var existenceCheckErrors = {};
    _Axios_AxiosConfig__WEBPACK_IMPORTED_MODULE_4__.default.post('/user/existencecheck', {
      "user": {
        "username": userName
      },
      "findOption": 0
    }).then(function (res) {
      if (res.data.status) {
        existenceCheckErrors.userName = 'This username has already been taken. Please pick another username';
        setErrors(function (prevstate) {
          return _objectSpread(_objectSpread({}, prevstate), {}, {
            existenceCheckErrors: existenceCheckErrors
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
      lineNumber: 367,
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
      lineNumber: 369,
      columnNumber: 9
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    src: "/svg/close.svg",
    height: 30,
    width: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modalTitle), " font-weight-normal"),
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, "Sign Up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
    className: "mx-4 px-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "social-login d-flex my-4 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 9
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://google.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "border mr-3 flex-grow-1",
    variant: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
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
      lineNumber: 388,
      columnNumber: 15
    }
  }), "Sign up with Google")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://facebook.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/svg/facebook.svg",
    height: 24,
    width: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 36
    }
  })))), __jsx("hr", {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divider), " divider my-4"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "social-login d-flex mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
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
      lineNumber: 399,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
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
      lineNumber: 402,
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
      lineNumber: 404,
      columnNumber: 17
    }
  }, errors.fullName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
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
      lineNumber: 409,
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
      lineNumber: 411,
      columnNumber: 17
    }
  }, errors.userName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    className: "mb-4 position-relative",
    controlId: "formGroupEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
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
      lineNumber: 417,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 15
    }
  }, errors.email)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    controlId: "formGroupPassword",
    className: "mb-4 position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
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
      lineNumber: 424,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 15
    }
  }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox mr-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
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
      lineNumber: 432,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "customControlAutosizing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 17
    }
  }, "Creating an account means you\u2019re okay with our Terms of Service, and Privacy Policy."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
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
      lineNumber: 437,
      columnNumber: 15
    }
  }, "Create Account"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
    className: "d-flex justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
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
      lineNumber: 446,
      columnNumber: 9
    }
  }, "Already a member? ", __jsx("span", {
    className: "text-primary cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW5Db21wb25lbnRzL3NpZ25VcC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZ1bGxOYW1lIiwidXNlck5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJpdmFjeVBvbGljeSIsInVzZVN0YXRlIiwiZm9ybSIsInNldEZvcm0iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZUlucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRnVsbG5hbWVFcnJvcnMiLCJmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMiLCJsZW5ndGgiLCJ0ZXN0IiwiaGFuZGxlVXNlcm5hbWVFcnJvcnMiLCJ1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMiLCJheGlvc1JlcXVlc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFbWFpbEVycm9ycyIsImVtYWlsVmFsaWRhdGlvbkVycm9ycyIsIm1hdGNoIiwiaGFuZGxlUGFzc3dvcmRFcnJvcnMiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMiLCJoYW5kbGVDaGVja0JveCIsImZpbmRGb3JtRXJyb3JzIiwibmV3RXJyb3JzIiwiZmluZFVzZXJuYW1lRXJyb3JzIiwiZXhpc3RlbmNlQ2hlY2tFcnJvcnMiLCJwcmV2c3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIk9iamVjdCIsImtleXMiLCJzdHlsZSIsIm1vZGFsQWN0aW9uIiwibGVmdCIsInNpZ25JbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBRXBDLE1B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QUFBQSwyQkFBNkU7QUFBTSxhQUFTLEVBQUMsNkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBN0UsQ0FERixDQS9FRixDQURGO0FBcUZEOztHQTFidUJuRCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGJiNjgwMDU4OTEwZWJmMDllZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEZvcm0sIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vLi4vLi4vc3R5bGVzL21vZGFsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvc1JlcXVlc3QgZnJvbSAnLi8uLi8uLi9BeGlvcy9BeGlvc0NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZnVsbE5hbWU6IGZhbHNlLFxyXG4gICAgdXNlck5hbWU6IGZhbHNlLFxyXG4gICAgZW1haWw6IGZhbHNlLFxyXG4gICAgcGFzc3dvcmQ6IGZhbHNlLFxyXG4gICAgcHJpdmFjeVBvbGljeTogZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgbGV0IGlzRm9ybVZhbGlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBmdWxsTmFtZSwgdXNlck5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcHJpdmFjeVBvbGljeSB9ID0gZm9ybVxyXG4gICAgcmV0dXJuIGZ1bGxOYW1lICYmIHVzZXJOYW1lICYmIGVtYWlsICYmIHBhc3N3b3JkICYmIHByaXZhY3lQb2xpY3lcclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVJbnB1dCA9IChlLCBpbnB1dE5hbWUpID0+IHtcclxuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbaW5wdXROYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIGlmICghIWVycm9yc1tpbnB1dE5hbWVdKSBzZXRFcnJvcnMoe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIFtpbnB1dE5hbWVdOiBudWxsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUZ1bGxuYW1lRXJyb3JzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBmdWxsTmFtZSB9ID0gZm9ybVxyXG4gICAgY29uc3QgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzID0ge31cclxuICAgIGlmICghZnVsbE5hbWUgfHwgZnVsbE5hbWUgPT09ICcnKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIS9eW2Etel17Myx9KFsnLC4gLV1bYS16XXszLH0pKiQvLnRlc3QoZnVsbE5hbWUpKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVVc2VybmFtZUVycm9ycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlck5hbWUgfSA9IGZvcm07XHJcbiAgICBjb25zdCB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMgPSB7fTtcclxuICAgIC8vIHVzZXJOYW1lIHZhbGlkYXRpb25cclxuICAgIGlmICh1c2VyTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHVzZXJOYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXVzZXJOYW1lIHx8IHVzZXJOYW1lID09PSAnJykge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvXlthLXpdKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIG11c3Qgc3RhcnQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvKFxccykrLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBub3QgaGF2ZSBhbnkgc3BhY2UgY2hhcmFjdGVycyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvW0EtWl0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bIUAjJCVeJiooKVxcLSs9e31bXFxdfFxcXFw7OidcIiw8Lj5cXC8/XXsxLH0vLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgICBcInVzZXJcIjoge1xyXG4gICAgICAgIFwidXNlcm5hbWVcIjogdXNlck5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZmluZE9wdGlvblwiOiAwXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1RoaXMgdXNlcm5hbWUgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciB1c2VybmFtZSdcclxuICAgICAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMoe30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUVtYWlsRXJyb3JzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IGZvcm07XHJcbiAgICBjb25zdCBlbWFpbFZhbGlkYXRpb25FcnJvcnMgPSB7fTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8IGVtYWlsID09PSAnJykge1xyXG4gICAgICBlbWFpbFZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnRW1haWwgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMoZW1haWxWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGVtYWlsLmxlbmd0aCA8IDIpIHtcclxuICAgICAgZW1haWxWYWxpZGF0aW9uRXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMoZW1haWxWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGVtYWlsLmxlbmd0aCA+IDIpIHtcclxuICAgICAgaWYgKCFlbWFpbC5tYXRjaCgvW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDE1fS9nKSkge1xyXG4gICAgICAgIGVtYWlsVmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyBub3QgdmFsaWQnO1xyXG4gICAgICAgIHNldEVycm9ycyhlbWFpbFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgICAgXCJ1c2VyXCI6IHtcclxuICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZpbmRPcHRpb25cIjogMVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgZW1haWxWYWxpZGF0aW9uRXJyb3JzLmVtYWlsID0gJ1RoaXMgZW1haWwgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciBlbWFpbCc7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyhlbWFpbFZhbGlkYXRpb25FcnJvcnMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZVBhc3N3b3JkRXJyb3JzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gZm9ybTtcclxuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycyA9IHt9O1xyXG5cclxuICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQgPT09ICcnKSB7XHJcbiAgICAgIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNikge1xyXG4gICAgICBwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3Rlcic7XHJcbiAgICAgIHNldEVycm9ycyhwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPiAzMCkge1xyXG4gICAgICBwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVDaGVja0JveCA9ICgpID0+IHtcclxuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBwcml2YWN5UG9saWN5OiAhZm9ybS5wcml2YWN5UG9saWN5IH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5kRm9ybUVycm9ycyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGZ1bGxOYW1lLCB1c2VyTmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwcml2YWN5UG9saWN5IH0gPSBmb3JtXHJcbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7fVxyXG5cclxuICAgIC8vIGZ1bGxOYW1lIHZhbGlkYXRpb25cclxuICAgIGlmICghZnVsbE5hbWUgfHwgZnVsbE5hbWUgPT09ICcnKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICBuZXdFcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIS9eW2Etel17Myx9KFsnLC4gLV1bYS16XXszLH0pKiQvLnRlc3QoZnVsbE5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5mdWxsTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2VyTmFtZSB2YWxpZGF0aW9uXHJcbiAgICBpZiAodXNlck5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VyTmFtZS5sZW5ndGggPiAzMCkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCF1c2VyTmFtZSB8fCB1c2VyTmFtZSA9PT0gJycpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGlmICghL15bYS16XSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBtdXN0IHN0YXJ0IHdpdGggbG93ZXJjYXNlIGxldHRlcnMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoLyhcXHMpKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIG11c3Qgbm90IGhhdmUgYW55IHNwYWNlIGNoYXJhY3RlcnMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL1tBLVpdKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMgYW5kIGRpZ2l0cyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvWyFAIyQlXiYqKClcXC0rPXt9W1xcXXxcXFxcOzonXCIsPC4+XFwvP117MSx9Ly50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIC8vIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgIC8vICAgXCJ1c2VyXCI6IHtcclxuICAgIC8vICAgICBcInVzZXJuYW1lXCI6IHVzZXJOYW1lLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBcImZpbmRPcHRpb25cIjogMFxyXG4gICAgLy8gfSlcclxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgIC8vICAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdUaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgdXNlcm5hbWUnXHJcbiAgICAvLyAgICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgIC8vICAgICAgIHJldHVybiBuZXdFcnJvcnM7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyAgIH0pXHJcblxyXG4gICAgLy9lbWFpbCB2YWxpZGF0aW9uXHJcbiAgICBpZiAoIWVtYWlsIHx8IGVtYWlsID09PSAnJykge1xyXG4gICAgICBuZXdFcnJvcnMuZW1haWwgPSAnRW1haWwgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGVtYWlsLmxlbmd0aCA8IDIpIHtcclxuICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGVtYWlsLmxlbmd0aCA+IDIpIHtcclxuICAgICAgaWYgKCFlbWFpbC5tYXRjaCgvW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDE1fS9nKSkge1xyXG4gICAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyBub3QgdmFsaWQnO1xyXG4gICAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgICAgfVxyXG4gICAgICAvLyBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgIC8vICAgXCJ1c2VyXCI6IHtcclxuICAgICAgLy8gICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBcImZpbmRPcHRpb25cIjogMVxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgLy8gICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ1RoaXMgZW1haWwgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciBlbWFpbCc7XHJcbiAgICAgIC8vICAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpXHJcbiAgICAgIC8vICAgICAgIHJldHVybjtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9wYXNzd29yZCB2YWxpZGF0aW9uXHJcbiAgICBpZiAoIXBhc3N3b3JkIHx8IHBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICBuZXdFcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgbmV3RXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXInO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoID4gMzApIHtcclxuICAgICAgbmV3RXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3RXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmluZFVzZXJuYW1lRXJyb3JzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgdXNlck5hbWUgfSA9IGZvcm1cclxuICAgIGNvbnN0IGV4aXN0ZW5jZUNoZWNrRXJyb3JzID0ge31cclxuXHJcbiAgICBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgIFwidXNlclwiOiB7XHJcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VyTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgXCJmaW5kT3B0aW9uXCI6IDBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICBleGlzdGVuY2VDaGVja0Vycm9ycy51c2VyTmFtZSA9ICdUaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgdXNlcm5hbWUnO1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHByZXZzdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2c3RhdGUsIGV4aXN0ZW5jZUNoZWNrRXJyb3JzXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAvL3JldHVybiBleGlzdGVuY2VDaGVja0Vycm9yc1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyBnZXQgb3VyIG5ldyBlcnJvcnNcclxuICAgIGZpbmRGb3JtRXJyb3JzKCk7XHJcbiAgICBmaW5kVXNlcm5hbWVFcnJvcnMoKTtcclxuICAgIC8vIENvbmRpdGlvbmFsIGxvZ2ljOlxyXG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbC5IZWFkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5tb2RhbEhlYWRlcn0gcG9zaXRpb24tcmVsYXRpdmVgfT5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMubW9kYWxBY3Rpb24oKX1cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5jbG9zZX0gcG9zaXRpb24tYWJzb2x1dGUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci13aGl0ZSBwLTBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3ZnL2Nsb3NlLnN2Z1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPE1vZGFsLlRpdGxlXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm1vZGFsVGl0bGV9IGZvbnQtd2VpZ2h0LW5vcm1hbGB9XHJcbiAgICAgICAgICBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgICA+U2lnbiBVcDwvTW9kYWwuVGl0bGU+XHJcblxyXG4gICAgICA8L01vZGFsLkhlYWRlcj5cclxuXHJcbiAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cIm14LTQgcHgtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luIGQtZmxleCBteS00IHBiLTJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBtci0zIGZsZXgtZ3Jvdy0xXCIgdmFyaWFudD1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2dvb2dsZS5zdmdcIiBjbGFzc05hbWU9XCJtci0xXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlNpZ24gdXAgd2l0aCBHb29nbGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cDovL2ZhY2Vib29rLmNvbVwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJpbmZvXCI+PGltZyBzcmM9XCIvc3ZnL2ZhY2Vib29rLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz48L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT17YCR7c3R5bGUuZGl2aWRlcn0gZGl2aWRlciBteS00YH0+PC9ocj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbG9naW4gZC1mbGV4IG10LTRcIj5cclxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cInctMTAwXCIgb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQmx1cj17KCkgPT4gaGFuZGxlRnVsbG5hbWVFcnJvcnMoKX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLCAnZnVsbE5hbWUnKX0gcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLmZ1bGxOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPSdpbnZhbGlkJyB0b29sdGlwIHN0eWxlPXt7IGxlZnQ6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5mdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQmx1cj17KCkgPT4gaGFuZGxlVXNlcm5hbWVFcnJvcnMoKX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLCAndXNlck5hbWUnKX0gcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLnVzZXJOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPSdpbnZhbGlkJyB0b29sdGlwIHN0eWxlPXt7IGxlZnQ6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItNCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkJsdXI9eygpID0+IGhhbmRsZUVtYWlsRXJyb3JzKCl9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXQoZSwgJ2VtYWlsJyl9IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy5lbWFpbH0gLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9J2ludmFsaWQnIHRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1Hcm91cFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwibWItNCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25CbHVyPXsoKSA9PiBoYW5kbGVQYXNzd29yZEVycm9ycygpfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KGUsICdwYXNzd29yZCcpfSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMucGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPSdpbnZhbGlkJyB0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG1yLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hlY2tCb3goJ3ByaXZhY3lQb2xpY3knKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImN1c3RvbUNvbnRyb2xBdXRvc2l6aW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJjdXN0b21Db250cm9sQXV0b3NpemluZ1wiPkNyZWF0aW5nIGFuIGFjY291bnQgbWVhbnMgeW914oCZcmUgb2theSB3aXRoIG91ciBUZXJtcyBvZiBTZXJ2aWNlLCBhbmQgUHJpdmFjeSBQb2xpY3kuPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHNpemU9XCJtZFwiIGJsb2NrIHZhcmlhbnQ9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0Zvcm1WYWxpZCgpfVxyXG4gICAgICAgICAgICAgID5DcmVhdGUgQWNjb3VudDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG5cclxuICAgICAgPE1vZGFsLkZvb3RlciBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMuc2lnbkluQWN0aW9uKCl9IGNsYXNzTmFtZT1cInB5LTJcIj5BbHJlYWR5IGEgbWVtYmVyPyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIj5TaWduIEluPC9zcGFuPjwvZGl2PlxyXG4gICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9