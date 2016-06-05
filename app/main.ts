import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import AppComponent from "./app.component";
import {APP_BASE_HREF} from "angular2/router";
import {provide} from "angular2/core";

bootstrap(<any> AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue : '/'})]);