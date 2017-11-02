import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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
  currentRoute: string = this.router.url;
  categoryFilter: string;

  projectToEdit: Project;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
    private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.route.params.forEach((urlParameters) => {
      this.categoryFilter = urlParameters['name'];
      if (!this.categoryFilter) {
        this.categoryFilter = "All";
      }
    });
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
