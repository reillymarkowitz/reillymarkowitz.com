import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileSliderButtonComponent } from './mobile-slider-button.component';
import { By } from '@angular/platform-browser';

describe('MobileSliderButtonComponent', () => {
  let component: MobileSliderButtonComponent;
  let fixture: ComponentFixture<MobileSliderButtonComponent>;
  let buttonText: HTMLAnchorElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSliderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSliderButtonComponent);

    component = fixture.componentInstance;
    component.text = 'Click Me!';
    component.href = 'https://website.com/';

    fixture.detectChanges();
    buttonText = getHtmlAnchorElementByCss('#text');
  });

  function getHtmlAnchorElementByCss(selector: string): HTMLAnchorElement {
    return fixture.debugElement.query(By.css(selector)).nativeElement as HTMLAnchorElement;
  }

  describe('button', () => {
    it('should display the correct text', () => {
      expect(buttonText.innerHTML).toBe(component.text);
    });
  
    it('should link to the correct url', () => {
      expect(buttonText.href).toBe(component.href);
    });
  
    it('should open link in a new tab', () => {
      expect(buttonText.target).toBe('_blank');
    });
  });
});
