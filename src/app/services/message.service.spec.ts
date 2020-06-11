import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
import { ButtonLoadedEvent } from '../models/events/button-loaded.event';
import { BUTTON } from '../models/button';

describe('EventServiceService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MessageService);
    spyOn(service.buttonLoaded, 'emit');
    spyOn(service.navigationLoaded, 'emit');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('publishButtonLoadedEvent', () => {
    it('should emit the event it\'s given', () => {
      const event: ButtonLoadedEvent = { button: BUTTON.ResumeButton };

      service.publishButtonLoadedEvent(event);

      expect(service.buttonLoaded.emit).toHaveBeenCalledTimes(1);
      expect(service.buttonLoaded.emit).toHaveBeenCalledWith(event);
    });
  });

  describe('publishNavigationLoadedEvent', () => {
    it('should emit the event it\'s given', () => {
      service.publishNavigationLoadedEvent({});

      expect(service.navigationLoaded.emit).toHaveBeenCalledTimes(1);
      expect(service.navigationLoaded.emit).toHaveBeenCalledWith({});
    });
  });
});
