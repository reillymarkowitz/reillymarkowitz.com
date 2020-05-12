import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { By } from '@angular/platform-browser';
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

  describe('resume button', () => {
    let resumeButton: HTMLAnchorElement;

    beforeEach(() => {
      resumeButton = fixture.debugElement.query(By.css('#resumeButton')).nativeElement;
    });

    it('should create', () => {
      expect(resumeButton).toBeTruthy();
    });

    it('should display the correct text', () => {
      expect(resumeButton.innerText).toBe('Resume');
    });

    it('should open link in a new tab when clicked', () => {
      expect(resumeButton.target).toBe('_blank');
    });
  });

  describe('GitHub button', () => {
    let githubButton: HTMLAnchorElement;

    beforeEach(() => {
      githubButton = fixture.debugElement.query(By.css('#githubButton')).nativeElement;
    });

    it('should create', () => {
      expect(githubButton).toBeTruthy();
    });

    it('should display the correct text', () => {
      expect(githubButton.innerText).toBe('GitHub');
    });

    it('should open link in a new tab when clicked', () => {
      expect(githubButton.target).toBe('_blank');
    });
  });

  describe('LinkedIn button', () => {
    let linkedinButton: HTMLAnchorElement;

    beforeEach(() => {
      linkedinButton = fixture.debugElement.query(By.css('#linkedinButton')).nativeElement;
    });

    it('should create', () => {
      expect(linkedinButton).toBeTruthy();
    });

    it('should display the correct text', () => {
      expect(linkedinButton.innerText).toBe('LinkedIn');
    });

    it('should open link in a new tab when clicked', () => {
      expect(linkedinButton.target).toBe('_blank');
    });
  });
});
