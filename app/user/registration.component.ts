import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from './services/user.srv';


@Component({
    selector : 'registration-component',
    template : `
        <form #registrationForm="ngForm">
            <div class="alert alert-danger" *ngIf="error">{{error}}</div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" required #email="ngForm" ngControl="email">
            <div class="alert alert-danger" [hidden]="email.valid || email.pristine">Email required</div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required #password="ngForm" ngControl="password">
            <div class="alert alert-danger" [hidden]="password.valid || password.pristine">Password required</div>
          </div>

          <button type="submit" class="btn btn-default" [disabled]="!registrationForm.form.valid" (click)="register(email.value, password.value)">Submit</button>
        </form>
    `,
    providers : [UserService]
})
export class RegistrationComponent {

    public error:string;

    constructor(private userService:UserService, private router:Router) {

    }

    register(email:string, password:string) {
        console.log(email + " " +password)
        this.userService.register(email, password)
            .subscribe(user => {
                this.router.navigateByUrl("/");
            }, error => {
                this.error = error;
            });
    }
}
