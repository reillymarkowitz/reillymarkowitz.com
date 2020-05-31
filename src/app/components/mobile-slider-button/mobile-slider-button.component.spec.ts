import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSliderButtonComponent } from './mobile-slider-button.component';

describe('MobileSliderButtonComponent', () => {
  let component: MobileSliderButtonComponent;
  let fixture: ComponentFixture<MobileSliderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSliderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSliderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
