import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MessageService } from '../../services/message.service';
import { ButtonLoadedEvent } from 'src/app/models/events/button-loaded.event';
import { BUTTON } from 'src/app/models/button';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private doneLoading: boolean;
  private resumeUrl: string;
  private resumeIconUrl: string;
  private githubIconUrl: string;
  private linkedinIconUrl: string;

  constructor(private storage: AngularFireStorage, private messageService: MessageService) { }

  ngOnInit() {
    this.setResumeUrl();
    this.setButtonIconUrls();
    this.publishNavigationLoadedEventOnButtonsLoaded();
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

  publishNavigationLoadedEventOnButtonsLoaded() {
    const loadedButtons = new Set();
    this.messageService.buttonLoaded.subscribe((event: ButtonLoadedEvent) => {
      if (event.button !== BUTTON.Unknown) {
        loadedButtons.add(event.button);
      }

      if (loadedButtons.size === 3) {
        this.doneLoading = true;
        this.messageService.navigationLoaded.emit();
      }
    });
  }
}
