import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { NameBoxComponent } from './name-box/name-box.component';
import { NavigationComponent } from './navigation/navigation.component';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    VideoBackgroundComponent,
    NameBoxComponent,
    NavigationComponent
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
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
