
import {Component} from 'angular2/core';

@Component({
    selector: 'application',
    templateUrl: 'app/components/application/application.html'
})

export default class ApplicationComponent {
    name: string = ""
    constructor(){
        this.name = "Dino"
    }
}