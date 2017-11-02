import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  update() {
    this.projectService.updateProject(this.project);
  }

  delete() {
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.delete(this.project);
    }
  }

}
