import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  categoryFilter: string = "All";
  currentRoute: string = this.router.url;
  projectToEdit: Project;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetail(project) {
    this.router.navigate(['project', project.$key]);
  }

  onChange(option) {
    this.categoryFilter = option;
  }

  startEdit(project: Project) {
    this.projectToEdit = project;
  }

}
