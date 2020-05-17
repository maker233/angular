/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
    NbDatepickerModule,
    NbDialogModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbWindowModule,
} from '@nebular/theme';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Configuracion del proyecto firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDUSIUyr04ld5nqSkXiI3NnX1x8Fi9CTtc',
    authDomain: 'gestion-practice-a4296.firebaseapp.com',
    databaseURL: 'https://gestion-practice-a4296.firebaseio.com',
    projectId: 'gestion-practice-a4296',
    storageBucket: 'gestion-practice-a4296.appspot.com',
    messagingSenderId: '861936222658',
    appId: '1:861936222658:web:f21c7126b68c34fe5e165b',
    measurementId: 'G-XB9SV1HTY6',
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbDialogModule.forRoot(),
        NbWindowModule.forRoot(),
        NbToastrModule.forRoot(),
        /*NbChatModule.forRoot({
            messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
        }),*/
        CoreModule.forRoot(),
        ThemeModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
