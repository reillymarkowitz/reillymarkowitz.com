import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
import { ButtonLoadedEvent } from '../models/events/button-loaded.event';
import { BUTTON } from '../models/button';

describe('EventServiceService', () => {
  let service: MessageService;
  let buttonLoadedEmitSpy: jasmine.Spy;
  let navigationLoadedEmitSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MessageService);
    buttonLoadedEmitSpy = spyOn(service.buttonLoaded, 'emit');
    navigationLoadedEmitSpy = spyOn(service.navigationLoaded, 'emit');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('publishButtonLoadedEvent', () => {
    it('should emit the event it\'s given', () => {
      const event: ButtonLoadedEvent = { button: BUTTON.ResumeButton };

      service.publishButtonLoadedEvent(event);

      expect(buttonLoadedEmitSpy).toHaveBeenCalledTimes(1);
      expect(buttonLoadedEmitSpy).toHaveBeenCalledWith(event);
    });
  });

  describe('publishNavigationLoadedEvent', () => {
    it('should emit the event it\'s given', () => {
      service.publishNavigationLoadedEvent({});

      expect(navigationLoadedEmitSpy).toHaveBeenCalledTimes(1);
      expect(navigationLoadedEmitSpy).toHaveBeenCalledWith({});
    });
  });
});
