(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Development\WebStormProjects\fantacalcioacg\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3WZT":
    /*!*****************************************************!*\
      !*** ./src/app/quotazioni/quotazioni.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function WZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGF6aW9uaS9xdW90YXppb25pLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9xdW90YXppb25pL3F1b3RhemlvbmkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "59wV":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quotazioni/quotazioni.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function wV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-tab-group>\r\n  <mat-tab label=\"Maschi\">\r\n    <table mat-table [dataSource]=\"dataSourceM\" class=\"mat-elevation-z2\" matSort #sorterM=\"matSort\">\r\n\r\n      <ng-container matColumnDef=\"nome\" >\r\n        <th mat-header-cell *matHeaderCellDef> Nome </th>\r\n        <td mat-cell *matCellDef=\"let giocatore\"> {{giocatore.nome}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"gruppo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Gruppo </th>\r\n        <td mat-cell *matCellDef=\"let giocatore\"> {{giocatore.gruppo}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"ruolo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Ruolo </th>\r\n        <td mat-cell *matCellDef=\"let giocatore\"> {{giocatore.ruolo}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"costo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Costo </th>\r\n        <td mat-cell *matCellDef=\"let giocatore\"> {{giocatore.costo}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </mat-tab>\r\n  <mat-tab label=\"Femmine\">\r\n    <table mat-table [dataSource]=\"dataSourceF\" class=\"mat-elevation-z2\" matSort #sorterF=\"matSort\">\r\n\r\n      <ng-container matColumnDef=\"nome\">\r\n        <th mat-header-cell *matHeaderCellDef> Nome </th>\r\n        <td mat-cell *matCellDef=\"let giocatore\"> {{giocatore.nome}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"gruppo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Gruppo </th>\r\n        <td mat-cell *matCellDef=\"let giocatore\"> {{giocatore.gruppo}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"ruolo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Ruolo </th>\r\n        <td mat-cell *matCellDef=\"let giocatore\"> {{giocatore.ruolo}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"costo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Costo </th>\r\n        <td mat-cell *matCellDef=\"let giocatore\"> {{giocatore.costo}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n";
      /***/
    },

    /***/
    "5i6V":
    /*!*********************************************************************!*\
      !*** ./src/app/schiera-formazione/schiera-formazione.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function i6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGllcmEtZm9ybWF6aW9uZS9zY2hpZXJhLWZvcm1hemlvbmUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "6Dtw":
    /*!************************************************!*\
      !*** ./src/app/_services/giocatore.service.ts ***!
      \************************************************/

    /*! exports provided: GiocatoreService */

    /***/
    function Dtw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiocatoreService", function () {
        return GiocatoreService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_models/constants */
      "ZqIV");

      var GiocatoreService = /*#__PURE__*/function () {
        function GiocatoreService(http) {
          _classCallCheck(this, GiocatoreService);

          this.http = http;
        }

        _createClass(GiocatoreService, [{
          key: "getMaschi",
          value: function getMaschi() {
            var api = _models_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].APIURL + 'giocatore/readAll.php?g=m';
            return this.http.get(api);
          }
        }, {
          key: "getFemmine",
          value: function getFemmine() {
            var api = _models_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].APIURL + 'giocatore/readAll.php?g=f';
            return this.http.get(api);
          }
        }]);

        return GiocatoreService;
      }();

      GiocatoreService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      GiocatoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GiocatoreService);
      /***/
    },

    /***/
    "7Ac5":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ac5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z2\" matSort #sorterM=\"matSort\">\r\n  \r\n    <ng-container matColumnDef=\"nome\" >\r\n      <th mat-header-cell *matHeaderCellDef> Nome </th>\r\n      <td mat-cell *matCellDef=\"let squadra\"> {{squadra.nome}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"allenatore\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Allenatore </th>\r\n      <td mat-cell *matCellDef=\"let squadra\"> {{squadra.username}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"punteggio\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Punteggio </th>\r\n      <td mat-cell *matCellDef=\"let squadra\"> {{squadra.punteggio}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>";
      /***/
    },

    /***/
    "7Vn+":
    /*!*******************************************!*\
      !*** ./src/app/_services/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function Vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_models/constants */
      "ZqIV");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.squadraCorrenteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('squadraCorrente')));
          this.squadraCorrente = this.squadraCorrenteSubject.asObservable();
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(nome, password) {
            var _this = this;

            var api = _models_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].APIURL + 'squadra/login.php';
            return this.http.post(api, {
              "username": nome,
              "password": password
            }, _models_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].HTTPHEADERS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (squadra) {
              if (squadra) {
                localStorage.setItem('squadraCorrente', JSON.stringify(squadra));

                _this.squadraCorrenteSubject.next(squadra);
              }

              return squadra;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('squadraCorrente');
            this.squadraCorrenteSubject.next(null);
          }
        }, {
          key: "squadraCorrenteValue",
          get: function get() {
            return this.squadraCorrenteSubject.value;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "DRWH":
    /*!*******************************************************!*\
      !*** ./src/app/regolamento/regolamento.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function DRWH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ29sYW1lbnRvL3JlZ29sYW1lbnRvLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "DZIv":
    /*!****************************************************!*\
      !*** ./src/app/quotazioni/quotazioni.component.ts ***!
      \****************************************************/

    /*! exports provided: QuotazioniComponent */

    /***/
    function DZIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuotazioniComponent", function () {
        return QuotazioniComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_quotazioni_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./quotazioni.component.html */
      "59wV");
      /* harmony import */


      var _quotazioni_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quotazioni.component.css */
      "3WZT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_giocatore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/giocatore.service */
      "6Dtw");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");

      var QuotazioniComponent = /*#__PURE__*/function () {
        function QuotazioniComponent(service) {
          var _this2 = this;

          _classCallCheck(this, QuotazioniComponent);

          this.service = service;
          this.displayedColumns = ['nome', 'gruppo', 'ruolo', 'costo'];
          service.getMaschi().subscribe(function (response) {
            _this2.dataSourceM = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](response);
            _this2.dataSourceM.sort = _this2.sorterM;
          });
          service.getFemmine().subscribe(function (response) {
            _this2.dataSourceF = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](response);
            _this2.dataSourceF.sort = _this2.sorterF;
          });
        }

        _createClass(QuotazioniComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QuotazioniComponent;
      }();

      QuotazioniComponent.ctorParameters = function () {
        return [{
          type: _services_giocatore_service__WEBPACK_IMPORTED_MODULE_4__["GiocatoreService"]
        }];
      };

      QuotazioniComponent.propDecorators = {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
            "static": true
          }]
        }],
        sorterM: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['sorterM', {
            "static": true
          }]
        }],
        sorterF: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['sorterF', {
            "static": true
          }]
        }]
      };
      QuotazioniComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-quotazioni',
        template: _raw_loader_quotazioni_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_quotazioni_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QuotazioniComponent);
      /***/
    },

    /***/
    "Knjt":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schiera-formazione/schiera-formazione.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Knjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>schiera-formazione works!</p>\r\n";
      /***/
    },

    /***/
    "MMta":
    /*!*****************************************************!*\
      !*** ./src/app/formazioni/formazioni.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function MMta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1hemlvbmkvZm9ybWF6aW9uaS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "NWYD":
    /*!****************************************!*\
      !*** ./src/app/_guards/admin.guard.ts ***!
      \****************************************/

    /*! exports provided: AdminGuard */

    /***/
    function NWYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(snackBar, auth) {
          _classCallCheck(this, AdminGuard);

          this.snackBar = snackBar;
          this.auth = auth;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this3 = this;

            return this.auth.squadraCorrente.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (squadra) {
              return squadra.admin;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isAdmin) {
              if (!isAdmin) {
                console.log('Non sei un admin');

                _this3.openSnackBar();
              }
            }));
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar() {
            this.snackBar.open('Accesso consentito solo agli amministratori!', 'Ok');
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdminGuard);
      /***/
    },

    /***/
    "NjDy":
    /*!**************************************************************!*\
      !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
      \**************************************************************/

    /*! exports provided: AdminDashboardComponent */

    /***/
    function NjDy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
        return AdminDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "bNz5");
      /* harmony import */


      var _admin_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-dashboard.component.css */
      "Q4S7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminDashboardComponent = /*#__PURE__*/function () {
        function AdminDashboardComponent() {
          _classCallCheck(this, AdminDashboardComponent);
        }

        _createClass(AdminDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminDashboardComponent;
      }();

      AdminDashboardComponent.ctorParameters = function () {
        return [];
      };

      AdminDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-dashboard',
        template: _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminDashboardComponent);
      /***/
    },

    /***/
    "Oh3b":
    /*!************************************************!*\
      !*** ./src/app/homepage/homepage.component.ts ***!
      \************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function Oh3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "7Ac5");
      /* harmony import */


      var _homepage_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homepage.component.css */
      "TB64");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _services_squadra_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/squadra.service */
      "ZSFZ");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent(service) {
          var _this4 = this;

          _classCallCheck(this, HomepageComponent);

          this.service = service;
          this.displayedColumns = ['nome', 'allenatore', 'punteggio'];
          service.readAll().subscribe(function (response) {
            _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](response);
            _this4.dataSource.sort = _this4.sorter;
          });
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ctorParameters = function () {
        return [{
          type: _services_squadra_service__WEBPACK_IMPORTED_MODULE_6__["SquadraService"]
        }];
      };

      HomepageComponent.propDecorators = {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
            "static": true
          }]
        }],
        sorter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['sorter', {
            "static": true
          }]
        }]
      };
      HomepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homepage',
        template: _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homepage_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomepageComponent);
      /***/
    },

    /***/
    "PSoG":
    /*!***************************************!*\
      !*** ./src/app/_guards/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PSoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(snackBar, auth, router) {
          _classCallCheck(this, AuthGuard);

          this.snackBar = snackBar;
          this.auth = auth;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this5 = this;

            return this.auth.squadraCorrente.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              return !!user;
            }), // <-- map to boolean
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
              if (!loggedIn) {
                console.log('Accesso non consentito');

                _this5.openSnackBar();

                _this5.router.navigate(['/login']);
              }
            }));
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar() {
            this.snackBar.open('Accedi prima con il tuo account!', 'Ok');
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "Q4S7":
    /*!***************************************************************!*\
      !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function Q4S7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./_services/auth.service */
      "7Vn+");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(auth) {
          _classCallCheck(this, AppComponent);

          this.auth = auth;
          this.title = 'Fantacalcio ACG';
          this.navLinks = [{
            label: 'Quotazioni',
            path: '/quotazioni'
          }, {
            label: 'Regolamento',
            path: '/regolamento'
          }, {
            label: 'Formazioni',
            path: '/formazioni'
          }, {
            label: 'Schiera formazione',
            path: '/schiera-formazione'
          }, {
            label: 'Pannello di Controllo',
            path: '/admin-dashboard'
          }];
          this.current = this.auth.squadraCorrenteValue;
        }

        _createClass(AppComponent, [{
          key: "logout",
          value: function logout() {
            this.auth.logout();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TB64":
    /*!*************************************************!*\
      !*** ./src/app/homepage/homepage.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function TB64(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-row {\r\n    height: auto;\r\n  }\r\n  \r\n.mat-cell {\r\npadding: 8px 8px 8px 0;\r\n}\r\n  \r\n.main-div{\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7QUFFRjtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJvdyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4ubWF0LWNlbGwge1xyXG5wYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG59XHJcblxyXG4ubWFpbi1kaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "VH9P":
    /*!****************************************************!*\
      !*** ./src/app/formazioni/formazioni.component.ts ***!
      \****************************************************/

    /*! exports provided: FormazioniComponent */

    /***/
    function VH9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormazioniComponent", function () {
        return FormazioniComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formazioni_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formazioni.component.html */
      "mr5h");
      /* harmony import */


      var _formazioni_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formazioni.component.css */
      "MMta");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormazioniComponent = /*#__PURE__*/function () {
        function FormazioniComponent() {
          _classCallCheck(this, FormazioniComponent);
        }

        _createClass(FormazioniComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormazioniComponent;
      }();

      FormazioniComponent.ctorParameters = function () {
        return [];
      };

      FormazioniComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-formazioni',
        template: _raw_loader_formazioni_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formazioni_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormazioniComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z1\">\r\n  <button mat-button [routerLink]=\"['']\">\r\n    <img alt=\"Home\" height=\"40\" src=\"assets/logo_bianco.png\" title=\"Home\" ></button>\r\n  <span>Fantacalcio ACG</span>\r\n  <span style=\"flex: 1 1 auto;\"></span>\r\n\r\n  <div *ngIf=\"auth.squadraCorrente | async; then authenticated else guest\" >\r\n    <!-- template will replace this div -->\r\n  </div>\r\n  <ng-template #guest>\r\n    <button mat-icon-button [routerLink]=\"'/login'\" >\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"Login\">exit_to_app</mat-icon>\r\n    </button>\r\n  </ng-template>\r\n  <ng-template #authenticated>\r\n    <button mat-icon-button (click)=\"logout()\" [routerLink]=\"['']\" >\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"Logout\">power_settings_new</mat-icon>\r\n    </button>\r\n  </ng-template>\r\n\r\n</mat-toolbar>\r\n<nav backgroundColor=\"primary\" mat-tab-nav-bar mat-align-tabs=\"center\">\r\n  <a mat-tab-link\r\n     *ngFor=\"let link of navLinks\"\r\n     [routerLink]=\"link.path\"\r\n     routerLinkActive #rla=\"routerLinkActive\"\r\n     [active]=\"rla.isActive\">\r\n    {{link.label}}\r\n  </a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n";
      /***/
    },

    /***/
    "Wv/1":
    /*!******************************************************!*\
      !*** ./src/app/regolamento/regolamento.component.ts ***!
      \******************************************************/

    /*! exports provided: RegolamentoComponent */

    /***/
    function Wv1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegolamentoComponent", function () {
        return RegolamentoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_regolamento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./regolamento.component.html */
      "mJ4u");
      /* harmony import */


      var _regolamento_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./regolamento.component.css */
      "DRWH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RegolamentoComponent = /*#__PURE__*/function () {
        function RegolamentoComponent() {
          _classCallCheck(this, RegolamentoComponent);
        }

        _createClass(RegolamentoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegolamentoComponent;
      }();

      RegolamentoComponent.ctorParameters = function () {
        return [];
      };

      RegolamentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-regolamento',
        template: _raw_loader_regolamento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_regolamento_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegolamentoComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./material-module */
      "j5wd");
      /* harmony import */


      var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./admin-dashboard/admin-dashboard.component */
      "NjDy");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "Oh3b");
      /* harmony import */


      var _formazioni_formazioni_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./formazioni/formazioni.component */
      "VH9P");
      /* harmony import */


      var _schiera_formazione_schiera_formazione_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./schiera-formazione/schiera-formazione.component */
      "v6Yx");
      /* harmony import */


      var _regolamento_regolamento_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./regolamento/regolamento.component */
      "Wv/1");
      /* harmony import */


      var _quotazioni_quotazioni_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./quotazioni/quotazioni.component */
      "DZIv");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["AdminDashboardComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"], _formazioni_formazioni_component__WEBPACK_IMPORTED_MODULE_11__["FormazioniComponent"], _schiera_formazione_schiera_formazione_component__WEBPACK_IMPORTED_MODULE_12__["SchieraFormazioneComponent"], _regolamento_regolamento_component__WEBPACK_IMPORTED_MODULE_13__["RegolamentoComponent"], _quotazioni_quotazioni_component__WEBPACK_IMPORTED_MODULE_14__["QuotazioniComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]],
        imports: [_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZSFZ":
    /*!**********************************************!*\
      !*** ./src/app/_services/squadra.service.ts ***!
      \**********************************************/

    /*! exports provided: SquadraService */

    /***/
    function ZSFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadraService", function () {
        return SquadraService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_models/constants */
      "ZqIV");

      var SquadraService = /*#__PURE__*/function () {
        function SquadraService(http) {
          _classCallCheck(this, SquadraService);

          this.http = http;
        }

        _createClass(SquadraService, [{
          key: "readAll",
          value: function readAll() {
            var api = _models_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].APIURL + 'squadra/readAll.php';
            return this.http.get(api);
          }
        }]);

        return SquadraService;
      }();

      SquadraService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      SquadraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SquadraService);
      /***/
    },

    /***/
    "ZqIV":
    /*!**************************************!*\
      !*** ./src/app/_models/constants.ts ***!
      \**************************************/

    /*! exports provided: Constants */

    /***/
    function ZqIV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Constants", function () {
        return Constants;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var Constants = function Constants() {
        _classCallCheck(this, Constants);
      };

      Constants.APIURL = 'https://dariocast.altervista.org/fantazama/api/fanta/';
      Constants.HTTPHEADERS = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
          'Content-Type': 'text/plain'
        })
      };
      /***/
    },

    /***/
    "bNz5":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-dashboard/admin-dashboard.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bNz5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>admin-dashboard works!</p>\r\n";
      /***/
    },

    /***/
    "in5m":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function in5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\r\n  <mat-card-title>Login</mat-card-title>\r\n  <mat-card-content>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n      <p>\r\n        <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"nomeSquadra\">\r\n        </mat-form-field>\r\n      </p>\r\n\r\n      <p>\r\n        <mat-form-field>\r\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\r\n        </mat-form-field>\r\n      </p>\r\n      <div class=\"button\">\r\n        <button type=\"submit\" mat-button>Login</button>\r\n      </div>\r\n\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n";
      /***/
    },

    /***/
    "j5wd":
    /*!************************************!*\
      !*** ./src/app/material-module.ts ***!
      \************************************/

    /*! exports provided: MaterialModule */

    /***/
    function j5wd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      })], MaterialModule);
      /**  Copyright 2019 Google Inc. All Rights Reserved.
       Use of this source code is governed by an MIT-style license that
       can be found in the LICENSE file at http://angular.io/license */

      /***/
    },

    /***/
    "mJ4u":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/regolamento/regolamento.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mJ4u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin: 10px\">\r\n  <div class=\"mat-display-2\">Regolamento ZamaCentro'League</div>\r\n  <ul>\r\n    <li><b>Premessa:</b> La formazione va inserita di settimana in settimana e può comprendere qualunque calciatore del fantacalcio. Solo chi EFFETTIVAMENTE giocherà le 4/5 partite del pomeriggio ricevera voto. Tutti gli animatori ricevono voto, a prescindere da se giocano o meno</li>\r\n    <li><b>Regole di Gioco</b>\r\n      <ul>\r\n        <li>\r\n          Ogni partecipante ha a disposizione 180 fantacrediti e deve acquistare 10 calciatori/calciatrici.\r\n        </li>\r\n        <li>\r\n          Ogni rosa deve essere composta da: 2 portieri P, 4 difensori D, 4 attaccanti A.\r\n        </li>\r\n        <li>\r\n          Ogni rosa deve contenere un minimo di 2 calciatrici, di cui una va obbligatoriamente schierata titolare. Ogni rosa deve contenere un minimo di 1 animatore maschio o femmina a discrezione del fantallenatore.\r\n        </li>\r\n        <li>\r\n          I moduli consentiti sono: 1-2-2 (P-D-D-A-A) e 1-3-1 (P-D-D-D-A). <br>\r\n          Le calciatrici non hanno ruolo specifico e possono essere schierate indistintamente come D o come A.\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <b>Sostituzioni</b> <br>\r\n      Nel caso in cui uno o più calciatori non ricevano un punteggio di gioco in quella giornata (per mancata partecipazione alla partita) subentreranno i calciatori schierati in panchina secondo l'ordine scelto dal fantallenatore e rispettando i ruoli (D sostituisce un altro D e così via...)\r\n      <br> NB: Una calciatrice deve essere sostituita con un'altra calciatrice. La panchina sarà composta da tutti i calciatori non schierati nella formazione di partenza\r\n    </li>\r\n    <li>\r\n      <b>Punteggi</b><br>\r\n      Ogni calciatore che fa il suo ingresso sul manto erboso ed è a referto sul quaderno indipendentemente dai minuti giocati riceverà un punteggio che è somma di <b>Base</b> e <b>Bonus/Malus</b>\r\n      <ul>\r\n        <li>\r\n          La <b>base</b> parte da:\r\n          <ul>\r\n            <li>\r\n              3 punti se la squadra di appartenenza del giocatore perde con 5 gol di scarto o più\r\n            </li>\r\n            <li>\r\n              3,5 punti se la squadra di appartenenza del giocatore perde con da 1 a 4 gol di scarto\r\n            </li>\r\n            <li>\r\n              4 punti se la squadra di appartenenza del giocatore pareggia\r\n            </li>\r\n            <li>\r\n              4,5 punti se la squadra di appartenenza del giocatore vince con da 1 a 4 gol di scarto\r\n            </li>\r\n            <li>\r\n              5 punti se la squadra di appartenenza del giocatore vince con 5 gol di scarto o più\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          Alla base vanno sommati <b>bonus e malus</b>:\r\n          <ul>\r\n            <li>\r\n              +2 per ogni gol segnato dal calciatore\r\n            </li>\r\n            <li>\r\n              -2 per ammonizione\r\n            </li>\r\n            <li>\r\n              -3 per cartellino nero\r\n            </li>\r\n            <li>\r\n              -4 per espulsione\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <b>Portiere</b><br>\r\n      Distinguiamo:\r\n      <ul>\r\n        <li>\r\n          Portieri che hanno solo P: <br>\r\n          Può essere schierato solo in porta nella fantaformazione e subisce tutti i gol presi dal gruppo (anche se poi giocherà avanti e indipendentemente da chi effettivamente giocherà la gara in porta).\r\n        </li>\r\n        <li>\r\n          Portieri con doppio ruolo (P/D o P/A o P/D/A): <br>\r\n          Se il portiere viene schierato nella fantaformazione come P, come nel caso precedente, subisce come malus tutti i gol presi dal gruppo (anche se poi giocherà avanti e indipendentemente da chi effettivamente giocherà la gara in porta). <br>\r\n          Se invece viene schierato come D o A nella fantaformazione, non sarà soggetto ai malus dei gol subiti.\r\n        </li>\r\n      </ul>\r\n      Il malus del portiere per ogni gol subito è -0,5\r\n    </li>\r\n    <li>\r\n      Gli altri giocatori di movimento, D e A, che dovessero trovarsi impegnati tra i pali, nel caso di gol subiti non saranno soggetti a malus, malus che, invece, saranno sempre attribuiti al giocatore di ruolo P del gruppo.\r\n    </li>\r\n    <li>\r\n      <b>Punteggio e Classifica</b><br>\r\n      Ogni giornata verranno sommati i punti dei giocatori schierati come titolari, con le opportune ed eventuali sostituzioni, e saranno sommati al punteggio generale della vostra fantasquadra\r\n    </li>\r\n  </ul>\r\n  <div class=\"mat-display-1\" style=\"color: mediumspringgreen;\">#ENJOY</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "mr5h":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formazioni/formazioni.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mr5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>formazioni works!</p>\r\n";
      /***/
    },

    /***/
    "n7sk":
    /*!*******************************************!*\
      !*** ./src/app/login/login.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function n7sk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 100px 0px;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n  min-width: 300px;\r\n}\r\n\r\nmat-card-title,\r\nmat-card-content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.error {\r\n  padding: 16px;\r\n  width: 300px;\r\n  color: white;\r\n  background-color: red;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwMHB4IDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSxcclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "v6Yx":
    /*!********************************************************************!*\
      !*** ./src/app/schiera-formazione/schiera-formazione.component.ts ***!
      \********************************************************************/

    /*! exports provided: SchieraFormazioneComponent */

    /***/
    function v6Yx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchieraFormazioneComponent", function () {
        return SchieraFormazioneComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_schiera_formazione_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./schiera-formazione.component.html */
      "Knjt");
      /* harmony import */


      var _schiera_formazione_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./schiera-formazione.component.css */
      "5i6V");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SchieraFormazioneComponent = /*#__PURE__*/function () {
        function SchieraFormazioneComponent() {
          _classCallCheck(this, SchieraFormazioneComponent);
        }

        _createClass(SchieraFormazioneComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SchieraFormazioneComponent;
      }();

      SchieraFormazioneComponent.ctorParameters = function () {
        return [];
      };

      SchieraFormazioneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-schiera-formazione',
        template: _raw_loader_schiera_formazione_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_schiera_formazione_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SchieraFormazioneComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "Oh3b");
      /* harmony import */


      var _formazioni_formazioni_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formazioni/formazioni.component */
      "VH9P");
      /* harmony import */


      var _schiera_formazione_schiera_formazione_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./schiera-formazione/schiera-formazione.component */
      "v6Yx");
      /* harmony import */


      var _regolamento_regolamento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./regolamento/regolamento.component */
      "Wv/1");
      /* harmony import */


      var _quotazioni_quotazioni_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./quotazioni/quotazioni.component */
      "DZIv");
      /* harmony import */


      var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./admin-dashboard/admin-dashboard.component */
      "NjDy");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./_guards/auth.guard */
      "PSoG");
      /* harmony import */


      var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./_guards/admin.guard */
      "NWYD");

      var routes = [{
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
      }, {
        path: 'formazioni',
        component: _formazioni_formazioni_component__WEBPACK_IMPORTED_MODULE_4__["FormazioniComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'schiera-formazione',
        component: _schiera_formazione_schiera_formazione_component__WEBPACK_IMPORTED_MODULE_5__["SchieraFormazioneComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'regolamento',
        component: _regolamento_regolamento_component__WEBPACK_IMPORTED_MODULE_6__["RegolamentoComponent"]
      }, {
        path: 'quotazioni',
        component: _quotazioni_quotazioni_component__WEBPACK_IMPORTED_MODULE_7__["QuotazioniComponent"]
      }, {
        path: 'admin-dashboard',
        component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["AdminDashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "in5m");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "n7sk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(route, router, authenticationService) {
          _classCallCheck(this, LoginComponent);

          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nomeSquadra: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          }); // redirect to home if already logged in

          if (this.authenticationService.squadraCorrenteValue) {
            this.router.navigate(['']);
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            var _this6 = this;

            if (this.form.valid) {
              this.authenticationService.login(this.form.value.nomeSquadra, this.form.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
                _this6.router.navigate(['']);
              }, function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map