import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoBackgroundComponent } from './video-background.component';
import { By } from '@angular/platform-browser';

describe('VideoBackgroundComponent', () => {
  let component: VideoBackgroundComponent;
  let fixture: ComponentFixture<VideoBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('video', () => {
    let videoElement: HTMLVideoElement;

    beforeEach(() => {
      videoElement = fixture.debugElement.query(By.css('#videoBackground')).nativeElement as HTMLVideoElement;
    });

    it('should autoplay', () => {
      expect(videoElement.autoplay).toBe(true);
    });

    it('should be muted', () => {
      expect(videoElement.muted).toBe(true);
    });
  });
});
