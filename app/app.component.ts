
import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from '@angular/common';
import {Http} from '@angular/http';
import {LoginComponent} from "./user/login.component";
import {RegistrationComponent} from "./user/registration.component";
import {FooterComponent} from "./common/footer.component";
import {HeaderComponent} from "./common/header.component";
import {WelcomeComponent} from "./common/welcome.component";

@Component({
    selector: 'app-component',
    template: `<header-component></header-component>
               <div class ="container">
                <router-outlet></router-outlet>
               </div>
               <footer-component></footer-component>`,
    directives : [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: WelcomeComponent
    }
])
export default class AppComponent {
    constructor(){
    }
}