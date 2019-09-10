import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  title: string;
  description: string;
  projectURL: string;

  constructor(projectService: ProjectService, projectID: string) {
    const dataPromise = projectService.getProjectData(projectID);
    
    dataPromise.then(data => {
      this.title = data.title;
      this.description = data.description;
      this.projectURL = data.projectURL;
    });
  }

  ngOnInit() {
    
  }

}
