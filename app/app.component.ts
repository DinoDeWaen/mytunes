
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
    selector: 'app-component',
    template: '<h1>hello {{name}}</h1>',
    directives : [<any>RouterOutlet]
})

export default class AppComponent {
    name: string = ""
    constructor(){
        this.name = "Dino"
    }
}