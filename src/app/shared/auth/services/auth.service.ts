import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private afauth: AngularFireAuth, private router: Router) {}

    /**
     * realiza login
     */
    login(email: string, pass: string): Promise<firebase.auth.UserCredential> {
        return this.afauth.auth.signInWithEmailAndPassword(email, pass);
    }

    /**
     * Al dar de alta un alumno crea su user y pass
     */
    registerUser(
        email: string,
        pass: string
    ): Promise<firebase.auth.UserCredential> {
        return this.afauth.auth.createUserWithEmailAndPassword(email, pass);
    }

    /**
     * Nos desloguea de la aplicacion
     */
    logout(): void {
        this.afauth.auth.signOut();
        this.router.navigate(['/login']);
    }

    getUser(): Promise<any> {
        return this.afauth.authState.pipe(first()).toPromise();
    }
}
