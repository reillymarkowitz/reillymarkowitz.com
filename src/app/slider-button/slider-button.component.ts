import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.css']
})
export class SliderButtonComponent implements OnInit {
  @Input() text: string;
  @Input() href: string;
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
