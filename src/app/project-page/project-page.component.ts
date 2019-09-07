import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projectCards: ProjectCardComponent[];

  constructor() {
    const test1 = new ProjectCardComponent("helllo", "goodbye");
    const test2 = new ProjectCardComponent("heu", "yoooooo");

    this.projectCards = [test1, test2];
  }

  ngOnInit() {
    console.log(this.projectCards.length);
  }

}
