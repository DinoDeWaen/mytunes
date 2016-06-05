
import {Component} from 'angular2/core';

@Component({
    selector: 'application',
    template: '<h1>hello {{name}}</h1>'
})

export default class ApplicationComponent {
    name: string = ""
    constructor(){
        this.name = "Dino"
    }
}