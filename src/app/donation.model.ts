import { Project } from './project.model';

export class Donation {

  constructor(
    public amount: number,
    public project: Project
  ) {}
}
