import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projectCards: ProjectCardComponent[];

  constructor(projectService: ProjectService) {
    const fractal = new ProjectCardComponent(projectService, 'odFdkC586V8Rw295AATu');
    this.projectCards = [fractal];
  }

  ngOnInit() {
    console.log(this.projectCards.length);
  }

}
