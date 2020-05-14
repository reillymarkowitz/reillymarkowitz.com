import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private resumeUrl: string;
  private resumeIconUrl: string;
  private githubIconUrl: string;
  private linkedinIconUrl: string;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    this.setResumeUrl();
    this.setButtonIconUrls();
  }

  isLoaded() {
    const requiredFields = [ 
      this.resumeUrl, 
      this.resumeIconUrl, 
      this.githubIconUrl, 
      this.linkedinIconUrl 
    ];
    
    return requiredFields.every(field => typeof(field) !== 'undefined');
  }

  setResumeUrl() {
    this.setFieldToFileDownloadUrl('resumeUrl', 'Reilly_Markowitz.pdf');
  }

  setButtonIconUrls() {
    this.setFieldToFileDownloadUrl('resumeIconUrl', 'button_icons/resume.png');
    this.setFieldToFileDownloadUrl('githubIconUrl', 'button_icons/github.png');
    this.setFieldToFileDownloadUrl('linkedinIconUrl', 'button_icons/linkedin.png');
  }

  setFieldToFileDownloadUrl(fieldName: string, filePath: string) {
    const observable = this.storage.ref(filePath).getDownloadURL();
    observable.subscribe(
      url => { this[fieldName] = url; },
      error => { this[fieldName] = ''; }
    );
  }
}
