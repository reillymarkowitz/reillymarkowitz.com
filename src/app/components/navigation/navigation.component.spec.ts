import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SliderButtonComponent } from '../slider-button/slider-button.component';
import { MessageService } from 'src/app/services/message.service';
import { BUTTON } from 'src/app/models/button';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let messageService: MessageService;
  let navigationLoadedEmitSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent, SliderButtonComponent ],
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

    messageService = TestBed.get(MessageService);
    navigationLoadedEmitSpy = spyOn(messageService.navigationLoaded, 'emit');

    fixture.detectChanges();
  });

  describe('onInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should publish a NavigationLoadedEvent after all buttons are loaded', () => {
      const buttonLoadedEvents = [
        { button: BUTTON.ResumeButton },
        { button: BUTTON.LinkedInButton },
        { button: BUTTON.GitHubButton }
      ];
  
      messageService.publishButtonLoadedEvent(buttonLoadedEvents[0]);
      expect(navigationLoadedEmitSpy).toHaveBeenCalledTimes(0);
  
      buttonLoadedEvents.forEach(event => {
        messageService.publishButtonLoadedEvent(event);
      });
  
      expect(navigationLoadedEmitSpy).toHaveBeenCalledTimes(1);
    });
  });
});
