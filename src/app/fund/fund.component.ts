import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css'],
  providers: [ProjectService]
})

export class FundComponent implements OnInit {
  @Input() project: Project;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  fundProject(amount: string){
    if (parseInt(amount) >= 1) {
      this.project.fundingCurrent += parseInt(amount);
      this.projectService.updateProject(this.project);
    } else {
      alert('Amount must at least $1');
    }
  }
}
