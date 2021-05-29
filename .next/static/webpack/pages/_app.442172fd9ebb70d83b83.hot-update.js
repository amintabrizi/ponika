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
      lineNumber: 372,
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
      lineNumber: 374,
      columnNumber: 9
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    src: "/svg/close.svg",
    height: 30,
    width: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modalTitle), " font-weight-normal"),
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }
  }, "Sign Up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
    className: "mx-4 px-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "social-login d-flex my-4 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 9
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://google.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "border mr-3 flex-grow-1",
    variant: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
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
      lineNumber: 393,
      columnNumber: 15
    }
  }), "Sign up with Google")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://facebook.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/svg/facebook.svg",
    height: 24,
    width: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 36
    }
  })))), __jsx("hr", {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divider), " divider my-4"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "social-login d-flex mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
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
      lineNumber: 404,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
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
  }, errors.fullName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
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
      lineNumber: 414,
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
      lineNumber: 416,
      columnNumber: 17
    }
  }, errors.userName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    className: "mb-4 position-relative",
    controlId: "formGroupEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
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
  }, errors.email)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    controlId: "formGroupPassword",
    className: "mb-4 position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
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
      lineNumber: 429,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 15
    }
  }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox mr-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
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
      lineNumber: 437,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "customControlAutosizing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 17
    }
  }, "Creating an account means you\u2019re okay with our Terms of Service, and Privacy Policy."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
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
      lineNumber: 442,
      columnNumber: 15
    }
  }, "Create Account"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
    className: "d-flex justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
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
      lineNumber: 451,
      columnNumber: 9
    }
  }, "Already a member? ", __jsx("span", {
    className: "text-primary cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW5Db21wb25lbnRzL3NpZ25VcC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZ1bGxOYW1lIiwidXNlck5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJpdmFjeVBvbGljeSIsInVzZVN0YXRlIiwiZm9ybSIsInNldEZvcm0iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZUlucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRnVsbG5hbWVFcnJvcnMiLCJmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMiLCJsZW5ndGgiLCJ0ZXN0IiwiaGFuZGxlVXNlcm5hbWVFcnJvcnMiLCJ1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMiLCJheGlvc1JlcXVlc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFbWFpbEVycm9ycyIsImVtYWlsVmFsaWRhdGlvbkVycm9ycyIsIm1hdGNoIiwiaGFuZGxlUGFzc3dvcmRFcnJvcnMiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMiLCJoYW5kbGVDaGVja0JveCIsImZpbmRGb3JtRXJyb3JzIiwibmV3RXJyb3JzIiwiZmluZFVzZXJuYW1lRXJyb3JzIiwicHJldnN0YXRlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJPYmplY3QiLCJrZXlzIiwic3R5bGUiLCJtb2RhbEFjdGlvbiIsImxlZnQiLCJzaWduSW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUVwQyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFlB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBN0UsQ0FERixDQS9FRixDQURGO0FBcUZEOztHQS9idUJsRCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDQyMTcyZmQ5ZWJiNzBkODNiODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEZvcm0sIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vLi4vLi4vc3R5bGVzL21vZGFsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvc1JlcXVlc3QgZnJvbSAnLi8uLi8uLi9BeGlvcy9BeGlvc0NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZnVsbE5hbWU6IGZhbHNlLFxyXG4gICAgdXNlck5hbWU6IGZhbHNlLFxyXG4gICAgZW1haWw6IGZhbHNlLFxyXG4gICAgcGFzc3dvcmQ6IGZhbHNlLFxyXG4gICAgcHJpdmFjeVBvbGljeTogZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgbGV0IGlzRm9ybVZhbGlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBmdWxsTmFtZSwgdXNlck5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcHJpdmFjeVBvbGljeSB9ID0gZm9ybVxyXG4gICAgcmV0dXJuIGZ1bGxOYW1lICYmIHVzZXJOYW1lICYmIGVtYWlsICYmIHBhc3N3b3JkICYmIHByaXZhY3lQb2xpY3lcclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVJbnB1dCA9IChlLCBpbnB1dE5hbWUpID0+IHtcclxuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbaW5wdXROYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIGlmICghIWVycm9yc1tpbnB1dE5hbWVdKSBzZXRFcnJvcnMoe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIFtpbnB1dE5hbWVdOiBudWxsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUZ1bGxuYW1lRXJyb3JzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBmdWxsTmFtZSB9ID0gZm9ybVxyXG4gICAgY29uc3QgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzID0ge31cclxuICAgIGlmICghZnVsbE5hbWUgfHwgZnVsbE5hbWUgPT09ICcnKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIS9eW2Etel17Myx9KFsnLC4gLV1bYS16XXszLH0pKiQvLnRlc3QoZnVsbE5hbWUpKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVVc2VybmFtZUVycm9ycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlck5hbWUgfSA9IGZvcm07XHJcbiAgICBjb25zdCB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMgPSB7fTtcclxuICAgIC8vIHVzZXJOYW1lIHZhbGlkYXRpb25cclxuICAgIGlmICh1c2VyTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHVzZXJOYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXVzZXJOYW1lIHx8IHVzZXJOYW1lID09PSAnJykge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvXlthLXpdKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIG11c3Qgc3RhcnQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvKFxccykrLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBub3QgaGF2ZSBhbnkgc3BhY2UgY2hhcmFjdGVycyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvW0EtWl0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bIUAjJCVeJiooKVxcLSs9e31bXFxdfFxcXFw7OidcIiw8Lj5cXC8/XXsxLH0vLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgICBcInVzZXJcIjoge1xyXG4gICAgICAgIFwidXNlcm5hbWVcIjogdXNlck5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZmluZE9wdGlvblwiOiAwXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1RoaXMgdXNlcm5hbWUgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciB1c2VybmFtZSdcclxuICAgICAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMoe30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUVtYWlsRXJyb3JzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IGZvcm07XHJcbiAgICBjb25zdCBlbWFpbFZhbGlkYXRpb25FcnJvcnMgPSB7fTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8IGVtYWlsID09PSAnJykge1xyXG4gICAgICBlbWFpbFZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnRW1haWwgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMoZW1haWxWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGVtYWlsLmxlbmd0aCA8IDIpIHtcclxuICAgICAgZW1haWxWYWxpZGF0aW9uRXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMoZW1haWxWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGVtYWlsLmxlbmd0aCA+IDIpIHtcclxuICAgICAgaWYgKCFlbWFpbC5tYXRjaCgvW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDE1fS9nKSkge1xyXG4gICAgICAgIGVtYWlsVmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyBub3QgdmFsaWQnO1xyXG4gICAgICAgIHNldEVycm9ycyhlbWFpbFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgICAgXCJ1c2VyXCI6IHtcclxuICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZpbmRPcHRpb25cIjogMVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgZW1haWxWYWxpZGF0aW9uRXJyb3JzLmVtYWlsID0gJ1RoaXMgZW1haWwgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciBlbWFpbCc7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyhlbWFpbFZhbGlkYXRpb25FcnJvcnMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZVBhc3N3b3JkRXJyb3JzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gZm9ybTtcclxuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycyA9IHt9O1xyXG5cclxuICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQgPT09ICcnKSB7XHJcbiAgICAgIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNikge1xyXG4gICAgICBwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3Rlcic7XHJcbiAgICAgIHNldEVycm9ycyhwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPiAzMCkge1xyXG4gICAgICBwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcnMoe30pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUNoZWNrQm94ID0gKCkgPT4ge1xyXG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIHByaXZhY3lQb2xpY3k6ICFmb3JtLnByaXZhY3lQb2xpY3kgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmRGb3JtRXJyb3JzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgZnVsbE5hbWUsIHVzZXJOYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IGZvcm1cclxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHt9XHJcblxyXG4gICAgLy8gZnVsbE5hbWUgdmFsaWRhdGlvblxyXG4gICAgaWYgKCFmdWxsTmFtZSB8fCBmdWxsTmFtZSA9PT0gJycpIHtcclxuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmdWxsTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmdWxsTmFtZS5sZW5ndGggPiAzMCkge1xyXG4gICAgICBuZXdFcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghL15bYS16XXszLH0oWycsLiAtXVthLXpdezMsfSkqJC8udGVzdChmdWxsTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZXJOYW1lIHZhbGlkYXRpb25cclxuICAgIGlmICh1c2VyTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHVzZXJOYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXVzZXJOYW1lIHx8IHVzZXJOYW1lID09PSAnJykge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvXlthLXpdKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIG11c3Qgc3RhcnQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvKFxccykrLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBub3QgaGF2ZSBhbnkgc3BhY2UgY2hhcmFjdGVycyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvW0EtWl0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bIUAjJCVeJiooKVxcLSs9e31bXFxdfFxcXFw7OidcIiw8Lj5cXC8/XXsxLH0vLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgLy8gYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgLy8gICBcInVzZXJcIjoge1xyXG4gICAgLy8gICAgIFwidXNlcm5hbWVcIjogdXNlck5hbWUsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIFwiZmluZE9wdGlvblwiOiAwXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgLy8gICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1RoaXMgdXNlcm5hbWUgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciB1c2VybmFtZSdcclxuICAgIC8vICAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgLy8gICAgICAgcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIC8vICAgfSlcclxuXHJcbiAgICAvL2VtYWlsIHZhbGlkYXRpb25cclxuICAgIGlmICghZW1haWwgfHwgZW1haWwgPT09ICcnKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdFbWFpbCBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZW1haWwubGVuZ3RoIDwgMikge1xyXG4gICAgICBuZXdFcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZW1haWwubGVuZ3RoID4gMikge1xyXG4gICAgICBpZiAoIWVtYWlsLm1hdGNoKC9bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsMTV9L2cpKSB7XHJcbiAgICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIG5vdCB2YWxpZCc7XHJcbiAgICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgICAgLy8gICBcInVzZXJcIjoge1xyXG4gICAgICAvLyAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIFwiZmluZE9wdGlvblwiOiAxXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgICAvLyAgICAgICBuZXdFcnJvcnMuZW1haWwgPSAnVGhpcyBlbWFpbCBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIGVtYWlsJztcclxuICAgICAgLy8gICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycylcclxuICAgICAgLy8gICAgICAgcmV0dXJuO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIC8vICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL3Bhc3N3b3JkIHZhbGlkYXRpb25cclxuICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQgPT09ICcnKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNikge1xyXG4gICAgICBuZXdFcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3Rlcic7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPiAzMCkge1xyXG4gICAgICBuZXdFcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdFcnJvcnM7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5kVXNlcm5hbWVFcnJvcnMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyB1c2VyTmFtZSB9ID0gZm9ybVxyXG5cclxuXHJcbiAgICBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgIFwidXNlclwiOiB7XHJcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VyTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgXCJmaW5kT3B0aW9uXCI6IDBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMocHJldnN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByZXZzdGF0ZSwgdXNlck5hbWU6ICdUaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgdXNlcm5hbWUnXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAvL3JldHVybiBleGlzdGVuY2VDaGVja0Vycm9yc1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyBnZXQgb3VyIG5ldyBlcnJvcnNcclxuICAgIGZpbmRGb3JtRXJyb3JzKCk7XHJcbiAgICBmaW5kVXNlcm5hbWVFcnJvcnMoKTtcclxuICAgIC8vIENvbmRpdGlvbmFsIGxvZ2ljOlxyXG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbC5IZWFkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5tb2RhbEhlYWRlcn0gcG9zaXRpb24tcmVsYXRpdmVgfT5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMubW9kYWxBY3Rpb24oKX1cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5jbG9zZX0gcG9zaXRpb24tYWJzb2x1dGUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci13aGl0ZSBwLTBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3ZnL2Nsb3NlLnN2Z1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPE1vZGFsLlRpdGxlXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm1vZGFsVGl0bGV9IGZvbnQtd2VpZ2h0LW5vcm1hbGB9XHJcbiAgICAgICAgICBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgICA+U2lnbiBVcDwvTW9kYWwuVGl0bGU+XHJcblxyXG4gICAgICA8L01vZGFsLkhlYWRlcj5cclxuXHJcbiAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cIm14LTQgcHgtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luIGQtZmxleCBteS00IHBiLTJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBtci0zIGZsZXgtZ3Jvdy0xXCIgdmFyaWFudD1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2dvb2dsZS5zdmdcIiBjbGFzc05hbWU9XCJtci0xXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPlNpZ24gdXAgd2l0aCBHb29nbGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cDovL2ZhY2Vib29rLmNvbVwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJpbmZvXCI+PGltZyBzcmM9XCIvc3ZnL2ZhY2Vib29rLnN2Z1wiIGhlaWdodD17MjR9IHdpZHRoPXsyNH0gLz48L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT17YCR7c3R5bGUuZGl2aWRlcn0gZGl2aWRlciBteS00YH0+PC9ocj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbG9naW4gZC1mbGV4IG10LTRcIj5cclxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cInctMTAwXCIgb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQmx1cj17KCkgPT4gaGFuZGxlRnVsbG5hbWVFcnJvcnMoKX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLCAnZnVsbE5hbWUnKX0gcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLmZ1bGxOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPSdpbnZhbGlkJyB0b29sdGlwIHN0eWxlPXt7IGxlZnQ6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5mdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQmx1cj17KCkgPT4gaGFuZGxlVXNlcm5hbWVFcnJvcnMoKX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLCAndXNlck5hbWUnKX0gcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLnVzZXJOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPSdpbnZhbGlkJyB0b29sdGlwIHN0eWxlPXt7IGxlZnQ6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItNCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkJsdXI9eygpID0+IGhhbmRsZUVtYWlsRXJyb3JzKCl9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXQoZSwgJ2VtYWlsJyl9IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy5lbWFpbH0gLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9J2ludmFsaWQnIHRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1Hcm91cFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwibWItNCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25CbHVyPXsoKSA9PiBoYW5kbGVQYXNzd29yZEVycm9ycygpfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KGUsICdwYXNzd29yZCcpfSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMucGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPSdpbnZhbGlkJyB0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG1yLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hlY2tCb3goJ3ByaXZhY3lQb2xpY3knKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImN1c3RvbUNvbnRyb2xBdXRvc2l6aW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJjdXN0b21Db250cm9sQXV0b3NpemluZ1wiPkNyZWF0aW5nIGFuIGFjY291bnQgbWVhbnMgeW914oCZcmUgb2theSB3aXRoIG91ciBUZXJtcyBvZiBTZXJ2aWNlLCBhbmQgUHJpdmFjeSBQb2xpY3kuPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHNpemU9XCJtZFwiIGJsb2NrIHZhcmlhbnQ9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0Zvcm1WYWxpZCgpfVxyXG4gICAgICAgICAgICAgID5DcmVhdGUgQWNjb3VudDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG5cclxuICAgICAgPE1vZGFsLkZvb3RlciBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMuc2lnbkluQWN0aW9uKCl9IGNsYXNzTmFtZT1cInB5LTJcIj5BbHJlYWR5IGEgbWVtYmVyPyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIj5TaWduIEluPC9zcGFuPjwvZGl2PlxyXG4gICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9