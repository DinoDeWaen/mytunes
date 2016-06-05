import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import ApplicationComponent from 'app/components/application/application';

bootstrap(<any>ApplicationComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);