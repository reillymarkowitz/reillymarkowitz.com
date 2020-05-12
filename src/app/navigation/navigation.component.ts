import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private resumeUrl: string;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    const resumePath = 'Resumes/Spring 2020.pdf';
    const resumeRef = this.storage.ref(resumePath);
    resumeRef.getDownloadURL().subscribe(
      url => {
        this.resumeUrl = url;
      },
      error => {
        this.resumeUrl = '';
      }
    );
  }

}
