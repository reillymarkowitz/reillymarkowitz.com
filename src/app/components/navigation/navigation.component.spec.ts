import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MessageService } from 'src/app/services/message.service';
import { BUTTON } from 'src/app/models/button';
import { DesktopSliderButtonComponent } from '../desktop-slider-button/desktop-slider-button.component';
import { MobileSliderButtonComponent } from '../mobile-slider-button/mobile-slider-button.component';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let messageService: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent, DesktopSliderButtonComponent, MobileSliderButtonComponent ],
      imports: [
        AngularFireModule.initializeApp(firebaseConfig)
      ],
      providers: [ AngularFireStorage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    messageService = TestBed.get(MessageService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyOn(component, 'setIsMobile');
      spyOn(component, 'setUrls');
      spyOn(component, 'publishNavigationLoadedEventOnButtonsLoaded');

      component.ngOnInit();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call setIsMobile', () => {
      expect(component.setIsMobile).toHaveBeenCalledTimes(1);
    });

    it('should call setUrls', () => {
      expect(component.setUrls).toHaveBeenCalledTimes(1);
    });

    it('should call publishNavigationLoadedEventOnButtonsLoaded', () => {
      expect(component.publishNavigationLoadedEventOnButtonsLoaded).toHaveBeenCalledTimes(1);
    });
  });

  describe('setUrls', () => {
    beforeEach(() => {
      spyOn(component, 'setResumeUrl');
      spyOn(component, 'setButtonIconUrls');

      component.setUrls();
    });

    it('should call setResumeUrl', () => {
      expect(component.setResumeUrl).toHaveBeenCalledTimes(1);
    });

    it('should call setButtonIconUrls', () => {
      expect(component.setButtonIconUrls).toHaveBeenCalledTimes(1);
    });
  });

  describe('setResumeUrl', () => {
    beforeEach(() => {
      spyOn(component, 'setFieldToFileDownloadUrl');

      component.setResumeUrl();
    });

    it('should call setFieldToFileDownloadUrl with resumeUrl', () => {
      expect(component.setFieldToFileDownloadUrl).toHaveBeenCalledTimes(1);
      expect(component.setFieldToFileDownloadUrl).toHaveBeenCalledWith('resumeUrl', 'Reilly_Markowitz.pdf');
    });
  });

  describe('publishNavigationLoadedEventOnButtonsLoaded', () => {
    beforeEach(() => {
      spyOn(messageService.buttonLoaded, 'subscribe');

      component.publishNavigationLoadedEventOnButtonsLoaded();
    });

    it('should initialize this.loadedButtons', () => {
      expect(component.loadedButtons).toBeDefined();
      expect(component.loadedButtons.size).toBe(0);
    });

    it('should call messageService.buttonLoaded.subscribe', () => {
      expect(messageService.buttonLoaded.subscribe).toHaveBeenCalledTimes(1);
    });
  });

  describe('consumeButtonLoadedEvent', () => {
    beforeEach(() => {
      spyOn(component, 'publishNavigationLoadedEvent');

      component.loadedButtons = new Set();
    });

    it('should add event.button to this.loadedButtons', () => {
      component.consumeButtonLoadedEvent({ button: BUTTON.ResumeButton });

      expect(component.loadedButtons.size).toBe(1);
    });

    it('should not add BUTTON.Unknown to this.loadedButtons', () => {
      component.consumeButtonLoadedEvent({ button: BUTTON.Unknown });

      expect(component.loadedButtons.size).toBe(0);
    });

    it('should call publishNavigationLoadedEvent after all 3 buttons have been loaded', () => {
      component.consumeButtonLoadedEvent({ button: BUTTON.ResumeButton });
      expect(component.publishNavigationLoadedEvent).toHaveBeenCalledTimes(0);

      component.consumeButtonLoadedEvent({ button: BUTTON.GitHubButton });
      expect(component.publishNavigationLoadedEvent).toHaveBeenCalledTimes(0);

      component.consumeButtonLoadedEvent({ button: BUTTON.GitHubButton });
      expect(component.publishNavigationLoadedEvent).toHaveBeenCalledTimes(0);

      component.consumeButtonLoadedEvent({ button: BUTTON.LinkedInButton });
      expect(component.publishNavigationLoadedEvent).toHaveBeenCalledTimes(1);
    });
  });

  describe('publishNavigationLoadedEvent', () => {
    beforeEach(() => {
      spyOn(messageService.navigationLoaded, 'emit');

      component.publishNavigationLoadedEvent();
    });

    it('should set this.doneLoading to true', () => {
      expect(component.doneLoading).toBe(true);
    });

    it('should call this.messageService.navigationLoaded().emit', () => {
      expect(messageService.navigationLoaded.emit).toHaveBeenCalledTimes(1);
    });
  });
});