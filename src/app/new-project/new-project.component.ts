import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  addProject(name: string, creator: string, description: string, fundingGoal: number, fundingUse: string, backerAwards: string, category: string) {
    var newProject: Project = new Project(name, creator, description, fundingGoal, fundingUse, backerAwards, category);
    this.projectService.addProject(newProject);
  }

}
