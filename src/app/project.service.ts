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
    projectInFirebase.update({
      name: project.name,
      creator: project.creator,
      description: project.description,
      fundingGoal: project.fundingGoal,
      fundingCurrent: project.fundingCurrent,
      fundingUse: project.fundingUse,
      backerAwards: project.backerAwards,
      category: project.category,
      featured: project.featured
    });
  }

  delete(project) {
    var projectInFirebase = this.getProjectByID(project.$key);
    projectInFirebase.remove();
  }

}
