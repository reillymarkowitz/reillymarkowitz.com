import { OnInit, Input, Inject, forwardRef, Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { ButtonLoadedEvent } from '../../models/events/button-loaded.event';
import { BUTTON } from '../../models/button';

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.css']
})
export class SliderButtonComponent implements OnInit {
  @Input() text: string;
  @Input() href: string;

  constructor(@Inject(forwardRef(() => MessageService)) private messageService: MessageService) { }

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