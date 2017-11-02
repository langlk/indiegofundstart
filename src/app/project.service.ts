import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Project } from './project.model';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectByID(id: string) {
    return this.database.object('projects/' + id);
  }

  addProject(project) {
    this.projects.push(project);
  }

  updateProject(project) {
    var projectInFirebase = this.getProjectByID(project.$key);
    projectInFirebase.update({fundingCurrent: project.fundingCurrent});
  }

}
