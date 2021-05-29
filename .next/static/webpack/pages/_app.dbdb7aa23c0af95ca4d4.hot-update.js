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
        setErrors(existenceCheckErrors);
        return existenceCheckErrors;
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
      lineNumber: 365,
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
      lineNumber: 367,
      columnNumber: 9
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    src: "/svg/close.svg",
    height: 30,
    width: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modalTitle), " font-weight-normal"),
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 9
    }
  }, "Sign Up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
    className: "mx-4 px-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "social-login d-flex my-4 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 9
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://google.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "border mr-3 flex-grow-1",
    variant: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
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
      lineNumber: 386,
      columnNumber: 15
    }
  }), "Sign up with Google")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://facebook.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/svg/facebook.svg",
    height: 24,
    width: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 36
    }
  })))), __jsx("hr", {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divider), " divider my-4"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "social-login d-flex mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
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
      lineNumber: 397,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
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
      lineNumber: 400,
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
      lineNumber: 402,
      columnNumber: 17
    }
  }, errors.fullName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
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
      lineNumber: 407,
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
      lineNumber: 409,
      columnNumber: 17
    }
  }, errors.userName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    className: "mb-4 position-relative",
    controlId: "formGroupEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
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
      lineNumber: 415,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 15
    }
  }, errors.email)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    controlId: "formGroupPassword",
    className: "mb-4 position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
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
      lineNumber: 422,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 15
    }
  }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox mr-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
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
      lineNumber: 430,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "customControlAutosizing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 17
    }
  }, "Creating an account means you\u2019re okay with our Terms of Service, and Privacy Policy."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
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
      lineNumber: 435,
      columnNumber: 15
    }
  }, "Create Account"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
    className: "d-flex justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
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
      lineNumber: 444,
      columnNumber: 9
    }
  }, "Already a member? ", __jsx("span", {
    className: "text-primary cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW5Db21wb25lbnRzL3NpZ25VcC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZ1bGxOYW1lIiwidXNlck5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJpdmFjeVBvbGljeSIsInVzZVN0YXRlIiwiZm9ybSIsInNldEZvcm0iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZUlucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRnVsbG5hbWVFcnJvcnMiLCJmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMiLCJsZW5ndGgiLCJ0ZXN0IiwiaGFuZGxlVXNlcm5hbWVFcnJvcnMiLCJ1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMiLCJheGlvc1JlcXVlc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFbWFpbEVycm9ycyIsImVtYWlsVmFsaWRhdGlvbkVycm9ycyIsIm1hdGNoIiwiaGFuZGxlUGFzc3dvcmRFcnJvcnMiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMiLCJoYW5kbGVDaGVja0JveCIsImZpbmRGb3JtRXJyb3JzIiwibmV3RXJyb3JzIiwiZmluZFVzZXJuYW1lRXJyb3JzIiwiZXhpc3RlbmNlQ2hlY2tFcnJvcnMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIk9iamVjdCIsImtleXMiLCJzdHlsZSIsIm1vZGFsQWN0aW9uIiwibGVmdCIsInNpZ25JbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBRXBDLE1BQU1DLFlBQVksR0FB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QUFBLGVBQTdFLENBREYsQ0EvRUYsQ0FERjtBQXFGRDs7R0F4YnVCbEQsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRiZGI3YWEyM2MwYWY5NWNhNGQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLy4uLy4uL3N0eWxlcy9tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3NSZXF1ZXN0IGZyb20gJy4vLi4vLi4vQXhpb3MvQXhpb3NDb25maWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKHByb3BzKSB7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGZ1bGxOYW1lOiBmYWxzZSxcclxuICAgIHVzZXJOYW1lOiBmYWxzZSxcclxuICAgIGVtYWlsOiBmYWxzZSxcclxuICAgIHBhc3N3b3JkOiBmYWxzZSxcclxuICAgIHByaXZhY3lQb2xpY3k6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGxldCBpc0Zvcm1WYWxpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZnVsbE5hbWUsIHVzZXJOYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHByaXZhY3lQb2xpY3kgfSA9IGZvcm1cclxuICAgIHJldHVybiBmdWxsTmFtZSAmJiB1c2VyTmFtZSAmJiBlbWFpbCAmJiBwYXNzd29yZCAmJiBwcml2YWN5UG9saWN5XHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlSW5wdXQgPSAoZSwgaW5wdXROYW1lKSA9PiB7XHJcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgW2lucHV0TmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICBpZiAoISFlcnJvcnNbaW5wdXROYW1lXSkgc2V0RXJyb3JzKHtcclxuICAgICAgLi4uZXJyb3JzLFxyXG4gICAgICBbaW5wdXROYW1lXTogbnVsbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVGdWxsbmFtZUVycm9ycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZnVsbE5hbWUgfSA9IGZvcm1cclxuICAgIGNvbnN0IGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycyA9IHt9XHJcbiAgICBpZiAoIWZ1bGxOYW1lIHx8IGZ1bGxOYW1lID09PSAnJykge1xyXG4gICAgICBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZ1bGxOYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCEvXlthLXpdezMsfShbJywuIC1dW2Etel17Myx9KSokLy50ZXN0KGZ1bGxOYW1lKSkge1xyXG4gICAgICBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMuZnVsbE5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyc7XHJcbiAgICAgIHNldEVycm9ycyhmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlVXNlcm5hbWVFcnJvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJOYW1lIH0gPSBmb3JtO1xyXG4gICAgY29uc3QgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzID0ge307XHJcbiAgICAvLyB1c2VyTmFtZSB2YWxpZGF0aW9uXHJcbiAgICBpZiAodXNlck5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VyTmFtZS5sZW5ndGggPiAzMCkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCF1c2VyTmFtZSB8fCB1c2VyTmFtZSA9PT0gJycpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghL15bYS16XSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBtdXN0IHN0YXJ0IHdpdGggbG93ZXJjYXNlIGxldHRlcnMnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoLyhcXHMpKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIG11c3Qgbm90IGhhdmUgYW55IHNwYWNlIGNoYXJhY3RlcnMnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL1tBLVpdKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMgYW5kIGRpZ2l0cyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvWyFAIyQlXiYqKClcXC0rPXt9W1xcXXxcXFxcOzonXCIsPC4+XFwvP117MSx9Ly50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgICAgXCJ1c2VyXCI6IHtcclxuICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXJOYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBcImZpbmRPcHRpb25cIjogMFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdUaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgdXNlcm5hbWUnXHJcbiAgICAgICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVFbWFpbEVycm9ycyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSBmb3JtO1xyXG4gICAgY29uc3QgZW1haWxWYWxpZGF0aW9uRXJyb3JzID0ge307XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCBlbWFpbCA9PT0gJycpIHtcclxuICAgICAgZW1haWxWYWxpZGF0aW9uRXJyb3JzLmVtYWlsID0gJ0VtYWlsIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKGVtYWlsVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChlbWFpbC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIGVtYWlsVmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKGVtYWlsVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChlbWFpbC5sZW5ndGggPiAyKSB7XHJcbiAgICAgIGlmICghZW1haWwubWF0Y2goL1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17MiwxNX0vZykpIHtcclxuICAgICAgICBlbWFpbFZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgbm90IHZhbGlkJztcclxuICAgICAgICBzZXRFcnJvcnMoZW1haWxWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgICAgIFwidXNlclwiOiB7XHJcbiAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmaW5kT3B0aW9uXCI6IDFcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGVtYWlsVmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9ICdUaGlzIGVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgZW1haWwnO1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoZW1haWxWYWxpZGF0aW9uRXJyb3JzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoe30pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVQYXNzd29yZEVycm9ycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IGZvcm07XHJcbiAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMgPSB7fTtcclxuXHJcbiAgICBpZiAoIXBhc3N3b3JkIHx8IHBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICBwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMocGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgcGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXInO1xyXG4gICAgICBzZXRFcnJvcnMocGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoID4gMzApIHtcclxuICAgICAgcGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlQ2hlY2tCb3ggPSAoKSA9PiB7XHJcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgcHJpdmFjeVBvbGljeTogIWZvcm0ucHJpdmFjeVBvbGljeSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmluZEZvcm1FcnJvcnMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBmdWxsTmFtZSwgdXNlck5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcHJpdmFjeVBvbGljeSB9ID0gZm9ybVxyXG4gICAgY29uc3QgbmV3RXJyb3JzID0ge31cclxuXHJcbiAgICAvLyBmdWxsTmFtZSB2YWxpZGF0aW9uXHJcbiAgICBpZiAoIWZ1bGxOYW1lIHx8IGZ1bGxOYW1lID09PSAnJykge1xyXG4gICAgICBuZXdFcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZ1bGxOYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCEvXlthLXpdezMsfShbJywuIC1dW2Etel17Myx9KSokLy50ZXN0KGZ1bGxOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMuZnVsbE5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlck5hbWUgdmFsaWRhdGlvblxyXG4gICAgaWYgKHVzZXJOYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlck5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghdXNlck5hbWUgfHwgdXNlck5hbWUgPT09ICcnKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBpZiAoIS9eW2Etel0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBzdGFydCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC8oXFxzKSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBtdXN0IG5vdCBoYXZlIGFueSBzcGFjZSBjaGFyYWN0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bQS1aXSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL1shQCMkJV4mKigpXFwtKz17fVtcXF18XFxcXDs6J1wiLDwuPlxcLz9dezEsfS8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMgYW5kIGRpZ2l0cyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICAvLyBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAvLyAgIFwidXNlclwiOiB7XHJcbiAgICAvLyAgICAgXCJ1c2VybmFtZVwiOiB1c2VyTmFtZSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgXCJmaW5kT3B0aW9uXCI6IDBcclxuICAgIC8vIH0pXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAvLyAgICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVGhpcyB1c2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIHVzZXJuYW1lJ1xyXG4gICAgLy8gICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAvLyAgICAgICByZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICB9KVxyXG5cclxuICAgIC8vZW1haWwgdmFsaWRhdGlvblxyXG4gICAgaWYgKCFlbWFpbCB8fCBlbWFpbCA9PT0gJycpIHtcclxuICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ0VtYWlsIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChlbWFpbC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChlbWFpbC5sZW5ndGggPiAyKSB7XHJcbiAgICAgIGlmICghZW1haWwubWF0Y2goL1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17MiwxNX0vZykpIHtcclxuICAgICAgICBuZXdFcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgbm90IHZhbGlkJztcclxuICAgICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICAgIH1cclxuICAgICAgLy8gYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgICAvLyAgIFwidXNlclwiOiB7XHJcbiAgICAgIC8vICAgICBcImVtYWlsXCI6IGVtYWlsLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgXCJmaW5kT3B0aW9uXCI6IDFcclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIC8vICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgIC8vICAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdUaGlzIGVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgZW1haWwnO1xyXG4gICAgICAvLyAgICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKVxyXG4gICAgICAvLyAgICAgICByZXR1cm47XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgLy8gICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vcGFzc3dvcmQgdmFsaWRhdGlvblxyXG4gICAgaWYgKCFwYXNzd29yZCB8fCBwYXNzd29yZCA9PT0gJycpIHtcclxuICAgICAgbmV3RXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIG5ld0Vycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0Vycm9ycztcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmRVc2VybmFtZUVycm9ycyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJOYW1lIH0gPSBmb3JtXHJcbiAgICBjb25zdCBleGlzdGVuY2VDaGVja0Vycm9ycyA9IHt9XHJcblxyXG4gICAgYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgICBcInVzZXJcIjoge1xyXG4gICAgICAgIFwidXNlcm5hbWVcIjogdXNlck5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZmluZE9wdGlvblwiOiAwXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgZXhpc3RlbmNlQ2hlY2tFcnJvcnMudXNlck5hbWUgPSAnVGhpcyB1c2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIHVzZXJuYW1lJztcclxuICAgICAgICAgIHNldEVycm9ycyhleGlzdGVuY2VDaGVja0Vycm9ycyk7XHJcbiAgICAgICAgICByZXR1cm4gZXhpc3RlbmNlQ2hlY2tFcnJvcnNcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgLy8gZ2V0IG91ciBuZXcgZXJyb3JzXHJcbiAgICBmaW5kRm9ybUVycm9ycygpO1xyXG4gICAgZmluZFVzZXJuYW1lRXJyb3JzKCk7XHJcbiAgICAvLyBDb25kaXRpb25hbCBsb2dpYzpcclxuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnb2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwuSGVhZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUubW9kYWxIZWFkZXJ9IHBvc2l0aW9uLXJlbGF0aXZlYH0+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm1vZGFsQWN0aW9uKCl9XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUuY2xvc2V9IHBvc2l0aW9uLWFic29sdXRlIGJnLXdoaXRlIGJvcmRlciBib3JkZXItd2hpdGUgcC0wYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N2Zy9jbG9zZS5zdmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxNb2RhbC5UaXRsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5tb2RhbFRpdGxlfSBmb250LXdlaWdodC1ub3JtYWxgfVxyXG4gICAgICAgICAgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXHJcbiAgICAgICAgPlNpZ24gVXA8L01vZGFsLlRpdGxlPlxyXG5cclxuICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcblxyXG4gICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJteC00IHB4LTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpbiBkLWZsZXggbXktNCBwYi0yXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgbXItMyBmbGV4LWdyb3ctMVwiIHZhcmlhbnQ9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9nb29nbGUuc3ZnXCIgY2xhc3NOYW1lPVwibXItMVwiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz5TaWduIHVwIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9mYWNlYm9vay5jb21cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiPjxpbWcgc3JjPVwiL3N2Zy9mYWNlYm9vay5zdmdcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9e2Ake3N0eWxlLmRpdmlkZXJ9IGRpdmlkZXIgbXktNGB9PjwvaHI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luIGQtZmxleCBtdC00XCI+XHJcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJ3LTEwMFwiIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkJsdXI9eygpID0+IGhhbmRsZUZ1bGxuYW1lRXJyb3JzKCl9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXQoZSwgJ2Z1bGxOYW1lJyl9IHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy5mdWxsTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT0naW52YWxpZCcgdG9vbHRpcCBzdHlsZT17eyBsZWZ0OiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkJsdXI9eygpID0+IGhhbmRsZVVzZXJuYW1lRXJyb3JzKCl9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXQoZSwgJ3VzZXJOYW1lJyl9IHBsYWNlaG9sZGVyPVwiVXNlciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy51c2VyTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT0naW52YWxpZCcgdG9vbHRpcCBzdHlsZT17eyBsZWZ0OiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTQgcG9zaXRpb24tcmVsYXRpdmVcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBFbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25CbHVyPXsoKSA9PiBoYW5kbGVFbWFpbEVycm9ycygpfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KGUsICdlbWFpbCcpfSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMuZW1haWx9IC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPSdpbnZhbGlkJyB0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtR3JvdXBQYXNzd29yZFwiIGNsYXNzTmFtZT1cIm1iLTQgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQmx1cj17KCkgPT4gaGFuZGxlUGFzc3dvcmRFcnJvcnMoKX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLCAncGFzc3dvcmQnKX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLnBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT0naW52YWxpZCcgdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtci1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrQm94KCdwcml2YWN5UG9saWN5Jyl9IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJjdXN0b21Db250cm9sQXV0b3NpemluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiY3VzdG9tQ29udHJvbEF1dG9zaXppbmdcIj5DcmVhdGluZyBhbiBhY2NvdW50IG1lYW5zIHlvdeKAmXJlIG9rYXkgd2l0aCBvdXIgVGVybXMgb2YgU2VydmljZSwgYW5kIFByaXZhY3kgUG9saWN5LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm15LTRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwibWRcIiBibG9jayB2YXJpYW50PVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNGb3JtVmFsaWQoKX1cclxuICAgICAgICAgICAgICA+Q3JlYXRlIEFjY291bnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuXHJcbiAgICAgIDxNb2RhbC5Gb290ZXIgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLnNpZ25JbkFjdGlvbigpfSBjbGFzc05hbWU9XCJweS0yXCI+QWxyZWFkeSBhIG1lbWJlcj8gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCI+U2lnbiBJbjwvc3Bhbj48L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==