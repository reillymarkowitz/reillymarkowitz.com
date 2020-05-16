import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { ButtonLoadedEvent } from '../../models/events/button-loaded.event';
import { BUTTON } from 'src/app/models/button';

@Component({
  selector: 'slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.css']
})
export class SliderButtonComponent implements OnInit {
  @Input() text: string;
  @Input() href: string;
  @Input() imgUrl: string;

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
