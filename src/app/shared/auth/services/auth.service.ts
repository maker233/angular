import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
    // Atributo para saber si esta logueado
    private logged: boolean;

    constructor(private afauth: AngularFireAuth) {
        this.logged = false;
        // Se subscribe al servicio para notificar cuando está
        // logeado el usuario y cuando no
        this.afauth.authState.subscribe((user: any) => {
            if (user) {
                this.logged = true;
            } else {
                this.logged = false;
            }
        });
    }

    /**
     * Setea el valor de isLogged
     */
    set isLogged(value: boolean) {
        this.logged = value;
    }

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
        this.logged = false;
    }

    /**
     * Indica si esta o no logueado
     */
    isAuthenticated(): boolean {
        return this.logged;
    }

    getAfauth(): AngularFireAuth {
        return this.afauth;
    }
}
