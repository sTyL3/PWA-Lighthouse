import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private router: Router, private firebaseAuthService: AngularFireAuth) { }

    public isLogged() {
        return this.firebaseAuthService.auth.currentUser != null;
    }

    public logout() {
        this.firebaseAuthService.auth.signOut();
        this.router.navigate(['/login']);
    }

}
