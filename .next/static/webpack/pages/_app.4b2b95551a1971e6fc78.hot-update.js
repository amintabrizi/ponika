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
      console.log(Object.keys(errors).length);
    } else {
      console.log('ok');
    }
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Header, {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modalHeader), " position-relative"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
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
      lineNumber: 368,
      columnNumber: 9
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    src: "/svg/close.svg",
    height: 30,
    width: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modalTitle), " font-weight-normal"),
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 9
    }
  }, "Sign Up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
    className: "mx-4 px-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "social-login d-flex my-4 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 9
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://google.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "border mr-3 flex-grow-1",
    variant: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
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
      lineNumber: 387,
      columnNumber: 15
    }
  }), "Sign up with Google")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "http://facebook.com",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/svg/facebook.svg",
    height: 24,
    width: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 36
    }
  })))), __jsx("hr", {
    className: "".concat((_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divider), " divider my-4"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "social-login d-flex mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
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
      lineNumber: 398,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
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
      lineNumber: 401,
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
      lineNumber: 403,
      columnNumber: 17
    }
  }, errors.fullName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
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
      lineNumber: 408,
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
      lineNumber: 410,
      columnNumber: 17
    }
  }, errors.userName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    className: "mb-4 position-relative",
    controlId: "formGroupEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
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
      lineNumber: 416,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 15
    }
  }, errors.email)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    controlId: "formGroupPassword",
    className: "mb-4 position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
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
      lineNumber: 423,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control.Feedback, {
    type: "invalid",
    tooltip: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 15
    }
  }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox mr-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
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
      lineNumber: 431,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "customControlAutosizing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 17
    }
  }, "Creating an account means you\u2019re okay with our Terms of Service, and Privacy Policy."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    className: "my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
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
      lineNumber: 436,
      columnNumber: 15
    }
  }, "Create Account"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
    className: "d-flex justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
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
      lineNumber: 445,
      columnNumber: 9
    }
  }, "Already a member? ", __jsx("span", {
    className: "text-primary cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW5Db21wb25lbnRzL3NpZ25VcC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZ1bGxOYW1lIiwidXNlck5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJpdmFjeVBvbGljeSIsInVzZVN0YXRlIiwiZm9ybSIsInNldEZvcm0iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZUlucHV0IiwiZSIsImlucHV0TmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRnVsbG5hbWVFcnJvcnMiLCJmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMiLCJsZW5ndGgiLCJ0ZXN0IiwiaGFuZGxlVXNlcm5hbWVFcnJvcnMiLCJ1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMiLCJheGlvc1JlcXVlc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFbWFpbEVycm9ycyIsImVtYWlsVmFsaWRhdGlvbkVycm9ycyIsIm1hdGNoIiwiaGFuZGxlUGFzc3dvcmRFcnJvcnMiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvcnMiLCJoYW5kbGVDaGVja0JveCIsImZpbmRGb3JtRXJyb3JzIiwibmV3RXJyb3JzIiwiZmluZFVzZXJuYW1lRXJyb3JzIiwicHJldnN0YXRlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJPYmplY3QiLCJrZXlzIiwic3R5bGUiLCJtb2RhbEFjdGlvbiIsImxlZnQiLCJzaWduSW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUVwQyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFlB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QmxELE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40YjJiOTU1NTFhMTk3MWU2ZmM3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgRm9ybSwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi8uLi8uLi9zdHlsZXMvbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zUmVxdWVzdCBmcm9tICcuLy4uLy4uL0F4aW9zL0F4aW9zQ29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcChwcm9wcykge1xyXG5cclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBmdWxsTmFtZTogZmFsc2UsXHJcbiAgICB1c2VyTmFtZTogZmFsc2UsXHJcbiAgICBlbWFpbDogZmFsc2UsXHJcbiAgICBwYXNzd29yZDogZmFsc2UsXHJcbiAgICBwcml2YWN5UG9saWN5OiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBsZXQgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGZ1bGxOYW1lLCB1c2VyTmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwcml2YWN5UG9saWN5IH0gPSBmb3JtXHJcbiAgICByZXR1cm4gZnVsbE5hbWUgJiYgdXNlck5hbWUgJiYgZW1haWwgJiYgcGFzc3dvcmQgJiYgcHJpdmFjeVBvbGljeVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUlucHV0ID0gKGUsIGlucHV0TmFtZSkgPT4ge1xyXG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIFtpbnB1dE5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgaWYgKCEhZXJyb3JzW2lucHV0TmFtZV0pIHNldEVycm9ycyh7XHJcbiAgICAgIC4uLmVycm9ycyxcclxuICAgICAgW2lucHV0TmFtZV06IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlRnVsbG5hbWVFcnJvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGZ1bGxOYW1lIH0gPSBmb3JtXHJcbiAgICBjb25zdCBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMgPSB7fVxyXG4gICAgaWYgKCFmdWxsTmFtZSB8fCBmdWxsTmFtZSA9PT0gJycpIHtcclxuICAgICAgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmdWxsTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIGZ1bGxuYW1lVmFsaWRhdGlvbkVycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmdWxsTmFtZS5sZW5ndGggPiAzMCkge1xyXG4gICAgICBmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhmdWxsbmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghL15bYS16XXszLH0oWycsLiAtXVthLXpdezMsfSkqJC8udGVzdChmdWxsTmFtZSkpIHtcclxuICAgICAgZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzLmZ1bGxOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMnO1xyXG4gICAgICBzZXRFcnJvcnMoZnVsbG5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZVVzZXJuYW1lRXJyb3JzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyTmFtZSB9ID0gZm9ybTtcclxuICAgIGNvbnN0IHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyA9IHt9O1xyXG4gICAgLy8gdXNlck5hbWUgdmFsaWRhdGlvblxyXG4gICAgaWYgKHVzZXJOYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlck5hbWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghdXNlck5hbWUgfHwgdXNlck5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIS9eW2Etel0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBzdGFydCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC8oXFxzKSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBtdXN0IG5vdCBoYXZlIGFueSBzcGFjZSBjaGFyYWN0ZXJzJztcclxuICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bQS1aXSsvLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnModXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoL1shQCMkJV4mKigpXFwtKz17fVtcXF18XFxcXDs6J1wiLDwuPlxcLz9dezEsfS8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgdXNlcm5hbWVWYWxpZGF0aW9uRXJyb3JzLnVzZXJOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMgYW5kIGRpZ2l0cyc7XHJcbiAgICAgIHNldEVycm9ycyh1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgIFwidXNlclwiOiB7XHJcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VyTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgXCJmaW5kT3B0aW9uXCI6IDBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICB1c2VybmFtZVZhbGlkYXRpb25FcnJvcnMudXNlck5hbWUgPSAnVGhpcyB1c2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIHVzZXJuYW1lJ1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHVzZXJuYW1lVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlRW1haWxFcnJvcnMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gZm9ybTtcclxuICAgIGNvbnN0IGVtYWlsVmFsaWRhdGlvbkVycm9ycyA9IHt9O1xyXG5cclxuICAgIGlmICghZW1haWwgfHwgZW1haWwgPT09ICcnKSB7XHJcbiAgICAgIGVtYWlsVmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9ICdFbWFpbCBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhlbWFpbFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZW1haWwubGVuZ3RoIDwgMikge1xyXG4gICAgICBlbWFpbFZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhlbWFpbFZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZW1haWwubGVuZ3RoID4gMikge1xyXG4gICAgICBpZiAoIWVtYWlsLm1hdGNoKC9bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsMTV9L2cpKSB7XHJcbiAgICAgICAgZW1haWxWYWxpZGF0aW9uRXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIG5vdCB2YWxpZCc7XHJcbiAgICAgICAgc2V0RXJyb3JzKGVtYWlsVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgICAgICBcInVzZXJcIjoge1xyXG4gICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmluZE9wdGlvblwiOiAxXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgICBlbWFpbFZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnVGhpcyBlbWFpbCBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIGVtYWlsJztcclxuICAgICAgICAgICAgc2V0RXJyb3JzKGVtYWlsVmFsaWRhdGlvbkVycm9ycylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaGFuZGxlUGFzc3dvcmRFcnJvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSBmb3JtO1xyXG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzID0ge307XHJcblxyXG4gICAgaWYgKCFwYXNzd29yZCB8fCBwYXNzd29yZCA9PT0gJycpIHtcclxuICAgICAgcGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGNhbiBub3QgYmUgZW1wdHkhJztcclxuICAgICAgc2V0RXJyb3JzKHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyJztcclxuICAgICAgc2V0RXJyb3JzKHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMocGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGhhbmRsZUNoZWNrQm94ID0gKCkgPT4ge1xyXG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIHByaXZhY3lQb2xpY3k6ICFmb3JtLnByaXZhY3lQb2xpY3kgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmRGb3JtRXJyb3JzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgZnVsbE5hbWUsIHVzZXJOYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IGZvcm1cclxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHt9XHJcblxyXG4gICAgLy8gZnVsbE5hbWUgdmFsaWRhdGlvblxyXG4gICAgaWYgKCFmdWxsTmFtZSB8fCBmdWxsTmFtZSA9PT0gJycpIHtcclxuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ0Z1bGwgbmFtZSBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmdWxsTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5mdWxsTmFtZSA9ICdGdWxsIG5hbWUgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmdWxsTmFtZS5sZW5ndGggPiAzMCkge1xyXG4gICAgICBuZXdFcnJvcnMuZnVsbE5hbWUgPSAnRnVsbCBuYW1lIGlzIHRvbyBsb25nISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghL15bYS16XXszLH0oWycsLiAtXVthLXpdezMsfSkqJC8udGVzdChmdWxsTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ1lvdSBjYW4gb25seSB1c2UgbG93ZXJjYXNlIGxldHRlcnMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZXJOYW1lIHZhbGlkYXRpb25cclxuICAgIGlmICh1c2VyTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gc2hvcnQhJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHVzZXJOYW1lLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdVc2VybmFtZSBpcyB0b28gbG9uZyEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXVzZXJOYW1lIHx8IHVzZXJOYW1lID09PSAnJykge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvXlthLXpdKy8udGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1VzZXJuYW1lIG11c3Qgc3RhcnQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvKFxccykrLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnVXNlcm5hbWUgbXVzdCBub3QgaGF2ZSBhbnkgc3BhY2UgY2hhcmFjdGVycyc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgvW0EtWl0rLy50ZXN0KHVzZXJOYW1lKSkge1xyXG4gICAgICBuZXdFcnJvcnMudXNlck5hbWUgPSAnWW91IGNhbiBvbmx5IHVzZSBsb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9bIUAjJCVeJiooKVxcLSs9e31bXFxdfFxcXFw7OidcIiw8Lj5cXC8/XXsxLH0vLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgIG5ld0Vycm9ycy51c2VyTmFtZSA9ICdZb3UgY2FuIG9ubHkgdXNlIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMnO1xyXG4gICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcclxuICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgfVxyXG4gICAgLy8gYXhpb3NSZXF1ZXN0LnBvc3QoJy91c2VyL2V4aXN0ZW5jZWNoZWNrJywge1xyXG4gICAgLy8gICBcInVzZXJcIjoge1xyXG4gICAgLy8gICAgIFwidXNlcm5hbWVcIjogdXNlck5hbWUsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIFwiZmluZE9wdGlvblwiOiAwXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgLy8gICAgICAgbmV3RXJyb3JzLnVzZXJOYW1lID0gJ1RoaXMgdXNlcm5hbWUgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi4gUGxlYXNlIHBpY2sgYW5vdGhlciB1c2VybmFtZSdcclxuICAgIC8vICAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgLy8gICAgICAgcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIC8vICAgfSlcclxuXHJcbiAgICAvL2VtYWlsIHZhbGlkYXRpb25cclxuICAgIGlmICghZW1haWwgfHwgZW1haWwgPT09ICcnKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdFbWFpbCBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZW1haWwubGVuZ3RoIDwgMikge1xyXG4gICAgICBuZXdFcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgdG9vIHNob3J0ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZW1haWwubGVuZ3RoID4gMikge1xyXG4gICAgICBpZiAoIWVtYWlsLm1hdGNoKC9bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsMTV9L2cpKSB7XHJcbiAgICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIG5vdCB2YWxpZCc7XHJcbiAgICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgICAgLy9yZXR1cm4gbmV3RXJyb3JzO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGF4aW9zUmVxdWVzdC5wb3N0KCcvdXNlci9leGlzdGVuY2VjaGVjaycsIHtcclxuICAgICAgLy8gICBcInVzZXJcIjoge1xyXG4gICAgICAvLyAgICAgXCJlbWFpbFwiOiBlbWFpbCxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIFwiZmluZE9wdGlvblwiOiAxXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xyXG4gICAgICAvLyAgICAgICBuZXdFcnJvcnMuZW1haWwgPSAnVGhpcyBlbWFpbCBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLiBQbGVhc2UgcGljayBhbm90aGVyIGVtYWlsJztcclxuICAgICAgLy8gICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycylcclxuICAgICAgLy8gICAgICAgcmV0dXJuO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIC8vICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL3Bhc3N3b3JkIHZhbGlkYXRpb25cclxuICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQgPT09ICcnKSB7XHJcbiAgICAgIG5ld0Vycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBjYW4gbm90IGJlIGVtcHR5ISc7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNikge1xyXG4gICAgICBuZXdFcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3Rlcic7XHJcbiAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgICAvL3JldHVybiBuZXdFcnJvcnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPiAzMCkge1xyXG4gICAgICBuZXdFcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgaXMgdG9vIGxvbmchJztcclxuICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XHJcbiAgICAgIC8vcmV0dXJuIG5ld0Vycm9ycztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdFcnJvcnM7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5kVXNlcm5hbWVFcnJvcnMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyB1c2VyTmFtZSB9ID0gZm9ybVxyXG5cclxuXHJcbiAgICBheGlvc1JlcXVlc3QucG9zdCgnL3VzZXIvZXhpc3RlbmNlY2hlY2snLCB7XHJcbiAgICAgIFwidXNlclwiOiB7XHJcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VyTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgXCJmaW5kT3B0aW9uXCI6IDBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMocHJldnN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByZXZzdGF0ZSwgdXNlck5hbWU6ICdUaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uIFBsZWFzZSBwaWNrIGFub3RoZXIgdXNlcm5hbWUnXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAvL3JldHVybiBleGlzdGVuY2VDaGVja0Vycm9yc1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyBnZXQgb3VyIG5ldyBlcnJvcnNcclxuICAgIGZpbmRGb3JtRXJyb3JzKCk7XHJcbiAgICBmaW5kVXNlcm5hbWVFcnJvcnMoKTtcclxuICAgIC8vIENvbmRpdGlvbmFsIGxvZ2ljOlxyXG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ29rJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsLkhlYWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLm1vZGFsSGVhZGVyfSBwb3NpdGlvbi1yZWxhdGl2ZWB9PlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5tb2RhbEFjdGlvbigpfVxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmNsb3NlfSBwb3NpdGlvbi1hYnNvbHV0ZSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXdoaXRlIHAtMGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9zdmcvY2xvc2Uuc3ZnXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8TW9kYWwuVGl0bGVcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubW9kYWxUaXRsZX0gZm9udC13ZWlnaHQtbm9ybWFsYH1cclxuICAgICAgICAgIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxyXG4gICAgICAgID5TaWduIFVwPC9Nb2RhbC5UaXRsZT5cclxuXHJcbiAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG5cclxuICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwibXgtNCBweC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbG9naW4gZC1mbGV4IG15LTQgcGItMlwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9nb29nbGUuY29tXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIG1yLTMgZmxleC1ncm93LTFcIiB2YXJpYW50PVwibGlnaHRcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvZ29vZ2xlLnN2Z1wiIGNsYXNzTmFtZT1cIm1yLTFcIiBoZWlnaHQ9ezI0fSB3aWR0aD17MjR9IC8+U2lnbiB1cCB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vZmFjZWJvb2suY29tXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImluZm9cIj48aW1nIHNyYz1cIi9zdmcvZmFjZWJvb2suc3ZnXCIgaGVpZ2h0PXsyNH0gd2lkdGg9ezI0fSAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kaXZpZGVyfSBkaXZpZGVyIG15LTRgfT48L2hyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpbiBkLWZsZXggbXQtNFwiPlxyXG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwidy0xMDBcIiBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25CbHVyPXsoKSA9PiBoYW5kbGVGdWxsbmFtZUVycm9ycygpfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KGUsICdmdWxsTmFtZScpfSBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMuZnVsbE5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9J2ludmFsaWQnIHRvb2x0aXAgc3R5bGU9e3sgbGVmdDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLmZ1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgb25CbHVyPXsoKSA9PiBoYW5kbGVVc2VybmFtZUVycm9ycygpfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0KGUsICd1c2VyTmFtZScpfSBwbGFjZWhvbGRlcj1cIlVzZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMudXNlck5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9J2ludmFsaWQnIHRvb2x0aXAgc3R5bGU9e3sgbGVmdDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi00IHBvc2l0aW9uLXJlbGF0aXZlXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRW1haWxcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQmx1cj17KCkgPT4gaGFuZGxlRW1haWxFcnJvcnMoKX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLCAnZW1haWwnKX0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT0naW52YWxpZCcgdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUdyb3VwUGFzc3dvcmRcIiBjbGFzc05hbWU9XCJtYi00IHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBvbkJsdXI9eygpID0+IGhhbmRsZVBhc3N3b3JkRXJyb3JzKCl9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXQoZSwgJ3Bhc3N3b3JkJyl9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy5wYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9J2ludmFsaWQnIHRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXItc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja0JveCgncHJpdmFjeVBvbGljeScpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwiY3VzdG9tQ29udHJvbEF1dG9zaXppbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImN1c3RvbUNvbnRyb2xBdXRvc2l6aW5nXCI+Q3JlYXRpbmcgYW4gYWNjb3VudCBtZWFucyB5b3XigJlyZSBva2F5IHdpdGggb3VyIFRlcm1zIG9mIFNlcnZpY2UsIGFuZCBQcml2YWN5IFBvbGljeS48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJteS00XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc2l6ZT1cIm1kXCIgYmxvY2sgdmFyaWFudD1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRm9ybVZhbGlkKCl9XHJcbiAgICAgICAgICAgICAgPkNyZWF0ZSBBY2NvdW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsLkJvZHk+XHJcblxyXG4gICAgICA8TW9kYWwuRm9vdGVyIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaWduSW5BY3Rpb24oKX0gY2xhc3NOYW1lPVwicHktMlwiPkFscmVhZHkgYSBtZW1iZXI/IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiPlNpZ24gSW48L3NwYW4+PC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=