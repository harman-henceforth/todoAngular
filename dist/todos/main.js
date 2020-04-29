(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <input class=\"form-control mb-4\" [(ngModel)]=\"newTaskName$\" (keyup.enter)=\"addNewTask()\" id=\"tableSearch\" type=\"text\"\n    placeholder=\"What need to be done?\">\n\n  <table class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th>Task</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody id=\"myTable\" >\n      <tr  *ngFor=\"let task of tasksList;let i = index\">\n\n        <td>\n\n          <div class=\"custom-control custom-checkbox\">\n            <input (change)=\"statusTask(task)\" type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck{{i+1}}\" [checked]=\"task.completed\">\n            <label class=\"custom-control-label\" for=\"customCheck{{i+1}}\"></label>\n            {{task.title}}\n            </div>\n\n            </td>\n        <td> <a href=\"javascript:\" (click)=\"deleteTask(task)\">Delete</a>\n        </td>\n\n      </tr>\n\n      <tr *ngIf=\"!tasksList.length\">\n        <td colspan=\"4\" class=\"text-center\">\n          <i>No tasks</i>\n        </td>\n      </tr>\n    </tbody>\n\n    <tfoot >\n      <tr>\n\n        <td colspan=\"4\" >\n          <!-- <span>dsflkjf</span> -->\n          <div *ngIf=\"tasksList.length\">\n            {{tasksList.length}} Items left\n          </div>\n          <div class=\"text-right\">\n            <button type=\"button\" class=\"btn btn-outline-info m-2\"  routerLinkActive=\"router-link-active\" [ngClass]=\"{active: activeRoute('all')}\"  [routerLink]=\"['/all']\" >All</button>\n            <button type=\"button\" [ngClass]=\"{active: activeRoute('active')}\" class=\"btn btn-outline-info m-2\" [routerLink]=\"['/active']\">Active</button>\n            <button [routerLink]=\"['/completed']\" routerLinkActive=\"router-link-active\"  type=\"button\" class=\"btn btn-outline-info m-2\" [ngClass]=\"{active: activeRoute('completed')}\" >Complete</button>\n            <span><a href=\"javascript:\" (click)=\"clearAllTask()\" class=\"btn-outline-info\">Clear all</a></span>\n          </div>\n\n\n        </td>\n      </tr>\n    </tfoot>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/task/task.component */ "./src/app/task/task.component.ts");




var routes = [
    { path: '', component: src_app_task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], data: { type: '' } },
    { path: 'all', component: src_app_task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], data: { type: '' } },
    { path: 'active', component: src_app_task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], data: { type: 0 } },
    { path: 'completed', component: src_app_task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], data: { type: 1 } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todos';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                src_app_task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task/task.component.scss":
/*!******************************************!*\
  !*** ./src/app/task/task.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 2rem 0rem;\n}\n\nh4 {\n  margin: 2rem 0rem 1rem;\n}\n\n.table-image td, .table-image th {\n  vertical-align: middle;\n}\n\n[type=radio]:checked,\n[type=radio]:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n\n[type=radio]:checked + label,\n[type=radio]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #666;\n}\n\n[type=radio]:checked + label:before,\n[type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #ddd;\n  border-radius: 100%;\n  background: #fff;\n}\n\n[type=radio]:checked + label:after,\n[type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #F87DA9;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n}\n\n[type=radio]:not(:checked) + label:after {\n  opacity: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n[type=radio]:checked + label:after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlbmNlZm9ydGgvUHJvamVjdHMvdG9kb3Mvc3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREdFO0VBQ0Usc0JBQUE7QUNBSjs7QURJQTs7RUFFSSxrQkFBQTtFQUNBLGFBQUE7QUNESjs7QURHQTs7RUFHSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDREo7O0FER0E7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBOztFQUVJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW0gMHJlbTtcbn1cblxuaDQge1xuICBtYXJnaW46IDJyZW0gMHJlbSAxcmVtO1xufVxuXG4udGFibGUtaW1hZ2Uge1xuICB0ZCwgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cblxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkLFxuW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTk5OTlweDtcbn1cblt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsLFxuW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWxcbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICM2NjY7XG59XG5bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcblt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI0Y4N0RBOTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW0gMHJlbTtcbn1cblxuaDQge1xuICBtYXJnaW46IDJyZW0gMHJlbSAxcmVtO1xufVxuXG4udGFibGUtaW1hZ2UgdGQsIC50YWJsZS1pbWFnZSB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cblt0eXBlPXJhZGlvXTpjaGVja2VkLFxuW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05OTk5cHg7XG59XG5cblt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwsXG5bdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM2NjY7XG59XG5cblt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxuW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcblt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjRjg3REE5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.service */ "./src/app/task/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TaskComponent = /** @class */ (function () {
    function TaskComponent(taskService, route, router) {
        var _this = this;
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.tasksList = [];
        this.completedTasks = [];
        // activeTasks: Array<any> = [];
        this.itemLeft = 0;
        this.isActiveList = true;
        var subscription = router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                console.log(e);
                _this.getTasks();
                subscription.unsubscribe();
            }
        });
    }
    TaskComponent.prototype.ngOnInit = function () {
        console.log(this.route.snapshot.data);
        // this.getTasks();
    };
    TaskComponent.prototype.getTasks = function () {
        var _this = this;
        var request = {
            completed: this.route.snapshot.data.type
        };
        this.taskService.getTask(request).subscribe(function (res) {
            console.log(res);
            _this.tasksList = res;
        });
    };
    TaskComponent.prototype.addNewTask = function () {
        var _this = this;
        // add new task into tasks list
        var request = {
            title: this.newTaskName$
        };
        this.taskService.addNewTask(request).subscribe(function (res) {
            console.log(res);
            _this.getTasks();
            _this.newTaskName$ = '';
        });
    };
    TaskComponent.prototype.statusTask = function (task) {
        var _this = this;
        var request = {
            id: task.id,
            completed: task.completed ? 0 : 1,
            title: task.title,
            order: task.order
        };
        this.taskService.statusTask(request).subscribe(function (res) {
            console.log(res);
            _this.getTasks();
        });
    };
    TaskComponent.prototype.deleteTask = function (task) {
        var _this = this;
        var request = {
            id: task.id,
            completed: task.completed ? 0 : 1,
            title: task.title,
            order: task.order
        };
        this.taskService.deleteTask(request).subscribe(function (res) {
            console.log(res);
            _this.getTasks();
        });
    };
    TaskComponent.prototype.clearAllTask = function () {
        var _this = this;
        this.taskService.clearAllTask().subscribe(function (res) {
            console.log(res);
            _this.getTasks();
        });
    };
    TaskComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    TaskComponent.ctorParameters = function () { return [
        { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-task",
            template: __webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.scss */ "./src/app/task/task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/task/task.service.ts":
/*!**************************************!*\
  !*** ./src/app/task/task.service.ts ***!
  \**************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.tasksList = [];
        this.completedTasks = [];
        this.baseUrl = 'http://18.224.18.13:8005';
        this.apiUrl = this.baseUrl + '/api';
    }
    TaskService.prototype.addNewTask = function (req) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return this.http.post(this.apiUrl + '/task', req, { headers: headers }).pipe(
        // if responce takes more than one minute
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(60000), 
        // ...errors if any
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), 
        // ...and calling .json() on the response to return data
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    TaskService.prototype.statusTask = function (req) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return this.http.patch(this.apiUrl + '/task/' + req.id, req, { headers: headers }).pipe(
        // if responce takes more than one minute
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(60000), 
        // ...errors if any
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), 
        // ...and calling .json() on the response to return data
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    TaskService.prototype.deleteTask = function (req) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return this.http.delete(this.apiUrl + '/task/' + req.id, { headers: headers }).pipe(
        // if responce takes more than one minute
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(60000), 
        // ...errors if any
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), 
        // ...and calling .json() on the response to return data
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    TaskService.prototype.clearAllTask = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return this.http.delete(this.apiUrl + '/task/', { headers: headers }).pipe(
        // if responce takes more than one minute
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(60000), 
        // ...errors if any
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), 
        // ...and calling .json() on the response to return data
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    TaskService.prototype.getTask = function (req) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return this.http.get(this.apiUrl + '/task', { headers: headers, params: req }).pipe(
        // if responce takes more than one minute
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(60000), 
        // ...errors if any
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), 
        // ...and calling .json() on the response to return data
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    /*
     * extractData function returns outer response
     */
    TaskService.prototype.extractData = function (res) {
        console.log(res);
        return res;
    };
    /*
    * handleError function for HTTP error handling
    */
    TaskService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error :', errorResponse);
            // Swal.fire(errorResponse.error.error_description);
        }
        // return an observable with a meaningful error message to the end user
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorResponse
        // "There is a problem with the service. We are notified & working on it. Please try again later."
        );
    };
    TaskService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/henceforth/Projects/todos/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map