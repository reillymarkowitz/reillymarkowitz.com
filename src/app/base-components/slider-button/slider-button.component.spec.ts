import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderButtonComponent } from './slider-button.component';
import { MessageService } from 'src/app/services/message.service';
import { BUTTON } from 'src/app/models/button';

describe('SliderButtonComponent', () => {
  let component: SliderButtonComponent;
  let fixture: ComponentFixture<SliderButtonComponent>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MessageService', ['publishButtonLoadedEvent']);

    TestBed.configureTestingModule({
      declarations: [ SliderButtonComponent ],
      providers: [ { provide: MessageService, useValue: spy } ]
    })
    .compileComponents()
    .then(() => {
      messageServiceSpy = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('onInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should publish a ButtonLoadedEvent', () => {
      expect(messageServiceSpy.publishButtonLoadedEvent).toHaveBeenCalledTimes(1);
    });
  });

  describe('getButtonEnum', () => {
    it('should return Resume', () => {
      component.text = 'Resume';
      expect(component.getButtonEnum()).toBe(BUTTON.ResumeButton);
    });

    it('should return GitHub', () => {
      component.text = 'GitHub';
      expect(component.getButtonEnum()).toBe(BUTTON.GitHubButton);
    });

    it('should return LinkedIn', () => {
      component.text = 'LinkedIn';
      expect(component.getButtonEnum()).toBe(BUTTON.LinkedInButton);
    });

    it('should return Unknown', () => {
      expect(component.getButtonEnum()).toBe(BUTTON.Unknown);
    });
  });
});
