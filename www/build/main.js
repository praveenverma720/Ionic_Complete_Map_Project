webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentserviceProvider = (function () {
    function StudentserviceProvider(http) {
        this.http = http;
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]();
        this.userProfile = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('student');
        console.log('Hello UsersserviceProvider Provider');
        console.log('Hello StudentserviceProvider Provider');
    }
    StudentserviceProvider.prototype.studentLoginService = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    StudentserviceProvider.prototype.studentSignupService = function (account) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then(function (newUser) {
            //sign in the user
            _this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then(function (authenticatedUser) {
                //successful login, create user profile
                _this.userProfile.child(authenticatedUser.uid).set(account);
            });
        });
    };
    StudentserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StudentserviceProvider);
    return StudentserviceProvider;
}());

//# sourceMappingURL=studentservice.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersserviceProvider = (function () {
    function UsersserviceProvider(http) {
        this.http = http;
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]();
        this.userProfile = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('customers');
        console.log('Hello UsersserviceProvider Provider');
    }
    UsersserviceProvider.prototype.loginUserService = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    UsersserviceProvider.prototype.signupUserService = function (account) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then(function (newUser) {
            //sign in the user
            _this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then(function (authenticatedUser) {
                //successful login, create user profile
                _this.userProfile.child(authenticatedUser.uid).set(account);
            });
        });
    };
    UsersserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UsersserviceProvider);
    return UsersserviceProvider;
}());

//# sourceMappingURL=usersservice.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerloginPage = (function () {
    function CustomerloginPage(usersService, loadingCtrl, toastCtrl, navCtrl, navParams) {
        this.usersService = usersService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerloginPage');
    };
    CustomerloginPage.prototype.CustomerLogin = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.usersService.loginUserService(this.email, this.password).then(function (authData) {
            //successful
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
        }, function (error) {
            loader.dismiss();
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            that.password = ""; //empty the password field
        });
    };
    CustomerloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customerlogin',template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/pages/customerlogin/customerlogin.html"*/'<!--\n  Generated template for the CustomerloginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Customer Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="email" name="email"  required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n  </ion-item>\n\n  \n\n</ion-list>\n\n<div padding>\n  <button block ion-button (click)="CustomerLogin()">Login</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/pages/customerlogin/customerlogin.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _e || Object])
    ], CustomerloginPage);
    return CustomerloginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=customerlogin.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_studentservice_studentservice__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentloginPage = (function () {
    function StudentloginPage(studentservice, loadingCtrl, navCtrl, navParams, toastCtrl) {
        this.studentservice = studentservice;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    StudentloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentloginPage');
    };
    StudentloginPage.prototype.StudentLogin = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.studentservice.studentLoginService(this.email, this.password).then(function (authData) {
            //successful
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
        }, function (error) {
            loader.dismiss();
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            that.password = ""; //empty the password field
        });
    };
    StudentloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studentlogin',template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/pages/studentlogin/studentlogin.html"*/'<!--\n  Generated template for the CustomerloginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Student Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="email" name="email"  required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n  </ion-item>\n\n  \n\n</ion-list>\n\n<div padding>\n  <button block ion-button (click)="StudentLogin()">Login</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/pages/studentlogin/studentlogin.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_studentservice_studentservice__["a" /* StudentserviceProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_studentservice_studentservice__["a" /* StudentserviceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_studentservice_studentservice__["a" /* StudentserviceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _e || Object])
    ], StudentloginPage);
    return StudentloginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=studentlogin.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersignupPage = (function () {
    function CustomersignupPage(navCtrl, navParams, usersserviceProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersserviceProvider = usersserviceProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    CustomersignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomersignupPage');
    };
    CustomersignupPage.prototype.signUpCustomer = function () {
        var _this = this;
        var account = {
            name: this.name || '',
            email: this.email,
            phone: this.phone || '',
            age: this.age || '',
            gander: this.gander || '',
            password: this.password || '',
        };
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.usersserviceProvider.signupUserService(account).then(function (authData) {
            //successful
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
        }, function (error) {
            loader.dismiss();
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            that.password = ""; //empty the password field
        });
    };
    CustomersignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customersignup',template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/pages/customersignup/customersignup.html"*/'<!--\n  Generated template for the CustomersignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n\n  <ion-item>\n    <ion-label floating>Name</ion-label>\n    <ion-input type="text" [(ngModel)]="name" name="name" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email" name="email" required="required"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label floating>Mobile No.</ion-label>\n    <ion-input type="text" [(ngModel)]="phone" name="phone" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Age</ion-label>\n    <ion-input type="text" [(ngModel)]="age" name="age" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Gander</ion-label>\n    <ion-input type="text" [(ngModel)]="gander" name="gander" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n  </ion-item>\n\n\n\n</ion-list>\n\n<div padding>\n  <button block ion-button (click)="signUpCustomer()">SignUp</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/pages/customersignup/customersignup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
    ], CustomersignupPage);
    return CustomersignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=customersignup.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_studentservice_studentservice__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentsignupPage = (function () {
    function StudentsignupPage(navCtrl, navParams, studentserviceProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.studentserviceProvider = studentserviceProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    StudentsignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentsignupPage');
    };
    StudentsignupPage.prototype.studentSignup = function () {
        var _this = this;
        var account = {
            name: this.name || '',
            email: this.email,
            phone: this.phone || '',
            age: this.age || '',
            gander: this.gander || '',
            password: this.password || '',
        };
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.studentserviceProvider.studentSignupService(account).then(function (authData) {
            //successful
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
        }, function (error) {
            loader.dismiss();
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            that.password = ""; //empty the password field
        });
    };
    StudentsignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studentsignup',template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/pages/studentsignup/studentsignup.html"*/'<!--\n  Generated template for the CustomersignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>Name</ion-label>\n    <ion-input type="text" [(ngModel)]="name" name="name" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email" name="email" required="required"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label floating>Mobile No.</ion-label>\n    <ion-input type="text" [(ngModel)]="phone" name="phone" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Age</ion-label>\n    <ion-input type="text" [(ngModel)]="age" name="age" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Gander</ion-label>\n    <ion-input type="text" [(ngModel)]="gander" name="gander" required="required"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n  </ion-item>\n\n\n\n</ion-list>\n\n<div padding>\n  <button block ion-button (click)="studentSignup()">SignUp</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/pages/studentsignup/studentsignup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_studentservice_studentservice__["a" /* StudentserviceProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_studentservice_studentservice__["a" /* StudentserviceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_studentservice_studentservice__["a" /* StudentserviceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
    ], StudentsignupPage);
    return StudentsignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=studentsignup.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(zone, geolocation, loadingCtrl) {
        this.zone = zone;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.start = 'chicago, il';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.geocoder = new google.maps.Geocoder;
        var elem = document.createElement("div");
        this.GooglePlaces = new google.maps.places.PlacesService(elem);
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = {
            input: ''
        };
        this.autocompleteItems = [];
        this.complete = { input: '' };
        this.completeItems = [];
        this.markers = [];
        this.loading = this.loadingCtrl.create();
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    MapPage.prototype.initMap = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: { lat: 17.3850, lng: 78.4867 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    MapPage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (predictions, status) {
            _this.autocompleteItems = [];
            if (predictions) {
                _this.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        _this.autocompleteItems.push(prediction);
                    });
                });
            }
        });
    };
    MapPage.prototype.searchResults = function () {
        var _this = this;
        if (this.complete.input == '') {
            this.completeItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.complete.input }, function (predictions, status) {
            _this.completeItems = [];
            if (predictions) {
                _this.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        _this.completeItems.push(prediction);
                    });
                });
            }
        });
    };
    MapPage.prototype.selectSearchResult = function (item) {
        var _this = this;
        console.log("item value", item);
        // this.clearMarkers();
        this.autocompleteItems = [];
        var ab;
        this.ab = item.description;
        console.log(this.ab);
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                // let position = {
                //     lat: results[0].geometry.location.lat,
                //     lng: results[0].geometry.location.lng
                // };
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map
                });
                //console.log(position);
                console.log(marker);
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
                //this.calculateAndDisplayRoute();
            }
        });
    };
    MapPage.prototype.sSearchResult = function (item) {
        var _this = this;
        console.log("item value", item);
        // this.clearMarkers();
        this.completeItems = [];
        var abc;
        this.abc = item.description;
        console.log(this.abc);
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                // let position = {
                //     lat: results[0].geometry.location.lat,
                //     lng: results[0].geometry.location.lng
                // };
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map
                });
                //console.log(position);
                console.log(marker);
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
                _this.calculateAndDisplayRoute();
            }
        });
    };
    MapPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.ab,
            destination: this.abc,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        console.log('ab value', this.ab);
        console.log('abc value', this.abc);
    };
    MapPage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            console.log(this.markers[i]);
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/pages/map/map.html"*/'<ion-header padding-top="50px">\n  \n      <ion-searchbar [(ngModel)]="autocomplete.input" (ionInput)="updateSearchResults()" placeholder="From "></ion-searchbar>\n      <ion-searchbar [(ngModel)]="complete.input" (ionInput)="searchResults()" placeholder="To"></ion-searchbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list [hidden]="autocompleteItems.length == 0">\n    <ion-item *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResult(item)">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n\n  <ion-list [hidden]="completeItems.length == 0">\n    <ion-item *ngFor="let item of completeItems" tappable (click)="sSearchResult(item)">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n\n  <div id=\'map\'></div>\n</ion-content>'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/customerlogin/customerlogin.module": [
		476,
		4
	],
	"../pages/customersignup/customersignup.module": [
		477,
		3
	],
	"../pages/map/map.module": [
		480,
		2
	],
	"../pages/studentlogin/studentlogin.module": [
		478,
		1
	],
	"../pages/studentsignup/studentsignup.module": [
		479,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogintabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customerlogin_customerlogin__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentlogin_studentlogin__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogintabPage = (function () {
    function LogintabPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__customerlogin_customerlogin__["a" /* CustomerloginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__studentlogin_studentlogin__["a" /* StudentloginPage */];
    }
    LogintabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logintab',template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/pages/logintab/logintab.html"*/'<!--\n  Generated template for the LogintabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  \n\n</ion-header>\n\n\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Customer" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Student" tabIcon="information-circle"></ion-tab>\n\n \n</ion-tabs>\n'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/pages/logintab/logintab.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LogintabPage);
    return LogintabPage;
}());

//# sourceMappingURL=logintab.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignuptabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customersignup_customersignup__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentsignup_studentsignup__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignuptabPage = (function () {
    function SignuptabPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__customersignup_customersignup__["a" /* CustomersignupPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__studentsignup_studentsignup__["a" /* StudentsignupPage */];
    }
    SignuptabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signuptab',template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/pages/signuptab/signuptab.html"*/'<!--\n  Generated template for the SignuptabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Customer" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Student" tabIcon="information-circle"></ion-tab>\n\n \n</ion-tabs>\n'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/pages/signuptab/signuptab.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], SignuptabPage);
    return SignuptabPage;
}());

//# sourceMappingURL=signuptab.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(319);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signuptab_signuptab__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_logintab_logintab__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_customersignup_customersignup__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_studentsignup_studentsignup__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_customerlogin_customerlogin__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_studentlogin_studentlogin__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_map_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_usersservice_usersservice__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_studentservice_studentservice__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_connectivity_service_connectivity_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_google_maps_google_maps__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//location

//firebase



//pages















//firebase credaional
var config = {
    apiKey: "AIzaSyBULHbBsNahEIrgje_CTtAqDtc5Iz7vl6w",
    authDomain: "tingting-263c9.firebaseapp.com",
    databaseURL: "https://tingting-263c9.firebaseio.com",
    projectId: "tingting-263c9",
    storageBucket: "tingting-263c9.appspot.com",
    messagingSenderId: "814914916467"
};
__WEBPACK_IMPORTED_MODULE_8_firebase__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signuptab_signuptab__["a" /* SignuptabPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_logintab_logintab__["a" /* LogintabPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_customersignup_customersignup__["a" /* CustomersignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_studentsignup_studentsignup__["a" /* StudentsignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_customerlogin_customerlogin__["a" /* CustomerloginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_studentlogin_studentlogin__["a" /* StudentloginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/customerlogin/customerlogin.module#CustomerloginPageModule', name: 'CustomerloginPage', segment: 'customerlogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customersignup/customersignup.module#CustomersignupPageModule', name: 'CustomersignupPage', segment: 'customersignup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentlogin/studentlogin.module#StudentloginPageModule', name: 'StudentloginPage', segment: 'studentlogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentsignup/studentsignup.module#StudentsignupPageModule', name: 'StudentsignupPage', segment: 'studentsignup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signuptab_signuptab__["a" /* SignuptabPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_logintab_logintab__["a" /* LogintabPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_customersignup_customersignup__["a" /* CustomersignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_studentsignup_studentsignup__["a" /* StudentsignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_customerlogin_customerlogin__["a" /* CustomerloginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_studentlogin_studentlogin__["a" /* StudentloginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_studentservice_studentservice__["a" /* StudentserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ConnectivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnectivityServiceProvider = (function () {
    function ConnectivityServiceProvider(http) {
        this.http = http;
        console.log('Hello ConnectivityServiceProvider Provider');
    }
    ConnectivityServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConnectivityServiceProvider);
    return ConnectivityServiceProvider;
}());

//# sourceMappingURL=connectivity-service.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GoogleMapsProvider = (function () {
    function GoogleMapsProvider(http) {
        this.http = http;
        console.log('Hello GoogleMapsProvider Provider');
    }
    GoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GoogleMapsProvider);
    return GoogleMapsProvider;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logintab_logintab__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signuptab_signuptab__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.Login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__logintab_logintab__["a" /* LogintabPage */]);
    };
    HomePage.prototype.SignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signuptab_signuptab__["a" /* SignuptabPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ashwin/Workspace/tingtingweb/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ting Ting\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <button ion-button (click)="SignUp()" round>SignUp</button>\n<button ion-button class="color1" (click)="Login()" round>Login</button>\n</ion-content>\n'/*ion-inline-end:"/home/ashwin/Workspace/tingtingweb/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[297]);
//# sourceMappingURL=main.js.map