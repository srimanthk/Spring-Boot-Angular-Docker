webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-unit></app-unit>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var unit_component_1 = __webpack_require__("./src/app/unit.component.ts");
var unit_service_1 = __webpack_require__("./src/app/unit.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                unit_component_1.UnitComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                unit_service_1.UnitConversionService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/unit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/unit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Temperature</h2>\n  <input #textbox1 type=\"number\" [(ngModel)]=\"tInput\" min=\"1\" required>\n  <button (click)=\"temperatureConversion(textbox1.value, 'ceToF')\">Celsius To Fahrenheit</button>\n  <button (click)=\"temperatureConversion(textbox1.value, 'fToCe')\">Fahrenheit To Celsius</button>\n  <h3>Result: {{tOutPut}} </h3>\n</div>\n\n<div>\n  <h2>Weight</h2>\n  <input #textbox2 type=\"number\" [(ngModel)]=\"wInput\" min=\"1\" required>\n  <button (click)=\"weightConversion(textbox2.value, 'kgToLb')\">Kilograms To Pounds</button>\n  <button (click)=\"weightConversion(textbox2.value, 'lbToKg')\">Pounds To Kilograms</button>\n  <h3>Result: {{wOutPut}} </h3>\n</div>\n\n<div>\n  <h2>Distance</h2>\n  <input #textbox3 type=\"number\" [(ngModel)]=\"dInput\" min=\"1\" required>\n  <button (click)=\"distanceConversion(textbox3.value, 'kmToMi')\">Kilometers To Miles</button>\n  <button (click)=\"distanceConversion(textbox3.value, 'miToKm')\">Miles To Kilometers</button>\n  <h3>Result: {{dOutPut}} </h3>\n</div>\n"

/***/ }),

/***/ "./src/app/unit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var unit_service_1 = __webpack_require__("./src/app/unit.service.ts");
var UnitComponent = /** @class */ (function () {
    //Create constructor to get service instance
    function UnitComponent(unitConversionService) {
        this.unitConversionService = unitConversionService;
        //Component properties
        this.tInput = null;
        this.tOutPut = null;
        this.wInput = null;
        this.wOutPut = null;
        this.dInput = null;
        this.dOutPut = null;
    }
    UnitComponent.prototype.ngOnInit = function () { };
    //Temperature
    UnitComponent.prototype.temperatureConversion = function (tInput, convertType) {
        var _this = this;
        this.statusCode = null;
        this.unitConversionService.temperatureConversion(tInput, convertType)
            .subscribe(function (unit) {
            _this.tOutPut = unit.result;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    //Weight
    UnitComponent.prototype.weightConversion = function (wInput, convertType) {
        var _this = this;
        this.statusCode = null;
        this.unitConversionService.weightConversion(wInput, convertType)
            .subscribe(function (unit) {
            _this.wOutPut = unit.result;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    //Distance
    UnitComponent.prototype.distanceConversion = function (dInput, convertType) {
        var _this = this;
        this.statusCode = null;
        this.unitConversionService.distanceConversion(dInput, convertType)
            .subscribe(function (unit) {
            _this.dOutPut = unit.result;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    UnitComponent = __decorate([
        core_1.Component({
            selector: 'app-unit',
            template: __webpack_require__("./src/app/unit.component.html"),
            styles: [__webpack_require__("./src/app/unit.component.css")]
        }),
        __metadata("design:paramtypes", [unit_service_1.UnitConversionService])
    ], UnitComponent);
    return UnitComponent;
}());
exports.UnitComponent = UnitComponent;


/***/ }),

/***/ "./src/app/unit.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var UnitConversionService = /** @class */ (function () {
    //Create constructor to get Http instance
    function UnitConversionService(http) {
        this.http = http;
        //URLs for CRUD operations
        this.temperatureUrl = '/api/unitconversion/temperature';
        this.weightUrl = '/api/unitconversion/weight';
        this.distanceUrl = '/api/unitconversion/distance';
    }
    UnitConversionService.prototype.temperatureConversion = function (input, convertType) {
        var cpHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var cpParams = new http_1.URLSearchParams();
        cpParams.append('input', input);
        cpParams.append('convertType', convertType);
        var options = new http_1.RequestOptions({
            headers: cpHeaders,
            search: cpParams
        });
        return this.http.get(this.temperatureUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UnitConversionService.prototype.weightConversion = function (input, convertType) {
        var cpHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var cpParams = new http_1.URLSearchParams();
        cpParams.append('input', input);
        cpParams.append('convertType', convertType);
        var options = new http_1.RequestOptions({
            headers: cpHeaders,
            search: cpParams
        });
        return this.http.get(this.weightUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UnitConversionService.prototype.distanceConversion = function (input, convertType) {
        var cpHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var cpParams = new http_1.URLSearchParams();
        cpParams.append('input', input);
        cpParams.append('convertType', convertType);
        var options = new http_1.RequestOptions({
            headers: cpHeaders,
            search: cpParams
        });
        return this.http.get(this.distanceUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UnitConversionService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    UnitConversionService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs_1.Observable.throw(error.status);
    };
    UnitConversionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UnitConversionService);
    return UnitConversionService;
}());
exports.UnitConversionService = UnitConversionService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map