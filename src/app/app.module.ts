import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { NameBoxComponent } from './components/name-box/name-box.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SliderButtonComponent } from './components/slider-button/slider-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MobileSliderButtonComponent } from './components/mobile-slider-button/mobile-slider-button.component';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    NameBoxComponent,
    NavigationComponent,
    SliderButtonComponent,
    LoaderComponent,
    MobileSliderButtonComponent
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
