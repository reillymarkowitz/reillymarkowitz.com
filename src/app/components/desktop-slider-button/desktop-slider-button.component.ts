import { Component, Input } from '@angular/core';
import { SliderButtonComponent } from '../../base-components/slider-button/slider-button.component';

@Component({
  selector: 'desktop-slider-button',
  templateUrl: './desktop-slider-button.component.html',
  styleUrls: ['./desktop-slider-button.component.css']
})
export class DesktopSliderButtonComponent extends SliderButtonComponent {
  @Input() text: string;
  @Input() href: string;
  @Input() imgUrl: string;
}