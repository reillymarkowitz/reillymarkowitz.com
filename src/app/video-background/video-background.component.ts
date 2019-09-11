import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css']
})
export class VideoBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const video = <HTMLVideoElement>document.getElementById('videoBackground');
    video.muted = true;
  }

}
