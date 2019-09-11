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
import { environment } from 'src/environments/environment';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { NameBoxComponent } from './name-box/name-box.component';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectCardComponent,
    ProjectPageComponent,
    VideoBackgroundComponent,
    NameBoxComponent
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
