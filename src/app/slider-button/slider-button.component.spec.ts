import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderButtonComponent } from './slider-button.component';
import { By } from '@angular/platform-browser';

describe('SliderButtonComponent', () => {
  let component: SliderButtonComponent;
  let fixture: ComponentFixture<SliderButtonComponent>;
  let buttonText: HTMLAnchorElement;
  let slider: HTMLAnchorElement;
  let image: HTMLImageElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderButtonComponent ]
    })
    .compileComponents();
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
