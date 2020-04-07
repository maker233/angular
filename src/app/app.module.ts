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
    apiKey: 'AIzaSyA5EMiBlExS2PBLVxJjmWFu5Ho2-r7t6no',
    authDomain: 'certificate-be50f.firebaseapp.com',
    databaseURL: 'https://certificate-be50f.firebaseio.com',
    projectId: 'certificate-be50f',
    storageBucket: 'certificate-be50f.appspot.com',
    messagingSenderId: '252977105098',
    appId: '1:252977105098:web:58a7ece66dfe4656b2cc33',
    measurementId: 'G-9RRJ6RM35Z',
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
