import { Injectable, Output, EventEmitter } from '@angular/core';
import { ButtonLoadedEvent } from '../models/events/button-loaded.event';
import { NavigationLoadedEvent } from '../models/events/navigation-loaded.event';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  @Output() buttonLoaded: EventEmitter<ButtonLoadedEvent> = new EventEmitter();
  @Output() navigationLoaded: EventEmitter<NavigationLoadedEvent> = new EventEmitter();
  
  constructor() { }

  publishButtonLoadedEvent(event: ButtonLoadedEvent) {
    this.buttonLoaded.emit(event);
  }

  publishNavigationLoadedEvent(event: NavigationLoadedEvent) {
    this.navigationLoaded.emit(event);
  }
}
