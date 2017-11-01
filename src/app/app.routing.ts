import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
