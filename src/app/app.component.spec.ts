import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from './app-routing.module';
import {
    NbSidebarModule,
    NbMenuModule,
    NbDatepickerModule,
    NbDialogModule,
    NbWindowModule,
    NbToastrModule,
    NbChatModule,
} from '@nebular/theme';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserModule,
                BrowserAnimationsModule,
                HttpClientTestingModule,
                AppRoutingModule,
                NbSidebarModule.forRoot(),
                NbMenuModule.forRoot(),
                NbDatepickerModule.forRoot(),
                NbDialogModule.forRoot(),
                NbWindowModule.forRoot(),
                NbToastrModule.forRoot(),
                NbChatModule.forRoot({
                    messageGoogleMapKey:
                        'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
                }),
                CoreModule.forRoot(),
                ThemeModule.forRoot(),
            ],
            declarations: [AppComponent],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
