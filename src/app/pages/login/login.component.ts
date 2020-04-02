import { Component, OnInit } from '@angular/core';
//import { AuthProvider } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Paths } from 'src/app/helpers/app.constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   // public providers = [AuthProvider.Google];

    constructor(private router: Router, private authenticationService: AuthenticationService) {
        if (this.authenticationService.isLogged) {
            this.router.navigate([Paths.HOME]);
        }
    }

    ngOnInit() {
        console.log('login page');
    }

    onSuccess(event) {
        console.log(event);
        this.router.navigate([Paths.HOME]);
    }

    onError(event) {
        console.error(event);
    }
}
