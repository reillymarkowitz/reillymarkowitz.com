import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { ButtonLoadedEvent } from 'src/app/models/events/button-loaded.event';
import { BUTTON } from 'src/app/models/button';

@Component({
  selector: 'mobile-slider-button',
  templateUrl: './mobile-slider-button.component.html',
  styleUrls: ['./mobile-slider-button.component.css']
})
export class MobileSliderButtonComponent implements OnInit {
  @Input() text: string;
  @Input() href: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    const event: ButtonLoadedEvent = { button: this.getButtonEnum() };
    this.messageService.publishButtonLoadedEvent(event);
  }

  getButtonEnum(): BUTTON {
    switch (this.text) {
      case 'Resume': return BUTTON.ResumeButton;
      case 'GitHub': return BUTTON.GitHubButton;
      case 'LinkedIn': return BUTTON.LinkedInButton;
      default: return BUTTON.Unknown;
    }
  }
}
