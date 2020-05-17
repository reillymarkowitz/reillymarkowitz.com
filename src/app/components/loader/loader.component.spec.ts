import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { MessageService } from 'src/app/services/message.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let messageService: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    messageService = TestBed.get(MessageService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('onInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    
    it('should set showLoader to true', () => {
      const showLoader = (component as any).showLoader as boolean;
      expect(showLoader).toBe(true);
    });

    it('should set showLoader to false on NavigationLoadedEvent', () => {
      messageService.publishNavigationLoadedEvent({});
      const showLoader = (component as any).showLoader as boolean;
      expect(showLoader).toBe(false);
    });
  });
});
