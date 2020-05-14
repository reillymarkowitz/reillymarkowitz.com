import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { NameBoxComponent } from './name-box/name-box.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { SliderButtonComponent } from './slider-button/slider-button.component';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        VideoBackgroundComponent,
        NameBoxComponent,
        NavigationComponent,
        SliderButtonComponent
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
