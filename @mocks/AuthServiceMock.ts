import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceMock {
    /**
     * realiza login
     */
    login(email: string, pass: string): Promise<firebase.auth.UserCredential> {
        return null;
    }

    /**
     * Al dar de alta un alumno crea su user y pass
     */
    registerUser(
        email: string,
        pass: string
    ): Promise<firebase.auth.UserCredential> {
        return null;
    }

    /**
     * Indica si esta o no logueado
     */
    isAuthenticated(): boolean {
        return true;
    }
}
