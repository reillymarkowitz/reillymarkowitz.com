import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBvv6NiUc-CHSToCIwvR5IwbPP1wt_431Q",
  authDomain: "personal-site-72fd5.firebaseapp.com",
  databaseURL: "https://personal-site-72fd5.firebaseio.com",
  projectId: "personal-site-72fd5",
  storageBucket: "",
  messagingSenderId: "663936670149",
  appId: "1:663936670149:web:d80dd04675f858a96613ac"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectPageComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
