import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  private showLoader: boolean;

  constructor(private messageService: MessageService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.showLoader = true;
    this.messageService.navigationLoaded.subscribe(() => {
      this.showLoader = false;
      this.cd.detectChanges();
    });
  }

}
