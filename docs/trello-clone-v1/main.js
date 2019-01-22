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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-new-list/add-new-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-new-list/add-new-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <input class=\"agregar_tarea\" type=\"text\" placeholder=\"Añada una lista!\" (keyup.enter)=\"addList($event)\" />\n  <!-- <input type=\"text\" placeholder=\"Centro del doc\" (keyup.enter)=\"addList($event)\" /> -->\n  <img class=\"logo\" src=\"../../assets/angular_consola_R.png\" alt=\"\">\n  <app-extra-info [user]=\"user\"></app-extra-info>\n  <!-- <input type=\"text\" placeholder=\"Más info!\" (keyup.enter)=\"addList($event)\" /> -->\n</header>\n"

/***/ }),

/***/ "./src/app/add-new-list/add-new-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-new-list/add-new-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 135px;\n  background: linear-gradient(to right, #001f3f, #034f84);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100vw; }\n\ninput {\n  all: unset;\n  background: transparent;\n  color: white;\n  border-bottom: 1px solid white; }\n\ninput::-webkit-input-placeholder {\n  color: white; }\n\ninput::-ms-input-placeholder {\n  color: white; }\n\ninput::placeholder {\n  color: white; }\n\n.agregar_tarea {\n  margin-left: 10px;\n  text-align: center;\n  font-weight: bold; }\n\n.logo {\n  height: 125px;\n  width: 150px;\n  overflow: hidden;\n  transition: all .3s ease-in-out; }\n\n.logo:hover {\n  height: 110px;\n  width: 130px;\n  overflow: hidden;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW5ldy1saXN0L0M6XFxQUk9HUkFNTUlOR1xcQm9vdGNhbXBcXEFuZ3VsYXJcXFRyZWxsb1xcdHJlbGxvLWNsb25lLXYxL3NyY1xcYXBwXFxhZGQtbmV3LWxpc3RcXGFkZC1uZXctbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLW5ldy1saXN0L0M6XFxQUk9HUkFNTUlOR1xcQm9vdGNhbXBcXEFuZ3VsYXJcXFRyZWxsb1xcdHJlbGxvLWNsb25lLXYxL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQ0hrQjtFRElsQix3REFBdUQ7RUFDdkQsY0FBYTtFQUNiLCtCQUE4QjtFQUM5QixvQkFBbUI7RUFDbkIseUJBQWdCO0VBQWhCLGlCQUFnQjtFQUNoQixPQUFNO0VBQ04sYUFBWSxFQUNiOztBQUNEO0VBQ0UsV0FBVTtFQUNWLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osK0JBQThCLEVBQy9COztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUZEO0VBQ0UsYUFBWSxFQUNiOztBQUZEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixnQ0FBK0IsRUFDaEM7O0FBRUQ7RUFFSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQiw4QkFBb0I7VUFBcEIsc0JBQW9CO0VBQ3BCLDJDQUF3QyxFQUMzQyIsImZpbGUiOiJzcmMvYXBwL2FkZC1uZXctbGlzdC9hZGQtbmV3LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5oZWFkZXIge1xyXG4gIGhlaWdodDogJGhlYWRlckhlaWdodDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDFmM2YsICMwMzRmODQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbmlucHV0IHtcclxuICBhbGw6IHVuc2V0O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWdyZWdhcl90YXJlYSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubG9nbzpob3ZlciB7XHJcbiAgXHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggcmdiYSgwLDAsMCwgMC41KTtcclxufVxyXG5cclxuXHJcbiIsIiRoZWFkZXJIZWlnaHQ6IDEzNXB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/add-new-list/add-new-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-new-list/add-new-list.component.ts ***!
  \********************************************************/
/*! exports provided: AddNewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewListComponent", function() { return AddNewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-manager.service */ "./src/app/data-manager.service.ts");
/* harmony import */ var _extra_info_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extra-info/user.model */ "./src/app/extra-info/user.model.ts");




var AddNewListComponent = /** @class */ (function () {
    function AddNewListComponent(dataService) {
        this.dataService = dataService;
        this.user = new _extra_info_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.user.name = "Ricardo Arruda Matias";
        this.user.title = "ToDo List - V. 1.0.1 - GeeksHubs";
        this.user.academic = "Creating a Trello Clone using Angular 7";
        this.user.phone = 6567890136;
        this.user.hobbies = ['Jugal al fútbol', 'jugar al padel', 'viajar por el mundo'];
    }
    AddNewListComponent.prototype.addList = function (ev) {
        if (ev.target.value.trim() !== '') {
            this.dataService.addNewList(ev.target.value.trim());
            ev.target.value = '';
        }
    };
    AddNewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-new-list',
            template: __webpack_require__(/*! ./add-new-list.component.html */ "./src/app/add-new-list/add-new-list.component.html"),
            styles: [__webpack_require__(/*! ./add-new-list.component.scss */ "./src/app/add-new-list/add-new-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"]])
    ], AddNewListComponent);
    return AddNewListComponent;
}());



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
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");




var routes = [
    {
        path: '',
        component: _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<!-- <app-extra-info [user]=\"user\"></app-extra-info> -->\n"

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
        this.title = 'Trello Clone - Basic Version - Ricardo Arruda Matias';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _show_lists_show_lists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-lists/show-lists.component */ "./src/app/show-lists/show-lists.component.ts");
/* harmony import */ var _add_new_list_add_new_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-new-list/add-new-list.component */ "./src/app/add-new-list/add-new-list.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-manager.service */ "./src/app/data-manager.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _extra_info_extra_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extra-info/extra-info.component */ "./src/app/extra-info/extra-info.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"], _show_lists_show_lists_component__WEBPACK_IMPORTED_MODULE_6__["ShowListsComponent"], _add_new_list_add_new_list_component__WEBPACK_IMPORTED_MODULE_7__["AddNewListComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"], _extra_info_extra_info_component__WEBPACK_IMPORTED_MODULE_12__["ExtraInfoComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
            providers: [_data_manager_service__WEBPACK_IMPORTED_MODULE_10__["DataManagerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-new-list></app-add-new-list>\n<app-show-lists [lists]=\"data.lists\"></app-show-lists>\n"

/***/ }),

/***/ "./src/app/board/board.component.scss":
/*!********************************************!*\
  !*** ./src/app/board/board.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-manager.service */ "./src/app/data-manager.service.ts");



var BoardComponent = /** @class */ (function () {
    function BoardComponent(dataManager) {
        this.dataManager = dataManager;
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.data = this.dataManager.getData();
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/board/board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/data-manager.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-manager.service.ts ***!
  \*****************************************/
/*! exports provided: DataManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagerService", function() { return DataManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataManagerService = /** @class */ (function () {
    function DataManagerService() {
        this.data = {
            lists: [
                {
                    listId: 0,
                    createdAt: new Date(),
                    modifiedAt: new Date(),
                    name: 'BackLog',
                    tasks: [
                        {
                            listId: 0,
                            taskId: 0,
                            text: 'Diseño App MundoTech',
                            completed: false,
                            color: 'white',
                            createdAt: new Date(),
                            modifiedAt: new Date(),
                        },
                        {
                            listId: 0,
                            taskId: 1,
                            text: 'Difusión marca MundoTech',
                            completed: false,
                            color: 'white',
                            createdAt: new Date(),
                            modifiedAt: new Date(),
                        },
                    ],
                },
                {
                    listId: 1,
                    createdAt: new Date(),
                    modifiedAt: new Date(),
                    name: 'To Do',
                    tasks: [
                        {
                            listId: 1,
                            taskId: 0,
                            text: 'Creación Componentes',
                            completed: false,
                            color: 'white',
                            createdAt: new Date(),
                            modifiedAt: new Date(),
                        },
                        {
                            listId: 1,
                            taskId: 1,
                            text: 'Conectar módulos',
                            completed: false,
                            color: 'white',
                            createdAt: new Date(),
                            modifiedAt: new Date(),
                        },
                    ],
                },
                {
                    listId: 2,
                    createdAt: new Date(),
                    modifiedAt: new Date(),
                    name: 'Doing',
                    tasks: [
                        {
                            listId: 2,
                            taskId: 0,
                            text: 'Diseño UI / UX / IxD',
                            completed: false,
                            color: 'white',
                            createdAt: new Date(),
                            modifiedAt: new Date(),
                        },
                        {
                            listId: 2,
                            taskId: 1,
                            text: 'Conexión de datos',
                            completed: false,
                            color: 'white',
                            createdAt: new Date(),
                            modifiedAt: new Date(),
                        },
                    ],
                },
                {
                    listId: 3,
                    createdAt: new Date(),
                    modifiedAt: new Date(),
                    name: 'Waiting',
                    tasks: [
                        {
                            listId: 3,
                            taskId: 0,
                            text: 'Info de medios sociales',
                            completed: false,
                            color: 'white',
                            createdAt: new Date(),
                            modifiedAt: new Date(),
                        },
                        {
                            listId: 3,
                            taskId: 1,
                            text: 'Definición modelo de datos',
                            completed: false,
                            color: 'white',
                            createdAt: new Date(),
                            modifiedAt: new Date(),
                        },
                    ],
                },
            ],
        };
    }
    DataManagerService.prototype.getData = function () {
        return this.data;
    };
    DataManagerService.prototype.addNewList = function (name) {
        var now = new Date();
        var newList = {
            listId: Date.now(),
            createdAt: now,
            modifiedAt: now,
            name: name,
            tasks: [],
        };
        this.data.lists.push(newList);
    };
    DataManagerService.prototype.deleteList = function (listId) {
        this.data.lists = this.data.lists.filter(function (list) { return list.listId !== listId; });
    };
    DataManagerService.prototype.addNewTask = function (text, list) {
        var now = new Date();
        var newTask = {
            listId: list.listId,
            taskId: Date.now(),
            text: text,
            completed: false,
            color: 'white',
            createdAt: now,
            modifiedAt: now,
        };
        this.data.lists = this.data.lists.map(function (listObj) {
            if (listObj.listId === list.listId) {
                listObj.tasks.push(newTask);
            }
            return listObj;
        });
    };
    DataManagerService.prototype.deleteTask = function (task) {
        this.data.lists = this.data.lists.map(function (listObj) {
            if (listObj.listId === task.listId) {
                listObj.tasks = listObj.tasks.filter(function (taskObj) { return taskObj.taskId !== task.taskId; });
            }
            return listObj;
        });
    };
    DataManagerService.prototype.editListName = function (list) {
        this.data.lists = this.data.lists.map(function (listObj) { return (listObj.listId === list.listId ? list : listObj); });
    };
    DataManagerService.prototype.editTask = function (newTask) {
        this.data.lists = this.data.lists.map(function (list) {
            if (list.listId === newTask.listId) {
                list.tasks = list.tasks.map(function (task) {
                    if (task.taskId === newTask.taskId) {
                        return newTask;
                    }
                    return task;
                });
            }
            return list;
        });
    };
    DataManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], DataManagerService);
    return DataManagerService;
}());



/***/ }),

/***/ "./src/app/extra-info/extra-info.component.html":
/*!******************************************************!*\
  !*** ./src/app/extra-info/extra-info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-info\">\n  \n  <button class=\"btnMoreInfo\" (click)=ocultarInfo()>Más info</button>\n  <div class=\"rest\" *ngIf=\"!ocultarData\">\n    <h6 class=\"academic-background\">Project: {{ user.academic }}</h6>\n    <h6 class=\"personal-hobbies\">Author: {{ user.name }}</h6>\n    <!-- <h5 class=\"contact-phone\">Contacto: {{ user.phone }}</h5> -->\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/extra-info/extra-info.component.scss":
/*!******************************************************!*\
  !*** ./src/app/extra-info/extra-info.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 2px;\n  font-size: 1.2rem;\n  border: none;\n  color: #fff;\n  background-color: transparent;\n  cursor: pointer;\n  margin-left: 5px; }\n\n.btnMoreInfo {\n  position: relative; }\n\n.btnMoreInfo:hover::before {\n  width: 100%; }\n\n.btnMoreInfo::before {\n  content: '';\n  height: 3px;\n  width: 0%;\n  background-color: #fff;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  transition: width 0.3s; }\n\n.btnMoreInfo:hover::after {\n  height: 100%; }\n\n.btnMoreInfo::after {\n  content: '';\n  height: 0%;\n  width: 3px;\n  background-color: #fff;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  transition: height 0.3s; }\n\n.project-info {\n  width: 25vw;\n  border-left: 4px solid #0379ee;\n  padding: 0.1rem; }\n\n.project-info .project-title {\n  font-style: italic;\n  font-weight: bold;\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtaW5mby9DOlxcUFJPR1JBTU1JTkdcXEJvb3RjYW1wXFxBbmd1bGFyXFxUcmVsbG9cXHRyZWxsby1jbG9uZS12MS9zcmNcXGFwcFxcZXh0cmEtaW5mb1xcZXh0cmEtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsYUFBWTtFQUNaLFlBQVc7RUFDWCw4QkFBNkI7RUFDN0IsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBR0Q7RUFDSSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsWUFBVztFQUNYLFVBQVM7RUFDVCx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsdUJBQXNCLEVBQ3ZCOztBQUVDO0VBQ0UsYUFBWSxFQUNiOztBQUVIO0VBQ0UsWUFBVztFQUNYLFdBQVU7RUFDVixXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVTtFQUNWLHdCQUF1QixFQUN4Qjs7QUFFSDtFQUNJLFlBQVc7RUFDWCwrQkFBOEI7RUFFOUIsZ0JBQWUsRUFFbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBRWxCIiwiZmlsZSI6InNyYy9hcHAvZXh0cmEtaW5mby9leHRyYS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4uYnRuTW9yZUluZm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuYnRuTW9yZUluZm86aG92ZXI6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bk1vcmVJbmZvOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gICAgLmJ0bk1vcmVJbmZvOmhvdmVyOjphZnRlciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAuYnRuTW9yZUluZm86OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3M7XHJcbiAgfVxyXG5cclxuLnByb2plY3QtaW5mbyB7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAzNzllZTsgXHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMXJlbTtcclxuICAgIFxyXG59XHJcblxyXG4ucHJvamVjdC1pbmZvIC5wcm9qZWN0LXRpdGxle1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/extra-info/extra-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/extra-info/extra-info.component.ts ***!
  \****************************************************/
/*! exports provided: ExtraInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraInfoComponent", function() { return ExtraInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/extra-info/user.model.ts");



var ExtraInfoComponent = /** @class */ (function () {
    function ExtraInfoComponent() {
        this.ocultarData = true;
    }
    ExtraInfoComponent.prototype.ocultarInfo = function () {
        this.ocultarData = !this.ocultarData;
    };
    ExtraInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('user'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], ExtraInfoComponent.prototype, "user", void 0);
    ExtraInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extra-info',
            template: __webpack_require__(/*! ./extra-info.component.html */ "./src/app/extra-info/extra-info.component.html"),
            styles: [__webpack_require__(/*! ./extra-info.component.scss */ "./src/app/extra-info/extra-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExtraInfoComponent);
    return ExtraInfoComponent;
}());



/***/ }),

/***/ "./src/app/extra-info/user.model.ts":
/*!******************************************!*\
  !*** ./src/app/extra-info/user.model.ts ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"list\">\n    <h1>\n      <span [hidden]=\"editing\" (dblclick)=\"edit(editInput)\">{{ list.name }}</span>\n      <span [hidden]=\"!editing\">\n        <input type=\"text\" #editInput (keyup.enter)=\"editName()\" \n        (blur)=\"cancelEdit()\" \n        [(ngModel)]=\"newName\" />\n      </span>\n    </h1>\n    <div class=\"tasks\"><app-task *ngFor=\"let taskObj of list.tasks\" [task]=\"taskObj\">\n\n    </app-task></div>\n    <div class=\"controls\">\n      <i (click)=\"delete()\" class=\"material-icons\">delete</i> <i (click)=\"edit(editInput)\" class=\"material-icons\">edit</i>\n      <input type=\"text\" placeholder=\"add task\" (keyup.enter)=\"newTask($event)\" />\n    </div>\n  </div> -->\n\n  <div class=\"list\">\n    <!-- <h1>{{ list.name }}</h1> -->\n    <h1>\n      <!-- otra forma de hacerlo -->\n     <!-- <span *ngIf=\"!editing\" (dblclick)=\"edit()\"> {{ list.name }} </span> -->\n      \n      <span [hidden]=\"editing\" (dblclick)=\"edit(editInput)\"> {{ list.name }} </span>\n      <span [hidden]=\"!editing\">\n        <input type=\"text\" \n        #editInput (keyup.enter)=\"editName()\"\n        (blur)=\"cancelEdit()\" \n        [(ngModel)]=\"newName\">\n      </span>\n    </h1>\n     <!-- otra forma de hacerlo -->\n     <!-- <input *ngIf=\"!editing\" type=\"text\" (keyup.enter)=\"editName()\"\n     (blur)=\"cancelEdit()\" [(ngModel)=\"list.name\"]> -->\n      \n     <!-- <input type=\"text\" #editInput (keyup.enter)=\"editName()\"\n     (blur)=\"cancelEdit()\" [(ngModel)=\"newName\"]> -->\n    \n\n    <div class=\"tasks\">\n      <app-task *ngFor=\"let taskObj of list.tasks\" \n      [task]=\"taskObj\">\n      </app-task>\n    </div>\n    <div class=\"controls\">\n      <i (click)=\"delete()\" class=\"material-icons\">delete</i>\n      <i (click)=\"edit(editInput)\" class=\"material-icons\">edit</i>\n      <input class=\"agregarTarea\" type=\"text\" placeholder=\"Añada una tarea!\" (keyup.enter)=\"newTask($event)\" />\n\n    </div>\n\n\n  \n"

/***/ }),

/***/ "./src/app/list/list.component.scss":
/*!******************************************!*\
  !*** ./src/app/list/list.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  padding: 0.8em;\n  background: linear-gradient(to top, #00032b, cornflowerblue);\n  border-radius: 0.1em;\n  box-shadow: 3px 2px #232323;\n  margin: 0.7em; }\n  .list input {\n    all: unset;\n    border-bottom: 1px solid #232323;\n    color: white;\n    text-align: center;\n    width: 100%; }\n  .list i {\n    cursor: pointer; }\n  .list .agregarTarea {\n    color: whitesmoke;\n    font-weight: bold; }\n  .list .controls {\n    opacity: 0;\n    transition: opacity 400ms;\n    color: white;\n    -webkit-text-decoration-color: aqua;\n            text-decoration-color: aqua; }\n  .list:hover .controls {\n    opacity: 1;\n    color: white; }\n  .list i {\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9DOlxcUFJPR1JBTU1JTkdcXEJvb3RjYW1wXFxBbmd1bGFyXFxUcmVsbG9cXHRyZWxsby1jbG9uZS12MS9zcmNcXGFwcFxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFDZCw2REFBa0U7RUFDbEUscUJBQW9CO0VBQ3BCLDRCQUEyQjtFQUMzQixjQUFhLEVBZ0NoQjtFQXJDRDtJQU9NLFdBQVU7SUFDVixpQ0FBZ0M7SUFDaEMsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixZQUFXLEVBQ1o7RUFaTDtJQWdCSSxnQkFBZSxFQUNoQjtFQWpCSDtJQW9CSSxrQkFBaUI7SUFDakIsa0JBQWlCLEVBQ2xCO0VBdEJIO0lBeUJJLFdBQVU7SUFDViwwQkFBeUI7SUFDekIsYUFBWTtJQUNaLG9DQUEyQjtZQUEzQiw0QkFBMkIsRUFDNUI7RUE3Qkg7SUErQkksV0FBVTtJQUNWLGFBQVksRUFDYjtFQWpDSDtJQW1DSSxnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcclxuICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDAsIDMsIDQzKSwgY29ybmZsb3dlcmJsdWUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xZW07XHJcbiAgICBib3gtc2hhZG93OiAzcHggMnB4ICMyMzIzMjM7XHJcbiAgICBtYXJnaW46IDAuN2VtO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBhbGw6IHVuc2V0O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIzMjMyMztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICBpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZ3JlZ2FyVGFyZWEge1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5jb250cm9scyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogYXF1YTtcclxuICB9XHJcbiAgJjpob3ZlciAuY29udHJvbHMge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-manager.service */ "./src/app/data-manager.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(dataService) {
        this.dataService = dataService;
        this.editing = false;
        this.newName = '';
    }
    ListComponent.prototype.delete = function () {
        if (confirm('Do you really want to delete the list ' + this.list.name)) {
            this.dataService.deleteList(this.list.listId);
        }
    };
    ListComponent.prototype.newTask = function (ev) {
        var text = ev.target.value.trim();
        if (text !== '') {
            this.dataService.addNewTask(text, this.list);
            ev.target.value = '';
        }
    };
    ListComponent.prototype.editName = function () {
        this.list.name = this.newName;
        this.dataService.editListName(this.list);
        this.editing = false;
    };
    ListComponent.prototype.edit = function (node) {
        // input.focus();
        setTimeout(function () {
            node.focus();
        }, 0);
        // this.oldName = this.list.name;
        this.editing = true;
    };
    ListComponent.prototype.cancelEdit = function () {
        // console.log('cancelEdit', this.oldName);
        // this.list.name = this.oldName;
        this.editing = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "list", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/show-lists/show-lists.component.html":
/*!******************************************************!*\
  !*** ./src/app/show-lists/show-lists.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"showLists\">\n  <app-list *ngFor=\"let listObj of lists\" [list]=\"listObj\"> </app-list>\n</section>\n\n<!-- para mostrar el objeto en el HTML - Debbuging -->\n\n<!-- <pre>{{ lists | json }}</pre> -->"

/***/ }),

/***/ "./src/app/show-lists/show-lists.component.scss":
/*!******************************************************!*\
  !*** ./src/app/show-lists/show-lists.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showLists {\n  background-image: url('bg_space.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  min-height: calc(100vh - 135px);\n  padding: 2em;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1saXN0cy9DOlxcUFJPR1JBTU1JTkdcXEJvb3RjYW1wXFxBbmd1bGFyXFxUcmVsbG9cXHRyZWxsby1jbG9uZS12MS9zcmNcXGFwcFxcc2hvdy1saXN0c1xcc2hvdy1saXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLHNDQUFrRDtFQUNsRCx1QkFBc0I7RUFDdkIsNkJBQTRCO0VBQzVCLDZCQUE0QjtFQUM1Qiw0QkFBMkI7RUFDMUIsZ0NBQTBDO0VBQzFDLGFBQVk7RUFDWixjQUFhO0VBQ2Isc0NBQXFDLEVBQ3RDIiwiZmlsZSI6InNyYy9hcHAvc2hvdy1saXN0cy9zaG93LWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLnNob3dMaXN0cyB7XHJcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDE4MSwgMjU1LCAxMzgpLCAjOTk5KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmdfc3BhY2UucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyBcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlckhlaWdodH0pO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/show-lists/show-lists.component.ts":
/*!****************************************************!*\
  !*** ./src/app/show-lists/show-lists.component.ts ***!
  \****************************************************/
/*! exports provided: ShowListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowListsComponent", function() { return ShowListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowListsComponent = /** @class */ (function () {
    function ShowListsComponent() {
    }
    ShowListsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ShowListsComponent.prototype, "lists", void 0);
    ShowListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-lists',
            template: __webpack_require__(/*! ./show-lists.component.html */ "./src/app/show-lists/show-lists.component.html"),
            styles: [__webpack_require__(/*! ./show-lists.component.scss */ "./src/app/show-lists/show-lists.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowListsComponent);
    return ShowListsComponent;
}());



/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task\">\n  <!-- <h4>{{ task.text }}</h4> -->\n  <h4>\n    <span *ngIf=\"!editing\" (dblclick)=\"editStart()\">{{ task.text }}</span>\n    <input autofocus \n    *ngIf=\"editing\" \n    type=\"text\" \n    [(ngModel)]=\"newTaskText\" \n    (keyup.enter)=\"editTaskText()\" \n    (blur)=\"cancelEdit()\">\n  </h4>\n\n<div class=\"controls\">\n  <i class=\"material-icons\" (click)=\"deleteTask()\">delete</i></div>\n  <i (click)=\"editStart()\" class=\"material-icons\">edit</i>\n</div>\n"

/***/ }),

/***/ "./src/app/task/task.component.scss":
/*!******************************************!*\
  !*** ./src/app/task/task.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task {\n  background: white;\n  border-radius: 0.3em;\n  padding: 0.3em;\n  margin: 0.3em 0; }\n\n.controls {\n  opacity: 0;\n  transition: opacity 400ms; }\n\n.task:hover .controls {\n  opacity: 1; }\n\ni {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9DOlxcUFJPR1JBTU1JTkdcXEJvb3RjYW1wXFxBbmd1bGFyXFxUcmVsbG9cXHRyZWxsby1jbG9uZS12MS9zcmNcXGFwcFxcdGFza1xcdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ00sV0FBVTtFQUNWLDBCQUF5QixFQUM5Qjs7QUFHRDtFQUNNLFdBQVUsRUFDZjs7QUFFRDtFQUNNLGdCQUFlLEVBRXBCIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2sge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgbWFyZ2luOiAwLjNlbSAwO1xyXG59XHJcbi5jb250cm9scyB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXM7XHJcbn1cclxuICAgICAgXHJcbiAgICBcclxuLnRhc2s6aG92ZXIgLmNvbnRyb2xzIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuaSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxufVxyXG5cclxuICBcclxuXHJcbiBcclxuICAiXX0= */"

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
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-manager.service */ "./src/app/data-manager.service.ts");



var TaskComponent = /** @class */ (function () {
    function TaskComponent(dataService) {
        this.dataService = dataService;
        this.editing = false;
        this.newTaskText = '';
    }
    TaskComponent.prototype.deleteTask = function () {
        this.dataService.deleteTask(this.task);
    };
    TaskComponent.prototype.editStart = function () {
        this.editing = true;
    };
    TaskComponent.prototype.editTaskText = function () {
        this.task.text = this.newTaskText;
        this.dataService.editTask(this.task);
        this.editing = false;
    };
    TaskComponent.prototype.cancelEdit = function () {
        this.editing = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.scss */ "./src/app/task/task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"]])
    ], TaskComponent);
    return TaskComponent;
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

module.exports = __webpack_require__(/*! C:\PROGRAMMING\Bootcamp\Angular\Trello\trello-clone-v1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map