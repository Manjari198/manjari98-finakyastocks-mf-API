(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5 col-md-7\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <h1>Reset your Password</h1>\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <form #forgotForm=\"ngForm\" (ngSubmit)=\"forgotForm.valid && onSubmit(forgotForm)\">\r\n            <div class=\"form-group mb-3\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input #email=\"ngModel\" name=\"email\" [(ngModel)]=\"model.email\" required [pattern]=\"emailRegex\" [ngClass]=\"{'invalid-textbox' :forgotForm.submitted && !email.valid}\" class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n                <div *ngIf=\"forgotForm.submitted && email.errors?.pattern\">\r\n                  <label class=\"validation-message\">Invalid email address.</label>\r\n                </div>\r\n                <div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n                  {{serverErrorMessages}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" class=\"btn btn-primary my-4\">Reset Password</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome!</h1>\r\n          <p class=\"text-lead text-light\">Login or create new account for Finakya.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5 col-md-7\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        \r\n        <div class=\"card-header bg-transparent pb-5\">\r\n          <div class=\"text-muted text-center mt-2 mb-3\"><small>Sign in with</small></div>\r\n          <div class=\"btn-wrapper text-center\">\r\n            <a  class=\"btn btn-neutral btn-icon\">\r\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\r\n              <span class=\"btn-inner--text\" (click)=\"googleLogin()\">Google</span>\r\n            </a>\r\n          </div>\r\n        </div> \r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <!-- <small>Or sign in with credentials</small> -->\r\n            <small>Sign in with credentials</small>\r\n          </div>\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && onSubmit(loginForm)\">\r\n            <div class=\"form-group mb-3\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input #email=\"ngModel\" name=\"email\" [(ngModel)]=\"model.email\" required [pattern]=\"emailRegex\" [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !email.valid}\" class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n                <div *ngIf=\"loginForm.submitted && email.errors?.pattern\">\r\n                  <label class=\"validation-message\">Invalid email address.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" required minlength=\"4\" [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !password.valid}\" class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n                <div *ngIf=\"loginForm.submitted && password.errors?.minlength\">\r\n                  <label class=\"validation-message\">Minimum 4 characters.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                <span class=\"text-muted\">Remember me</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" class=\"btn btn-primary my-4\">Sign in</button>\r\n            </div>\r\n          </form>\r\n          <div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n            {{serverErrorMessages}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-6\">\r\n          <a (click)=\"forgot()\" class=\"text-light\"><small>Forgot password?</small></a>\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n          <a (click)=\"new()\" class=\"text-light\"><small>Create new account</small></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome!</h1>\r\n          <p class=\"text-lead text-light\">Login or create new account for Finakya.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <!-- Table -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6 col-md-8\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        \r\n        <div class=\"card-header bg-transparent pb-5\">\r\n          <div class=\"text-muted text-center mt-2 mb-4\"><small>Sign up with</small></div>\r\n          <div class=\"text-center\">\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/github.svg\"></span>\r\n              <span class=\"btn-inner--text\">Github</span>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/google.svg\"></span>\r\n              <span class=\"btn-inner--text\">Google</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <!-- <small>Or sign up with credentials</small> -->\r\n            <small>Sign up with credentials</small>\r\n          </div>\r\n          <form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input [(ngModel)]=\"userService.selectedUser.fullName\" #fullName=\"ngModel\" class=\"form-control\" name=\"fullName\" placeholder=\"Name\" type=\"text\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid}\">\r\n                <div *ngIf=\"signUpForm.submitted && !fullName.valid\">\r\n                  <label styles=\"color:red\" class=\"validation-message\">This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input [(ngModel)]=\"userService.selectedUser.email\" #email=\"ngModel\" class=\"form-control\" name=\"email\" placeholder=\"Email\" type=\"email\" required [pattern]=\"emailRegex\" [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid}\">\r\n                <div *ngIf=\"signUpForm.submitted && email.errors\">\r\n                  <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\r\n                  <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input [(ngModel)]=\"userService.selectedUser.password\" class=\"form-control\" #password=\"ngModel\" name=\"password\" placeholder=\"Password\" type=\"password\" minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\r\n                <div *ngIf=\"signUpForm.submitted && password.errors\">\r\n                  <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\r\n                  <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\r\n            <div class=\"row my-4\">\r\n              <div class=\"col-12\">\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input (click)=\"check()\" class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button *ngIf=\"isDisabled; else privacyPolicy\" class=\"btn btn-primary mt-4\" type=\"submit\">Create account</button>\r\n              <ng-template #privacyPolicy>\r\n                <button [disabled]=\"isDisabled ? false : true\" type=\"button\" class=\"btn btn-primary mt-4 \">Create account</button>\r\n                <br>\r\n                <p>You need to agree to the privacy policy!!</p>\r\n              </ng-template>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Hey there!</h1>\r\n          <p class=\"text-lead text-light\">Reset Your Password</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5 col-md-7\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <form #resetForm=\"ngForm\" (ngSubmit)=\"resetForm.valid && onSubmit(resetForm)\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input name=\"newPassword\" #newPassword=\"ngModel\" [(ngModel)]=\"model.newPassword\" required minlength=\"4\" [ngClass]=\"{'invalid-textbox' :resetForm.submitted && !newPassword.valid}\" class=\"form-control\" placeholder=\"New Password\" type=\"password\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input name=\"confirmPassword\" #confirmPassword=\"ngModel\" [(ngModel)]=\"model.confirmPassword\" required minlength=\"4\" [ngClass]=\"{'invalid-textbox' :resetForm.submitted && !confirmPassword.valid}\" class=\"form-control\" placeholder=\"Confirm Password\" type=\"password\">\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"text-center\">\r\n              <button [disabled]=\"allowSubmit\" type=\"submit\" class=\"btn btn-primary my-4\">Reset Password</button>\r\n            </div>\r\n          </form>\r\n          <div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n            {{serverErrorMessages}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/forgot/forgot.component */ "./src/app/pages/forgot/forgot.component.ts");
/* harmony import */ var _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/reset/reset.component */ "./src/app/pages/reset/reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                // NgbModule
            ],
            declarations: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"],
                _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_8__["ResetComponent"]
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/forgot/forgot.component */ "./src/app/pages/forgot/forgot.component.ts");
/* harmony import */ var _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/reset/reset.component */ "./src/app/pages/reset/reset.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'forgot', component: _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"] },
    { path: 'reset/:token', component: _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_3__["ResetComponent"] }
];


/***/ }),

/***/ "./src/app/pages/forgot/forgot.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/forgot/forgot.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/forgot/forgot.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/forgot/forgot.component.ts ***!
  \**************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = {
            email: ''
        };
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.forgot(form.value).subscribe(function (res) {
            _this.router.navigateByUrl('/forgot');
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    ForgotComponent.ctorParameters = function () { return [
        { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __importDefault(__webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./forgot.component.css */ "./src/app/pages/forgot/forgot.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.model = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']);
            _this.router.navigateByUrl('/dashboard');
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    // onSignIn(googleUser) {
    // //  var id_token = googleUser.getAuthResponse().id_token;
    //   var profile = googleUser.getBasicProfile();
    //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //   console.log('Name: ' + profile.getName());
    //   console.log('Image URL: ' + profile.getImageUrl());
    //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // }
    // googleLogin(){
    //   this.userService.getGoogleAuth().subscribe(
    //     res=>{},
    //     err=>{}
    //   )
    // }
    LoginComponent.prototype.new = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent.prototype.forgot = function () {
        this.router.navigateByUrl('/forgot');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.isDisabled = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value).subscribe(function (res) {
            _this.resetForm(form);
            _this.router.navigateByUrl('login');
        }, function (err) {
            if (err.status == 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = "Something went wrong. Please contact Admin";
        });
    };
    RegisterComponent.prototype.resetForm = function (form) {
        this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    RegisterComponent.prototype.check = function () {
        if (this.isDisabled)
            this.isDisabled = false;
        else
            this.isDisabled = true;
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/reset/reset.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/reset/reset.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/reset/reset.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/reset/reset.component.ts ***!
  \************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ResetComponent = /** @class */ (function () {
    function ResetComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.serverErrorMessages = "";
        this.model = {
            newPassword: '',
            confirmPassword: ''
        };
    }
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.route.snapshot.paramMap.get('token');
        this.userService.checkToken(this.token).subscribe(function (res) {
            _this.allowSubmit = true;
            console.log('WORKING');
        }, function (err) {
            if (err.status == 404)
                _this.serverErrorMessages = err.error.join('</br>');
        });
    };
    ResetComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.resetPassword(form.value, this.token).subscribe(function (res) {
            console.log("no error");
            _this.successMessage = true;
            _this.router.navigateByUrl('/login');
        }, function (err) {
            if (err.status == 404 || err.status == 400)
                _this.serverErrorMessages = err.error.join('</br>');
            else
                _this.serverErrorMessages = 'Something went wrong. Please contact ADMIN';
        });
    };
    ResetComponent.ctorParameters = function () { return [
        { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reset.component.css */ "./src/app/pages/reset/reset.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map