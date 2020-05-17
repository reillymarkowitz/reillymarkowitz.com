import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderButtonComponent } from './slider-button.component';
import { By } from '@angular/platform-browser';
import { MessageService } from 'src/app/services/message.service';
import { BUTTON } from 'src/app/models/button';

describe('SliderButtonComponent', () => {
  let component: SliderButtonComponent;
  let fixture: ComponentFixture<SliderButtonComponent>;
  let buttonText: HTMLAnchorElement;
  let slider: HTMLAnchorElement;
  let image: HTMLImageElement;
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
    component.text = 'Click Me!';
    component.href = 'https://website.com/';
    component.imgUrl = 'https://website.com/image.jpg';

    fixture.detectChanges();

    buttonText = getHtmlAnchorElementByCss('#text');
    slider = getHtmlAnchorElementByCss('.slider');
    image = slider.firstChild as HTMLImageElement;
  });

  function getHtmlAnchorElementByCss(selector: string): HTMLAnchorElement {
    return fixture.debugElement.query(By.css(selector)).nativeElement as HTMLAnchorElement;
  }

  describe('onInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should publish a ButtonLoadedEvent', () => {
      expect(messageServiceSpy.publishButtonLoadedEvent).toHaveBeenCalledTimes(1);
    });
  });

  describe('button', () => {
    it('should display the correct text', () => {
      expect(buttonText.innerHTML).toBe(component.text);
    });
  
    it('should link to the correct url', () => {
      expect(slider.href).toBe(component.href);
    });
  
    it('should open link in a new tab', () => {
      expect(slider.target).toBe('_blank');
    });
  
    it('should display the correct image', () => {
      expect(image.src).toBe(component.imgUrl);
    });
  
    it('should display the correct alt text', () => {
      expect(image.alt).toBe(component.text);
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
