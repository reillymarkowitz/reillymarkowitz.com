import { Injectable, Output, EventEmitter } from '@angular/core';
import { ButtonLoadedEvent } from '../models/events/button-loaded.event';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  @Output() navigationLoaded: EventEmitter<any> = new EventEmitter();
  @Output() buttonLoaded: EventEmitter<ButtonLoadedEvent> = new EventEmitter();
  
  constructor() { }
}
