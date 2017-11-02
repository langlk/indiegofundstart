import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Donation } from '../donation.model';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css'],
  providers: [ProjectService, DonationService]
})

export class FundComponent implements OnInit {
  @Input() project: Project;
  constructor(
    private projectService: ProjectService,
    private donationService: DonationService
  ) { }

  ngOnInit() {
  }

  fundProject(amount: string){
    var fundAmount: number = parseInt(amount);
    if (fundAmount >= 1) {
      this.project.fundingCurrent += fundAmount;
      this.projectService.updateProject(this.project);
      var donation = new Donation(fundAmount, this.project);
      this.donationService.addDonation(donation);
    } else {
      alert('Amount must at least $1');
    }
  }
}
