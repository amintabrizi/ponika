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

    if (Object.keys(errors).length === 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW5Db21wb25lbnRzL3NpZ25VcC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZ1bGxOYW1lIiwidXNlck5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJpdmFjeVBvbGljeSIsInVzZVN0YXRlIiwiZm9ybSIsInNldEZvcm0iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZUlucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRnVsbG5hbWVFcnJvcnMiLCJmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMiLCJsZW5ndGgiLCJ0ZXN0IiwiaGFuZGxlVXNlcm5hbWVFcnJvcnMiLCJ1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMiLCJheGlvc1JlcXVlc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFbWFpbEVycm9ycyIsImVtYWlsVmFsaWRhdGlvbkVycm9ycyIsIm1hdGNoIiwiaGFuZGxlUGFzc3dvcmRFcnJvcnMiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMiLCJoYW5kbGVDaGVja0JveCIsImZpbmRGb3JtRXJyb3JzIiwibmV3RXJyb3JzIiwiZmluZFVzZXJuYW1lRXJyb3JzIiwicHJldnN0YXRlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJPYmplY3QiLCJrZXlzIiwic3R5bGUiLCJtb2RhbEFjdGlvbiIsImxlZnQiLCJzaWduSW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUVwQyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFlB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QTtBQUFBO0FBQUEsZUFBN0UsQ0FERixDQS9FRixDQURGO0FBcUZEOztHQS9idUJsRCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTYxZDc5NDNiNTkwYTE0NTU4YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEZvcm0sIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vLi4vLi4vc3R5bGVzL21vZGFsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvc1JlcXVlc3QgZnJvbSAnLi8uLi8uLi9BeGlvcy9BeGlvc0NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZnVsbE5hbWU6IGZhbHNlLFxyXG4gICAgdXNlck5hbWU6IGZhbHNlLFxyXG4gICAgZW1haWw6IGZhbHNlLFxyXG4gICAgcGFzc3dvcmQ6IGZhbHNlLFxyXG4gICAgcHJpdmFjeVBvbGljeTogZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgbGV0IGlzRm9ybVZhbGlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBmdWxsTmFtZSwgdXNlck5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcHJpdmFjeVBvbGljeSB9ID0gZm9ybVxyXG4gICAgcmV0dXJuIGZ1bGxOYW1lICYmIHVzZXJOYW1lICYmIGVtYWlsICYmIHBhc3N3b3JkICYmIHByaXZhY3lQb2xpY3lcclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVJbnB1dCA9IChlLCBpbnB1dE5hbWUpID0+IHtcclxuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbaW5wdXROYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIGlmICghIWVycm9yc1tpbnB1dE5hbWVdKSBzZXRFcnJvcnMoe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIFtpbnB1dE5hbWVdOiBudWxsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUZ1bGxuYW1lRXJyb3JzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBmdWxsTmFtZSB9ID0gZm9ybVxyXG4gICAgY29uc3QgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzID0ge31cclxuICAgIGlmICghZnVsbE5hbWUgfHwgZnVsbE5hbWUgPT09ICcnKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIS9eW2Etel17Myx9KFsnLC4gLV1bYS16XXszLH0pKiQvLnRlc3QoZnVsbE5hbWUpKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBoYW5kbGVVc2VybmFtZUVycm9ycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlck5hbWUgfSA9IGZvcm07XHJcbiAgICBjb25zdCB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMgPSB7fTtcclxuICAgIC8vIHVzZXJOYW1lIHZhbGlkYXRpb25cclxuICAgIGlmICh1c2VyTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHVzZXJOYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXVzZXJOYW1lIHx8IHVzZXJOYW1lID09PSAnJykge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvXlthLXpdKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIG11c3Qgc3RhcnQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvKFxccykrLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBub3QgaGF2ZSBhbnkgc3BhY2UgY2hhcmFjdGVycyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvW0EtWl0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bIUAjJCVeJiooKVxcLSs9e31bXFxdfFxcXFw7OidcIiw8Lj5cXC8/XXsxLH0vLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICB9XHJcbiAgICBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgIFwidXNlclwiOiB7XHJcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VyTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgXCJmaW5kT3B0aW9uXCI6IDBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVGhpcyB1c2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIHVzZXJuYW1lJ1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlRW1haWxFcnJvcnMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gZm9ybTtcclxuICAgIGNvbnN0IGVtYWlsVmFsaWRhdGlvbkVycm9ycyA9IHt9O1xyXG5cclxuICAgIGlmICghZW1haWwgfHwgZW1haWwgPT09ICcnKSB7XHJcbiAgICAgIGVtYWlsVmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9ICdFbWFpbCBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhlbWFpbFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZW1haWwubGVuZ3RoIDwgMikge1xyXG4gICAgICBlbWFpbFZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhlbWFpbFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZW1haWwubGVuZ3RoID4gMikge1xyXG4gICAgICBpZiAoIWVtYWlsLm1hdGNoKC9bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsMTV9L2cpKSB7XHJcbiAgICAgICAgZW1haWxWYWxpZGF0aW9uRXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIG5vdCB2YWxpZCc7XHJcbiAgICAgICAgc2V0RXJyb3JzKGVtYWlsVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgICAgICBcInVzZXJcIjoge1xyXG4gICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmluZE9wdGlvblwiOiAxXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgICBlbWFpbFZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnVGhpcyBlbWFpbCBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIGVtYWlsJztcclxuICAgICAgICAgICAgc2V0RXJyb3JzKGVtYWlsVmFsaWRhdGlvbkVycm9ycylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlUGFzc3dvcmRFcnJvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSBmb3JtO1xyXG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzID0ge307XHJcblxyXG4gICAgaWYgKCFwYXNzd29yZCB8fCBwYXNzd29yZCA9PT0gJycpIHtcclxuICAgICAgcGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyJztcclxuICAgICAgc2V0RXJyb3JzKHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMocGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlQ2hlY2tCb3ggPSAoKSA9PiB7XHJcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgcHJpdmFjeVBvbGljeTogIWZvcm0ucHJpdmFjeVBvbGljeSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmluZEZvcm1FcnJvcnMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBmdWxsTmFtZSwgdXNlck5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gZm9ybVxyXG4gICAgY29uc3QgbmV3RXJyb3JzID0ge31cclxuXHJcbiAgICAvLyBmdWxsTmFtZSB2YWxpZGF0aW9uXHJcbiAgICBpZiAoIWZ1bGxOYW1lIHx8IGZ1bGxOYW1lID09PSAnJykge1xyXG4gICAgICBuZXdFcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZ1bGxOYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCEvXlthLXpdezMsfShbJywuIC1dW2Etel17Myx9KSokLy50ZXN0KGZ1bGxOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMuZnVsbE5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlck5hbWUgdmFsaWRhdGlvblxyXG4gICAgaWYgKHVzZXJOYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlck5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghdXNlck5hbWUgfHwgdXNlck5hbWUgPT09ICcnKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBpZiAoIS9eW2Etel0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBzdGFydCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC8oXFxzKSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBtdXN0IG5vdCBoYXZlIGFueSBzcGFjZSBjaGFyYWN0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bQS1aXSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL1shQCMkJV4mKigpXFwtKz17fVtcXF18XFxcXDs6J1wiLDwuPlxcLz9dezEsfS8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMgYW5kIGRpZ2l0cyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICAvLyBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAvLyAgIFwidXNlclwiOiB7XHJcbiAgICAvLyAgICAgXCJ1c2VybmFtZVwiOiB1c2VyTmFtZSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgXCJmaW5kT3B0aW9uXCI6IDBcclxuICAgIC8vIH0pXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAvLyAgICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVGhpcyB1c2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIHVzZXJuYW1lJ1xyXG4gICAgLy8gICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAvLyAgICAgICByZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICB9KVxyXG5cclxuICAgIC8vZW1haWwgdmFsaWRhdGlvblxyXG4gICAgaWYgKCFlbWFpbCB8fCBlbWFpbCA9PT0gJycpIHtcclxuICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ0VtYWlsIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChlbWFpbC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChlbWFpbC5sZW5ndGggPiAyKSB7XHJcbiAgICAgIGlmICghZW1haWwubWF0Y2goL1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17MiwxNX0vZykpIHtcclxuICAgICAgICBuZXdFcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgbm90IHZhbGlkJztcclxuICAgICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICAgIH1cclxuICAgICAgLy8gYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgICAvLyAgIFwidXNlclwiOiB7XHJcbiAgICAgIC8vICAgICBcImVtYWlsXCI6IGVtYWlsLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgXCJmaW5kT3B0aW9uXCI6IDFcclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIC8vICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgIC8vICAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdUaGlzIGVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgZW1haWwnO1xyXG4gICAgICAvLyAgICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKVxyXG4gICAgICAvLyAgICAgICByZXR1cm47XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgLy8gICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vcGFzc3dvcmQgdmFsaWRhdGlvblxyXG4gICAgaWYgKCFwYXNzd29yZCB8fCBwYXNzd29yZCA9PT0gJycpIHtcclxuICAgICAgbmV3RXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIG5ld0Vycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0Vycm9ycztcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmRVc2VybmFtZUVycm9ycyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJOYW1lIH0gPSBmb3JtXHJcblxyXG5cclxuICAgIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgICAgXCJ1c2VyXCI6IHtcclxuICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXJOYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBcImZpbmRPcHRpb25cIjogMFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgIHNldEVycm9ycyhwcmV2c3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgLi4ucHJldnN0YXRlLCB1c2VyTmFtZTogJ1RoaXMgdXNlcm5hbWUgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciB1c2VybmFtZSdcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIC8vcmV0dXJuIGV4aXN0ZW5jZUNoZWNrRXJyb3JzXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIC8vIGdldCBvdXIgbmV3IGVycm9yc1xyXG4gICAgZmluZEZvcm1FcnJvcnMoKTtcclxuICAgIGZpbmRVc2VybmFtZUVycm9ycygpO1xyXG4gICAgLy8gQ29uZGl0aW9uYWwgbG9naWM6XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coJ29rJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsLkhlYWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLm1vZGFsSGVhZGVyfSBwb3NpdGlvbi1yZWxhdGl2ZWB9PlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5tb2RhbEFjdGlvbigpfVxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmNsb3NlfSBwb3NpdGlvbi1hYnNvbHV0ZSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXdoaXRlIHAtMGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9zdmcvY2xvc2Uuc3ZnXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8TW9kYWwuVGl0bGVcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubW9kYWxUaXRsZX0gZm9udC13ZWlnaHQtbm9ybWFsYH1cclxuICAgICAgICAgIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxyXG4gICAgICAgID5TaWduIFVwPC9Nb2RhbC5UaXRsZT5cclxuXHJcbiAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG5cclxuICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwibXgtNCBweC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbG9naW4gZC1mbGV4IG15LTQgcGItMlwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9nb29nbGUuY29tXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIG1yLTMgZmxleC1ncm93LTFcIiB2YXJpYW50PVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvZ29vZ2xlLnN2Z1wiIGNsYXNzTmFtZT1cIm1yLTFcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+U2lnbiB1cCB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vZmFjZWJvb2suY29tXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImluZm9cIj48aW1nIHNyYz1cIi9zdmcvZmFjZWJvb2suc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kaXZpZGVyfSBkaXZpZGVyIG15LTRgfT48L2hyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpbiBkLWZsZXggbXQtNFwiPlxyXG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwidy0xMDBcIiBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25CbHVyPXsoKSA9PiBoYW5kbGVGdWxsbmFtZUVycm9ycygpfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KGUsICdmdWxsTmFtZScpfSBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMuZnVsbE5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9J2ludmFsaWQnIHRvb2x0aXAgc3R5bGU9e3sgbGVmdDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLmZ1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25CbHVyPXsoKSA9PiBoYW5kbGVVc2VybmFtZUVycm9ycygpfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KGUsICd1c2VyTmFtZScpfSBwbGFjZWhvbGRlcj1cIlVzZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMudXNlck5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9J2ludmFsaWQnIHRvb2x0aXAgc3R5bGU9e3sgbGVmdDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi00IHBvc2l0aW9uLXJlbGF0aXZlXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRW1haWxcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQmx1cj17KCkgPT4gaGFuZGxlRW1haWxFcnJvcnMoKX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLCAnZW1haWwnKX0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT0naW52YWxpZCcgdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUdyb3VwUGFzc3dvcmRcIiBjbGFzc05hbWU9XCJtYi00IHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkJsdXI9eygpID0+IGhhbmRsZVBhc3N3b3JkRXJyb3JzKCl9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXQoZSwgJ3Bhc3N3b3JkJyl9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy5wYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9J2ludmFsaWQnIHRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXItc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja0JveCgncHJpdmFjeVBvbGljeScpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwiY3VzdG9tQ29udHJvbEF1dG9zaXppbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImN1c3RvbUNvbnRyb2xBdXRvc2l6aW5nXCI+Q3JlYXRpbmcgYW4gYWNjb3VudCBtZWFucyB5b3XigJlyZSBva2F5IHdpdGggb3VyIFRlcm1zIG9mIFNlcnZpY2UsIGFuZCBQcml2YWN5IFBvbGljeS48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJteS00XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc2l6ZT1cIm1kXCIgYmxvY2sgdmFyaWFudD1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRm9ybVZhbGlkKCl9XHJcbiAgICAgICAgICAgICAgPkNyZWF0ZSBBY2NvdW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsLkJvZHk+XHJcblxyXG4gICAgICA8TW9kYWwuRm9vdGVyIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaWduSW5BY3Rpb24oKX0gY2xhc3NOYW1lPVwicHktMlwiPkFscmVhZHkgYSBtZW1iZXI/IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiPlNpZ24gSW48L3NwYW4+PC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=