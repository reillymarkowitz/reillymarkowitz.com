import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NameBoxComponent } from './components/name-box/name-box.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { DesktopSliderButtonComponent } from './components/desktop-slider-button/desktop-slider-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MobileSliderButtonComponent } from './components/mobile-slider-button/mobile-slider-button.component';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NameBoxComponent,
        NavigationComponent,
        DesktopSliderButtonComponent,
        MobileSliderButtonComponent,
        LoaderComponent
      ],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule
      ],
      providers: [AngularFirestore, AngularFireStorage]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
