import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule,FirestoreSettingsToken } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtOjuD4F9GMGAstZ_4jJbnSpqyQ69Ouzs",
    authDomain: "jobapplication-97d0e.firebaseapp.com",
    databaseURL: "https://jobapplication-97d0e.firebaseio.com",
    projectId: "jobapplication-97d0e",
    storageBucket: "jobapplication-97d0e.appspot.com",
    messagingSenderId: "953139275005",
    appId: "1:953139275005:web:6af4b66fb1beb481714a94",
    measurementId: "G-FGSFL1MT6H"

};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
