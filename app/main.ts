import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import AppComponent from "./app.component";
import {provide} from "@angular/core";

bootstrap(<any> AppComponent, [
    HTTP_PROVIDERS
]);