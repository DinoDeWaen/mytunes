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
var core_1 = require('@angular/core');
var login_component_1 = require("./user/login.component");
var registration_component_1 = require("./user/registration.component");
var footer_component_1 = require("./common/footer.component");
var header_component_1 = require("./common/header.component");
var welcome_component_1 = require("./common/welcome.component");
var albums_component_1 = require("./music/albums.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            template: "<header-component></header-component>\n               <div class =\"container\">\n                <welcome-component></welcome-component>\n               </div>\n               <footer-component></footer-component>",
            directives: [login_component_1.default, registration_component_1.default, header_component_1.default, footer_component_1.default, welcome_component_1.default, albums_component_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map