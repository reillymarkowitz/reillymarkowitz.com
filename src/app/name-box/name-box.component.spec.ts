import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NameBoxComponent } from './name-box.component';
import { By } from '@angular/platform-browser';

describe('NameBoxComponent', () => {
  let component: NameBoxComponent;
  let fixture: ComponentFixture<NameBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct name', () => {
    const nameElement = fixture.debugElement.query(By.css('.name')).nativeElement as HTMLSpanElement;
    expect(nameElement.innerText).toBe('Reilly Markowitz');
  });

  it('should display the correct job title', () => {
    const titleElement = fixture.debugElement.query(By.css('.title')).nativeElement as HTMLSpanElement;
    expect(titleElement.innerText).toBe('Software Engineer');
  });
});
