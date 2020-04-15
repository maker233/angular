import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth/services/auth.service';

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    showLoginError: boolean;
    submitted: boolean;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private auth: AuthService
    ) {
        this.showLoginError = false;
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pass: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    /**
     * Comprobamos si el login es correcto
     */
    checkLogin() {
        this.submitted = true;

        this.auth
            .login(this.loginForm.value.email, this.loginForm.value.pass)
            .then(
                (success) => {
                    if (success) {
                        // Indicamos que estamos logueados
                        this.router.navigate(['/']);
                    }
                },
                (error) => {
                    this.showLoginError = true;
                    console.error('Error en el login ' + error);
                }
            );
    }
}
