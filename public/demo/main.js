(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apiservice.service.ts":
/*!***************************************!*\
  !*** ./src/app/apiservice.service.ts ***!
  \***************************************/
/*! exports provided: ApiserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiserviceService", function() { return ApiserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-type': 'application/json' })
};
var ApiserviceService = /** @class */ (function () {
    function ApiserviceService(http) {
        this.http = http;
    }
    /*Api Servie to Add  a new User */
    ApiserviceService.prototype.addUser = function (model) {
        //console.log('in data get shopp in service')
        return this.http.post('/signup', model, httpOptions);
    };
    /*Api Service Call to get User details by email While loggingIn*/
    ApiserviceService.prototype.getUser = function (model) {
        // console.log('in service')
        // console.log(model)
        return this.http.post('/login', model, httpOptions);
    };
    /*Api Serive to fetch User details by Id */
    ApiserviceService.prototype.getUserId = function (model, id) {
        console.log('in service getUserId id = ' + id);
        var s = '/login/' + id;
        console.log("s = " + s);
        return this.http.get(s);
    };
    /*Api Service Call to get Book detail by BookId */
    ApiserviceService.prototype.getBookId = function (book, id) {
        console.log('in service getBookId id = ' + id);
        var s = '/view/' + id;
        console.log("s = " + s);
        return this.http.get(s);
    };
    /*Api Service Call to add a book to Cart */
    ApiserviceService.prototype.addCart = function (book, id, id2) {
        console.log('in service addCart id = ' + id);
        var s = '/cart/' + id + '/' + id2;
        console.log("s = " + s);
        return this.http.post(s, book, httpOptions);
    };
    /*Api Service Call to add a Message */
    ApiserviceService.prototype.addMessage = function (messages) {
        console.log('in service addCart id = ');
        var s = '/message';
        console.log("s = " + s);
        return this.http.post(s, messages, httpOptions);
    };
    /*Api Service Call to retrieve Message */
    ApiserviceService.prototype.getMessage = function (messages, id) {
        console.log('in service addCart id = ' + id);
        var s = '/message/' + id;
        console.log("s = " + s);
        return this.http.get(s);
    };
    /*Api Service Call to add a book to wishlist */
    ApiserviceService.prototype.addWish = function (book, id, id2) {
        console.log('in service addCart id = ' + id);
        var s = '/wishlist/' + id + '/' + id2;
        console.log("s = " + s);
        return this.http.post(s, book, httpOptions);
    };
    /*Api Service Call to get All Books To display on hompage */
    ApiserviceService.prototype.getBook = function (book) {
        console.log('in service getBook');
        return this.http.get('/home');
    };
    /*Api Service Call to get User's Cart Details */
    ApiserviceService.prototype.getCart = function (carts, id) {
        console.log('in service addCart id = ' + id);
        var s = '/cart/get/' + id;
        console.log("s = " + s);
        return this.http.get(s);
    };
    /*Api Service Call to get User's wishlist Details */
    ApiserviceService.prototype.getWish = function (carts, id) {
        console.log('in service addCart id = ' + id);
        var s = '/wishlist/get/' + id;
        console.log("s = " + s);
        return this.http.get(s);
    };
    /*Api Service Call to delete an Item From User's cart */
    ApiserviceService.prototype.delCart = function (carts, id, id2) {
        console.log('in service delCart id = ' + id + " " + id2);
        var s = '/remove/' + id + '/' + id2;
        console.log("s = " + s);
        return this.http.post(s, carts, httpOptions);
    };
    /*Api Service Call to delete an Item From User's wishList */
    ApiserviceService.prototype.delWish = function (carts, id, id2) {
        console.log('in service delCart id = ' + id + " " + id2);
        var s = '/wishlistremove/' + id + '/' + id2;
        console.log("s = " + s);
        return this.http.post(s, carts, httpOptions);
    };
    /*Api Service Call to delete a post posted by User */
    ApiserviceService.prototype.deleteBook = function (books, id, id2) {
        console.log('in service delCart id = ' + id + " " + id2);
        var s = '/bokdel/' + id + '/' + id2;
        console.log("s = " + s);
        return this.http.post(s, books, httpOptions);
    };
    /*Api Service Call for checkout */
    ApiserviceService.prototype.checkOut = function (id) {
        console.log('in service delCart id = ' + id);
        var s = '/checkout/' + id;
        console.log("s = " + s);
        return this.http.post(s, httpOptions);
    };
    /*Api Service Call to Get count of Cart Items */
    ApiserviceService.prototype.getCartcount = function (id) {
        console.log('in service getCartcount id = ' + id);
        var s = '/cart/count/' + id;
        console.log("s = " + s);
        return this.http.get(s);
    };
    /*Api Service Call to Get count of Wish Items */
    ApiserviceService.prototype.getWishcount = function (id) {
        console.log('in service getCartcount id = ' + id);
        var s = '/wishlist/count/' + id;
        console.log("s = " + s);
        return this.http.get(s);
    };
    /*Api Service Call to get min and max price of books  */
    ApiserviceService.prototype.getMinMax = function () {
        console.log('in service minmax');
        var s = '/minmax';
        console.log("s = " + s);
        return this.http.get(s);
    };
    /*Api Service Call to get All Books between a specified price range */
    ApiserviceService.prototype.getBookByPrice = function (book, id) {
        console.log('in service getBookByPrice' + id);
        var s = '/search/price/' + id;
        return this.http.get(s);
    };
    /*Api Service Call to get All Books by a search Query */
    ApiserviceService.prototype.getBookByQuery = function (book, id) {
        console.log('in service getBookByQuery' + id);
        var s = '/search/' + id;
        return this.http.get(s);
    };
    /*Api Service Call to Add a book */
    ApiserviceService.prototype.addBook = function (book) {
        console.log("in service");
        console.log(book);
        return this.http.post('/addproduct', book, httpOptions);
    };
    ApiserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiserviceService);
    return ApiserviceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var _single_view_single_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./single-view/single-view.component */ "./src/app/single-view/single-view.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: '',
        redirectTo: 'body',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    },
    {
        path: 'login',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    },
    {
        path: 'body',
        component: _body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"]
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"]
    },
    {
        path: 'sell',
        component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"]
    },
    {
        path: 'view/:id',
        component: _single_view_single_view_component__WEBPACK_IMPORTED_MODULE_14__["SingleViewComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"]
    },
    {
        path: 'wish',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__["WishlistComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"],
                _single_view_single_view_component__WEBPACK_IMPORTED_MODULE_14__["SingleViewComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__["WishlistComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes),
                angular_file_uploader__WEBPACK_IMPORTED_MODULE_13__["AngularFileUploaderModule"],
            ],
            providers: [_apiservice_service__WEBPACK_IMPORTED_MODULE_10__["ApiserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<h2> Welcome <b> {{fname}} </b> ......!!</h2>\n<div class=\"row\" >\n    <div class=\"col-md-8\" style=\"margin-left: 10%\">\n            <div class=\"row\" style=\"margin-left: 10%\">\n                <div class=\"col-4 col-md-3 well\">\n                        Price Low to High<input type=\"radio\" name=\"pricesort\" id=\"lowtohigh\" (click)= \"sortPrice(12)\"><br>\n                        Price High to Low<input type=\"radio\" name=\"pricesort\" id=\"hightolow\" (click)= \"sortPrice(21)\">\n                </div>\n                <div class=\"col-4 col-md-3 well\">\n                        Search By Condition\n                        <select ngModel name=\"condition\">\n                                <option value=\"New\"   (click)= \"search('new')\">New</option>\n                                <option value=\"Almost New\"   (click)= \"search('Almost New')\">Almost New</option>\n                                <option value=\"Slight Damage\"   (click)= \"search('Slight Damage')\">Slight Damage</option>\n                                <option value=\"Worn\" (click)= \"search('Worn')\">Worn</option>\n                              </select>\n                </div>\n                <div class=\"col-4 col-md-4 well\"> \n                  \n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search1\" id=\"serach1\" [(ngModel)]=\"query\" (keyup.enter)=\"search(query)\">\n\n                \n            </div>\n            <div class=\"col-4 col-md-2 well\"> \n                <button class=\"btn btn-sm btn-success\" (click)= \"reset()\" > Reset Filters</button>\n            </div>\n\n    </div>\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\" id=\"product-list\" style=\"margin-left: 10%\">\n            \n                \n        <div class=\" col-xs-7 col-sm-6 col-md-6 col-lg-5 card\" style=\"margin-top:5px; \" *ngFor=\"let book of books\">\n            <table class=\"well\" style=\"text-align: center;\" width=\"300\" height=\"200\">\n                <tr ><td rowspan=\"5\"><img src=\"assets/Untitled.jpg\" alt=\"image\" style=\"height: 150px; width: 130px;\"></td><td><b> {{book.name}}</b></td></tr>\n                <tr><td>By : {{book.authorName}}</td></tr>\n                <tr><td> {{book.condition}} Condition</td></tr>\n                <tr><td><del>₹ {{book.actualPrice}}</del><b> ₹ {{book.resellPrice}}</b></td></tr>\n                <tr><td> <button class=\"btn btn-primary\" (click)= \"view(book.id)\">Know More</button> </td></tr>\n            </table>\n            <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-2\"></div>\n        </div>\n     \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyComponent = /** @class */ (function () {
    function BodyComponent(apiservice, currentRoute, router) {
        this.apiservice = apiservice;
        this.currentRoute = currentRoute;
        this.router = router;
        this.user = '';
    }
    BodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in init");
        //console.log(JSON.parse(sessionStorage.getItem('user')))
        if (JSON.parse(sessionStorage.getItem('user')) == null) {
            console.log("in if ");
        }
        else {
            console.log("in else");
            this.user = JSON.parse(sessionStorage.getItem('user'));
            this.fname = this.user.fname;
        }
        this.apiservice.getBook(this.books).subscribe(function (books) {
            console.log("in service call");
            _this.books = books;
            console.log(_this.books);
        });
    };
    BodyComponent.prototype.view = function (id) {
        console.log("in view function id= " + id);
        this.router.navigate(['view', id]);
    };
    BodyComponent.prototype.search = function (query) {
        var _this = this;
        console.log(query);
        this.apiservice.getBookByQuery(this.books, query).subscribe(function (books) {
            console.log("in service call getBookByQuery");
            _this.books = books;
            console.log(_this.books);
        });
    };
    BodyComponent.prototype.sortPrice = function (query) {
        var _this = this;
        console.log(query);
        this.apiservice.getMinMax().subscribe(function (books) {
            console.log("in service call getBookByQuery");
            _this.apiservice.getBookByPrice(_this.books, query).subscribe(function (books) {
                console.log("in service call getBookByQuery");
                _this.books = books;
                console.log(_this.books);
            });
        });
    };
    BodyComponent.prototype.reset = function () {
        var _this = this;
        this.query = '';
        this.apiservice.getBook(this.books).subscribe(function (books) {
            console.log("in service call");
            _this.books = books;
            console.log(_this.books);
        });
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n    width: 50px;\r\n    padding: 3px 0 0 0;\r\n    text-align: center;\r\n}\r\n\r\n.cartImg {\r\n    padding: 14px;\r\n    padding-bottom: 0;\r\n    margin-right: 15px;\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1 style=\"text-align: center;\"> This is your Cart </h1>\n<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-12 \">\n                <table class=\"table table-hover\" id=\"show\">\n                    <thead>\n                    <tr class=\"row\">\n                        <th class=\"col-md-4\">PRODUCT NAME</th>\n                        <th class=\"col-md-2\">PRICE</th>\n                        <th class=\"col-md-2\">REMOVE</th>\n    \n                    </tr>\n                    </thead>\n                    <tbody id=\"showTableBody\" ng-init=\"i=0\">\n                    <tr class=\"row\" *ngFor=\"let book of carts\">\n                        <td class=\"col-md-4\">{{book.product.name}}</td>\n                        <td class=\"col-md-2\"><i class=\"fa fa-inr\" aria-hidden=\"true\" ></i>&#8377;  {{book.product.resellPrice}}</td> \n                        <td class=\"col-md-2\"><button class=\"btn btn-warning\" (click)= \"remove(book.id)\" name=\"btn\">REMOVE</button></td>\n                    </tr>\n                    <tr class=\"row\">\n                        <td class=\"col-md-2\">Total If you Bought the New Books :</td>\n                        <td class=\"col-md-2\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&#8377; <del>{{j}}</del> </td>\n                    </tr>\n                    <tr class=\"row\">\n                        <td class=\"col-md-2\">Total you Have to Pay :</td>\n                        <td class=\"col-md-2\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&#8377;  {{i}}</td>\n                    </tr>\n\n                    <tr class=\"row\">\n\n                        <td class=\"col-md-2\">\n                            <a routerLink=\"/\" class='btn btn-primary' style='font-size: 12px;'>\n                                <i class='fa fa-shopping-cart' aria-hidden='true'></i>\n                                Continue Shopping\n                            </a>\n                        </td>\n                        <td class=\"col-md-2\">\n                            <button class='btn btn-success' style='font-size: 12px;' (click)= \"checkout()\">\n                                Checkout\n                                <i class='fa fa-arrow-right' aria-hidden='true'></i>\n                            </button>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(router, apiservice, router1) {
        this.router = router;
        this.apiservice = apiservice;
        this.router1 = router1;
        this.i = 0;
        this.j = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        //    this.router.paramMap.subscribe( (params: ParamMap) =>{
        //    this.selected = +(params.get('id'));
        //    console.log("in cart")
        //    console.log(this.selected);
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.apiservice.getCart(this.carts, this.user.id).subscribe(function (carts) {
            console.log("in service call getcomponent = ");
            console.log(carts);
            _this.carts = carts;
            for (var data in carts) {
                //console.log(" price = ")
                _this.i += carts[data].product.resellPrice;
                _this.j += carts[data].product.actualPrice;
            }
        });
    };
    CartComponent.prototype.remove = function (id) {
        var _this = this;
        this.i = 0;
        this.j = 0;
        console.log(id);
        console.log("userid = ");
        console.log(this.user.id);
        this.apiservice.delCart(this.carts, id, this.user.id).subscribe(function (carts) {
            console.log("in service call delCart = ");
            console.log(carts);
            _this.carts = carts;
            for (var data in carts) {
                //console.log(" price = ")
                _this.i += carts[data].product.resellPrice;
                _this.j += carts[data].product.actualPrice;
            }
        });
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        this.i = 0;
        this.j = 0;
        console.log("userid = ");
        console.log(this.user.id);
        this.apiservice.checkOut(this.user.id).subscribe(function (carts) {
            console.log("in service call delCart = ");
            _this.router1.navigateByUrl('/');
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n@import url(http://fonts.googleapis.com/css?family=Fjalla+One);\r\n@import url(http://fonts.googleapis.com/css?family=Gudea);\r\n.footer1 {\r\n    background: #fff repeat scroll left top;\r\n\tpadding-top: 40px;\r\n\tpadding-right: 0;\r\n\tpadding-bottom: 20px;\r\n\tpadding-left: 0;/*\tborder-top-width: 4px;\r\n\tborder-top-style: solid;\r\n\tborder-top-color: #003;*/\r\n}\r\n.title-widget {\r\n\tcolor: #898989;\r\n\tfont-size: 20px;\r\n\tfont-weight: 300;\r\n\tline-height: 1;\r\n\tposition: relative;\r\n\ttext-transform: uppercase;\r\n\tfont-family: 'Fjalla One', sans-serif;\r\n\tmargin-top: 0;\r\n\tmargin-right: 0;\r\n\tmargin-bottom: 25px;\r\n\tmargin-left: 0;\r\n\tpadding-left: 28px;\r\n}\r\n.title-widget::before {\r\n    background-color: #ea5644;\r\n    content: \"\";\r\n    height: 22px;\r\n    left: 0px;\r\n    position: absolute;\r\n    top: -2px;\r\n    width: 5px;\r\n}\r\n.widget_nav_menu ul {\r\n    list-style: outside none none;\r\n    padding-left: 0;\r\n}\r\n.widget_archive ul li {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    content: \"\";\r\n    height: 3px;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 7px;\r\n    width: 3px;\r\n}\r\n.widget_nav_menu ul li {\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    line-height: 20px;\r\n\tposition: relative;\r\n    text-transform: uppercase;\r\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n    margin-bottom: 7px;\r\n    padding-bottom: 7px;\r\n\twidth:95%;\r\n}\r\n.title-median {\r\n    color: #636363;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    margin: 0 0 15px;\r\n    text-transform: uppercase;\r\n\tfont-family: 'Fjalla One', sans-serif;\r\n}\r\n.footerp p {font-family: 'Gudea', sans-serif; }\r\n.footer-bottom {\r\n    background-color: #15224f;\r\n    width: 100%;\r\n    position:absolute;\r\n    bottom:0;\r\n    width:100%;\r\n    height:50px;   /* Height of the footer */\r\n}\r\n.copyright {\r\n    color: #fff;\r\n    line-height: 30px;\r\n    min-height: 30px;\r\n    padding: 7px 0;\r\n}\r\n.design {\r\n    color: #fff;\r\n    line-height: 30px;\r\n    min-height: 30px;\r\n    padding: 7px 0;\r\n    text-align: right;\r\n}\r\n.design a {\r\n    color: #fff;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n\n<!--footer-->\n\n\n<div class=\"footer-bottom\">\n\n\t<div class=\"container\">\n\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\n\t\t\t\t<div class=\"copyright\">\n\n\t\t\t\t\t© 2015, Webenlance, All rights reserved\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\n\t\t\t\t<div class=\"design\">\n\n\t\t\t\t\t <a href=\"#\">Franchisee </a> |  <a target=\"_blank\" href=\"http://www.webenlance.com\">Web Design & Development by Webenlance</a>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Latest compiled and minified CSS -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<!-- Optional theme -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n<!-- Latest compiled and minified JavaScript -->\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">Home</a>\n    </div>  \n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\" id =\"navbarcustom\">\n          <li id=\"signup\"><a routerLink=\"/signup\">Signup</a></li>\n          <li id=\"login\"><a routerLink=\"/signup\">Login </a></li>\n          <li id=\"cart\"><a routerLink=\"/cart\" id=\"carttext\">Cart :</a></li>\n          <li id=\"wishlist\"><a routerLink=\"/wish\" id=\"wishtext\">WishList</a></li>\n          <li id=\"logout\"><a routerLink=\"/logout\">LogOut</a></li>\n          <li id=\"sell\"><a routerLink=\"/sell\">SellBooks</a></li>\n          \n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(apiservice) {
        this.apiservice = apiservice;
        this.i = {};
        this.j = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this is the hiding mechanism 
        if (JSON.parse(sessionStorage.getItem('user')) == null) {
            console.log("in if ");
        }
        else {
            console.log("in else calculating cart value");
            var user = JSON.parse(sessionStorage.getItem('user'));
            var name = user.fname;
            this.apiservice.getCartcount(user.id).subscribe(function (i) {
                console.log("in service call getCartcount = ");
                _this.j = i.count;
                console.log("j=");
                console.log(_this.j);
                document.getElementById("carttext").innerText = "Cart :" + _this.j + " item(s)";
                _this.apiservice.getWishcount(user.id).subscribe(function (i) {
                    console.log("in service call getCartcount = ");
                    _this.j = i.count;
                    console.log("j=");
                    console.log(_this.j);
                    document.getElementById("wishtext").innerText = "WishList :" + _this.j + " item(s)";
                });
            });
        }
        console.log("session_name = ");
        console.log(name);
        if (name == undefined) {
            console.log("header in if");
            document.getElementById("logout").style.display = "none";
            document.getElementById("cart").style.display = "none";
            document.getElementById("wishlist").style.display = "none";
            document.getElementById("sell").style.display = "none";
        }
        else {
            console.log("header in else");
            document.getElementById("login").style.display = "none";
            document.getElementById("signup").style.display = "none";
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(currentRoute, router) {
        this.currentRoute = currentRoute;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        sessionStorage.clear();
        alert("logged out");
        this.router.navigateByUrl('/');
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/sell/sell.component.css":
/*!*****************************************!*\
  !*** ./src/app/sell/sell.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/*!******************************************!*\
  !*** ./src/app/sell/sell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  in sell books\n        <div class=\"top-content\">\n        \t\n            <div class=\"inner-bg\">\n                <div class=\"container\">\n                \t\n                    <div class=\"row\">\n                        <div class=\"col-sm-8 col-sm-offset-2 text\">\n                            <h1>BookShare Login &amp; Register</h1>\n\n                        </div>\n                    </div>\n                    \n                    <div class=\"row\" id=\"logmein\">                        \n                        <div class=\"col-sm-1 middle-border\" id=\"register\"></div>\n                        <div class=\"col-sm-1\"></div>\n                        \t\n                        <div class=\"col-sm-5 well\">\n                        \t\n                        \t<div class=\"form-box \">\n                        \t\t<div class=\"form-top\">\n\t                        \t\t<div class=\"form-top-left\">\n\t                        \t\t\t<h3>Sign up now</h3>\n\t                            \t\t<p>Fill in the form below to get instant access:</p>\n\t                        \t\t</div>\n\t                        \t\t<div class=\"form-top-right\">\n\t                        \t\t\t<i class=\"fa fa-pencil\"></i>\n\t                        \t\t</div>\n\t                            </div>\n\t                            <div class=\"form-bottom\">\n\t\t\t\t                    <form role=\"form\" #frm=\"ngForm\" (ngSubmit)=\"addUser(frm)\" class=\"registration-form\" enctype=\"multipart/form-data\">\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-first-name\">Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"name\" placeholder=\"Book name...\" class=\"form-first-name form-control\" id=\"name\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-last-name\">Author Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"authorName\" placeholder=\"Author name...\" class=\"form-last-name form-control\" id=\"authorName\">\n                      </div>\n                     \t\t\t\t\t\t <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-last-name\">Condition</label>\n\t\t\t\t\t\t\t\t\t\t\t\tCondition<select ngModel name=\"condition\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"New\">New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Almost New\">Almost New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Slight Damage\">Slight Damage</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Worn\">Worn</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </select>                     \n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-last-name\">Actual Price</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"actualPrice\" placeholder=\"Actual Price...\" class=\"form-last-name form-control\" id=\"actualPrice\">\n                      </div>\n                      <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-last-name\">Resell Price</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"resellPrice\" placeholder=\"Resell Price...\" class=\"form-last-name form-control\" id=\"resellPrice\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n                      <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"form-email\">Image</label>\n                        <input type=\"file\" (change)=\"onFileSelected($event)\">\n                      </div>\n\t\t\t\t                        <button type=\"submit\" class=\"btn btn-success\">Sell it to NeedFul...!</button>\n                            </form>\n                           \n\t\t\t                    </div>\n                        \t</div>\n                        \t\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n            \n        </div>\n\n        <!-- Footer -->\n\n\n      "

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellComponent = /** @class */ (function () {
    function SellComponent(apiservice, http) {
        this.apiservice = apiservice;
        this.http = http;
    }
    SellComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('user')) == null) {
            console.log("in if ");
        }
        else {
            console.log("in else");
            this.user = JSON.parse(sessionStorage.getItem('user'));
            console.log("user = ");
            console.log(this.user);
        }
    };
    SellComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    // onUpload() {
    //   var fd = new FormData();
    //   fd.append('image', this.selectedFile, this.selectedFile.name);
    //   this.http.post('http://localhost:3333/upload', fd).subscribe(res=>{
    //     console.log(res)
    //   })
    // }
    SellComponent.prototype.addUser = function (frm) {
        var _this = this;
        console.log("model = ");
        console.log(frm.value);
        var s = '';
        var fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        console.log("fd = ");
        console.log(fd);
        this.http.post('http://localhost:3333/upload', fd).subscribe(function (res) {
            console.log("image uploaded");
            s = res.toString();
            console.log(res);
            console.log("userid= ");
            console.log(_this.user.id);
            var book = {
                name: frm.value.name,
                authorName: frm.value.authorName,
                condition: frm.value.condition,
                actualPrice: frm.value.actualPrice,
                resellPrice: frm.value.resellPrice,
                image: 'uploads/' + s,
                postedby: _this.user.id,
            };
            console.log("service call");
            console.log(book);
            _this.apiservice.addBook(book).subscribe(function (book) {
                //this.getModels();    
            });
        });
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n        <div class=\"top-content\">\n        \t\n            <div class=\"inner-bg\">\n                <div class=\"container\">\n                \t\n                    <div class=\"row\">\n                        <div class=\"col-sm-8 col-sm-offset-2 text\">\n                            <h1>BookShare Login &amp; Register</h1>\n\n                        </div>\n                    </div>\n                    \n                    <div class=\"row\" id=\"logmein\">\n                        <div class=\"col-sm-5 well\">\n                        \t\n                        \t<div class=\"form-box\" >\n\t                        \t<div class=\"form-top\">\n\t                        \t\t<div class=\"form-top-left\">\n\t                        \t\t\t<h3>Login to our site</h3>\n\t                            \t\t<p>Enter username and password to log on:</p>\n\t                        \t\t</div>\n\t                        \t\t<div class=\"form-top-right\">\n\t                        \t\t\t<i class=\"fa fa-key\"></i>\n\t                        \t\t</div>\n\t                            </div>\n\t                            <div class=\"form-bottom\">\n\t\t\t\t                    <form role=\"form\" #frn=\"ngForm\" (ngSubmit)=\"logUser(frn)\" class=\"login-form\">\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                    \t\t<label class=\"sr-only\" for=\"email\">Email</label>\n\t\t\t\t                        \t<input type=\"email\" ngModel name=\"email\" placeholder=\"Username...\" class=\"email form-control\" id=\"email\">\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class=\"form-group\">\n\t\t\t\t                        \t<label class=\"sr-only\" for=\"password\">Password</label>\n\t\t\t\t                        \t<input type=\"password\" ngModel name=\"password\" placeholder=\"Password...\" class=\"password form-control\" id=\"password\">\n\t\t\t\t                        </div>\n\t\t\t\t                        <button type=\"submit\" class=\"btn btn-danger\">Sign In!</button>\n\t\t\t\t                    </form>\n\t\t\t                    </div>\n\t\t                    </div>\n\n\t                        \n                        </div>\n                        \n                        <div class=\"col-sm-1 middle-border\" id=\"register\"></div>\n                        <div class=\"col-sm-1\"></div>\n                        \t\n                        <div class=\"col-sm-5 well\">\n                        \t\n                        \t<div class=\"form-box \">\n                        \t\t<div class=\"form-top\">\n\t                        \t\t<div class=\"form-top-left\">\n\t                        \t\t\t<h3>Sign up now</h3>\n\t                            \t\t<p>Fill in the form below to get instant access:</p>\n\t                        \t\t</div>\n\t                        \t\t<div class=\"form-top-right\">\n\t                        \t\t\t<i class=\"fa fa-pencil\"></i>\n\t                        \t\t</div>\n\t                            </div>\n\t                            <div class=\"form-bottom\">\n\t\t\t\t                    <form role=\"form\" #frm=\"ngForm\" (ngSubmit)=\"addUser(frm)\" class=\"registration-form\">\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-first-name\">First name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"fname\" placeholder=\"First name...\" class=\"form-first-name form-control\" id=\"fname\" required>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-last-name\">Last name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"lname\" placeholder=\"Last name...\" class=\"form-last-name form-control\" id=\"lname\">\n                      </div>\n                      <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-last-name\">Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"address\" placeholder=\"Address...\" class=\"form-last-name form-control\" id=\"address\">\n                      </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-last-name\">College Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"college\" placeholder=\"college name...\" class=\"form-last-name form-control\" id=\"college\">\n                      </div>\n                      <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-last-name\">Course Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" ngModel name=\"course\" placeholder=\"course name...\" class=\"form-last-name form-control\" id=\"course\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-email\">Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" ngModel name=\"email\" placeholder=\"Email...\" class=\"form-email form-control\" id=\"email\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-mob\">Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" ngModel name=\"mob\" placeholder=\"Mobile Number...\" class=\"form-email form-control\" id=\"mob\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"form-pass\">Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" ngModel name=\"pass\" placeholder=\"password...\" class=\"form-email form-control\" id=\"pass\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t                        <button type=\"submit\" class=\"btn btn-success\">Sign me up!</button>\n\t\t\t\t                    </form>\n\t\t\t                    </div>\n                        \t</div>\n                        \t\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n            \n        </div>\n\n        <!-- Footer -->\n\n\n      "

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(apiservice, currentRoute, router) {
        this.apiservice = apiservice;
        this.currentRoute = currentRoute;
        this.router = router;
    }
    SignupComponent.prototype.addUser = function (frm) {
        var _this = this;
        console.log(frm.value);
        var model = {
            email: frm.value.email,
            password: frm.value.pass
        };
        this.apiservice.getUser(model).subscribe(function (model) {
            console.log("model = ");
            console.log(model);
            if (model == null) {
                console.log("inside if");
                var model_1 = {
                    fname: frm.value.fname,
                    lname: frm.value.lname,
                    address: frm.value.address,
                    college: frm.value.college,
                    course: frm.value.course,
                    email: frm.value.email,
                    mobile: frm.value.mob,
                    password: frm.value.pass
                };
                _this.apiservice.addUser(model_1).subscribe(function (model) {
                    //this.getModels();
                });
                alert("Account created..Login to Continue...!!");
                _this.router.navigateByUrl('/signup');
            }
            else {
                alert("EmailID already registered...!!");
            }
        });
    };
    SignupComponent.prototype.logUser = function (frn) {
        var _this = this;
        console.log(frn.value);
        console.log("frm value");
        var model = {
            email: frn.value.email,
            password: frn.value.password
        };
        this.apiservice.getUser(model).subscribe(function (model) {
            console.log("model = ");
            console.log(model);
            if (model == null) {
                alert("EmailID is not registered..!!");
            }
            else if (model.password == frn.value.password && model.email == frn.value.email) {
                console.log("in if login user successful");
                sessionStorage.setItem('user', JSON.stringify(model));
                alert("LogIn Successful...!!");
                _this.router.navigateByUrl('/');
            }
            else {
                console.log("in else login user unsuccessful");
                alert("Invalid EmailID OR Password..!!");
            }
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
        //this.getModels();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/single-view/single-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/single-view/single-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    margin: auto;\r\n    width: 60%;\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/single-view/single-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-view/single-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row center\" id=\"product-list\" >      \n    <div class=\"col-sm-8 card well\" style=\"margin-top:5px;\" *ngIf=\"books\">\n        <table class=\"table-hover well\" style=\"text-align: center;\">\n            <tr><td rowspan=\"8\" colspan=\"2\"><img src=\"assets/Untitled.jpg\" alt=\"image\" style=\"height: 200px; width: 150px;\"></td><td colspan=\"2\"><b> {{books.name}}</b></td></tr>\n            <tr><td colspan=\"2\">By : {{books.authorName}}</td></tr>\n            <tr><td colspan=\"2\"> {{books.condition}} Condition</td></tr>\n            <tr><td colspan=\"2\"><del>₹ {{books.actualPrice}}</del><b> ₹ {{books.resellPrice}}</b></td></tr>  \n            <tr><td colspan=\"2\">Seller Name :{{books.user.fname}} </td></tr>\n            \n              \n            \n                <tr *ngIf=\"user.id == books.user.id; else elseBlock\">\n                  <td colspan=\"2\">You Can Not Buy Your own Book...!!<button class=\"btn btn-danger\" (click)= \"delBook(books.id)\">Delete Your Post</button> </td>\n                </tr>\n                <ng-template #elseBlock><tr><td colspan=\"2\" > <button class=\"btn btn-primary\" (click)= \"addCart(books.id)\"> Add to Cart</button>\n                    &nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-primary\" (click)= \"addWish(books.id)\">Add to WishList</button></td></tr>\n              \n            </ng-template>\n            </table>\n    </div>\n    <div class=\"col-sm-7 card well\" style=\"margin-top:5px;\">\n        <table class=\"table-bordered\">\n            <tr><td><textarea rows=\"3\" cols=\"40\" style=\"resize:none\" placeholder=\"Ask seller your query here..!\" [(ngModel)]=\"query\"></textarea></td>\n              </tr><tr>  <td> <button class=\"btn btn-primary\" (click)= \"addMsg(books.id,query)\">Ask Seller</button> </td></tr>\n        </table>\n                  \n                        <table class=\"table-bordered\" style=\"text-align:center;\">\n                                <div class=\"well\" *ngFor=\"let messages of message\">\n                                      <tr>\n                                          <td>Posted By : {{ messages.user.fname }}<br> <small>{{ messages.createdAt| date:'longDate' }} ago</small></td>\n                                            </tr><tr>\n                                          <td><br>Comment :<i> <p>{{messages.text}}</p></i></td>\n                                      </tr>\n                                </div>\n                        </table>\n                  \n       \n    </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/single-view/single-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-view/single-view.component.ts ***!
  \******************************************************/
/*! exports provided: SingleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleViewComponent", function() { return SingleViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleViewComponent = /** @class */ (function () {
    function SingleViewComponent(router, apiservice, router1) {
        this.router = router;
        this.apiservice = apiservice;
        this.router1 = router1;
        this.j = 0;
    }
    SingleViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(sessionStorage.getItem('user')) == null) {
            this.user = '';
        }
        else {
            this.user = JSON.parse(sessionStorage.getItem('user'));
            console.log("tis.userid = ");
            console.log(this.user.id);
        }
        this.router.paramMap.subscribe(function (params) {
            _this.selected = +(params.get('id'));
            console.log(_this.selected);
            _this.apiservice.getBookId(_this.books, _this.selected).subscribe(function (books) {
                console.log("in service call");
                _this.books = books[0];
                console.log("this.books getbookId");
                console.log(_this.books);
                _this.apiservice.getMessage(_this.message, _this.books.id).subscribe(function (message) {
                    console.log("in service call");
                    _this.message = message;
                    console.log("this.books getbookId");
                    console.log(_this.message);
                });
            });
        });
    };
    SingleViewComponent.prototype.addCart = function (id) {
        var _this = this;
        if (this.user == '') {
            alert("PLease SignUp / LogIn to Continue...!!");
            this.router1.navigateByUrl('/login');
        }
        else {
            console.log("i=");
            console.log(id);
            console.log("in view function id= " + id);
            console.log(this.user);
            console.log("user id = ", this.user.id);
            //this.router1.navigate(['cart', id]);
            this.apiservice.addCart(this.books, id, this.user.id).subscribe(function (books) {
                console.log("in service addcart call");
                console.log(books.status);
                if (books.status == 1) {
                    console.log("in if");
                    alert("Item Succesfully Added to Cart");
                }
                else {
                    console.log("in else");
                    alert("Item already added in cart...!!");
                }
                _this.router1.navigateByUrl('/');
            });
        }
    };
    SingleViewComponent.prototype.addWish = function (id) {
        var _this = this;
        if (this.user == '') {
            alert("PLease SignUp / LogIn to Continue...!!");
            this.router1.navigateByUrl('/login');
        }
        else {
            console.log("i=");
            console.log(id);
            console.log("in view function id= " + id);
            console.log(this.user);
            console.log("user id = ", this.user.id);
            //this.router1.navigate(['cart', id]);
            this.apiservice.addWish(this.books, id, this.user.id).subscribe(function (books) {
                console.log("in service addcart call status : ");
                console.log(books.status);
                if (books.status == 1) {
                    console.log("in if");
                    alert("Item Succesfully Added to Wishlist..!!");
                }
                else {
                    console.log("in else");
                    alert("Item already added in Wishlist / Cart...!!");
                }
                _this.router1.navigateByUrl('/');
            });
        }
    };
    SingleViewComponent.prototype.delBook = function (id) {
        var _this = this;
        console.log(id);
        this.apiservice.deleteBook(this.books, id, this.user.id).subscribe(function (books) {
            console.log("in service call");
            _this.books = books;
            console.log(_this.books);
        });
    };
    SingleViewComponent.prototype.addMsg = function (pid, query) {
        var _this = this;
        console.log(typeof (pid));
        console.log(query);
        if (query == null) {
            alert("Please type a query to Post...!!");
        }
        else {
            var message = {
                productkey: pid,
                text: query,
                postedby: this.user.id
            };
            this.apiservice.addMessage(message).subscribe(function (message) {
                console.log("in service call add message");
                console.log(message);
                _this.apiservice.getMessage(_this.message, pid).subscribe(function (message) {
                    console.log("in service call");
                    _this.message = message;
                    console.log("this.books getbookId");
                    console.log(_this.message);
                });
                _this.router1.navigateByUrl('/');
            });
        }
    };
    SingleViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-view',
            template: __webpack_require__(/*! ./single-view.component.html */ "./src/app/single-view/single-view.component.html"),
            styles: [__webpack_require__(/*! ./single-view.component.css */ "./src/app/single-view/single-view.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SingleViewComponent);
    return SingleViewComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1 style=\"text-align: center;\"> This is your WishLIst </h1>\n<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-12 \">\n                <table class=\"table table-hover\" id=\"show\">\n                    <thead>\n                    <tr class=\"row\">\n                        <th class=\"col-md-4\">PRODUCT NAME</th>\n                        <th class=\"col-md-2\">PRICE</th>\n                        <th class=\"col-md-2\">REMOVE</th>\n    \n                    </tr>\n                    </thead>\n                    <tbody id=\"showTableBody\" ng-init=\"i=0\">\n                    <tr class=\"row\" *ngFor=\"let book of carts\">\n                        <td class=\"col-md-4\">{{book.product.name}}</td>\n                        <td class=\"col-md-2\"><i class=\"fa fa-inr\" aria-hidden=\"true\" ></i>&#8377;  {{book.product.resellPrice}}</td> \n                        <td class=\"col-md-2\"><button class=\"btn btn-warning\" (click)= \"remove(book.id)\" name=\"btn\">REMOVE</button></td>\n                        <td class=\"col-md-2\"><button class=\"btn btn-Success\" (click)= \"addCart(book.product.id)\" name=\"btn\">Add to Cart</button></td>\n                    </tr>\n                    <tr class=\"row\">\n                        <td class=\"col-md-2\">Total If you Bought the New Books :</td>\n                        <td class=\"col-md-2\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&#8377; <del>{{j}}</del> </td>\n                    </tr>\n                    <tr class=\"row\">\n                        <td class=\"col-md-2\">Total you Have to Pay :</td>\n                        <td class=\"col-md-2\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&#8377;  {{i}}</td>\n                    </tr>\n\n                    <tr class=\"row\">\n\n                        <td class=\"col-md-2\">\n                            <a routerLink=\"/\" class='btn btn-primary' style='font-size: 12px;'>\n                                <i class='fa fa-shopping-cart' aria-hidden='true'></i>\n                                Continue Shopping\n                            </a>\n                        </td>\n\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(router, apiservice, router1) {
        this.router = router;
        this.apiservice = apiservice;
        this.router1 = router1;
        this.i = 0;
        this.j = 0;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.apiservice.getWish(this.carts, this.user.id).subscribe(function (carts) {
            console.log("in service call getcomponent = ");
            console.log(carts);
            _this.carts = carts;
            for (var data in carts) {
                //console.log(" price = ")
                _this.i += carts[data].product.resellPrice;
                _this.j += carts[data].product.actualPrice;
            }
        });
    };
    WishlistComponent.prototype.remove = function (id) {
        var _this = this;
        this.i = 0;
        this.j = 0;
        console.log(id);
        console.log("userid = ");
        console.log(this.user.id);
        this.apiservice.delWish(this.carts, id, this.user.id).subscribe(function (carts) {
            console.log("in service call delCart = ");
            console.log(carts);
            _this.carts = carts;
            for (var data in carts) {
                //console.log(" price = ")
                _this.i += carts[data].product.resellPrice;
                _this.j += carts[data].product.actualPrice;
            }
        });
    };
    WishlistComponent.prototype.addCart = function (id) {
        var _this = this;
        if (this.user == '') {
            alert("PLease SignUp / LogIn to Continue...!!");
            this.router1.navigateByUrl('/login');
        }
        else {
            console.log("i=");
            console.log(id);
            console.log("in view function id= " + id);
            console.log(this.user);
            console.log("user id = ", this.user.id);
            //this.router1.navigate(['cart', id]);
            this.apiservice.addCart(this.books, id, this.user.id).subscribe(function (books) {
                console.log("in service addcart call");
                console.log(books.status);
                if (books.status == 1) {
                    console.log("in if");
                    alert("Item Succesfully Added to Cart");
                }
                else {
                    console.log("in else");
                    alert("Item already added in cart...!!");
                }
                _this.router1.navigateByUrl('/');
            });
        }
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AKASH\Desktop\angular\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map