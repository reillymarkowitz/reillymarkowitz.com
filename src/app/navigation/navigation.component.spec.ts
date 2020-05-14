import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from 'src/environments/environment';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [
        AngularFireModule.initializeApp(firebaseConfig)
      ],
      providers: [ AngularFireStorage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
