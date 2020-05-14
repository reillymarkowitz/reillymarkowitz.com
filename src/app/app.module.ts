import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { NameBoxComponent } from './name-box/name-box.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderButtonComponent } from './slider-button/slider-button.component';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    VideoBackgroundComponent,
    NameBoxComponent,
    NavigationComponent,
    SliderButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
