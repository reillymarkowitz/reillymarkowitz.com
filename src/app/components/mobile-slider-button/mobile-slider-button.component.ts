import { Component, Input } from '@angular/core';
import { SliderButtonComponent } from 'src/app/base-components/slider-button/slider-button.component';

@Component({
  selector: 'mobile-slider-button',
  templateUrl: './mobile-slider-button.component.html',
  styleUrls: ['./mobile-slider-button.component.css']
})
export class MobileSliderButtonComponent extends SliderButtonComponent {
  @Input() text: string;
  @Input() href: string;
}