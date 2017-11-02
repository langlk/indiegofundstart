import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Donation } from '../donation.model';
import { Project } from '../project.model';
import { DonationService } from '../donation.service';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css'],
  providers: [DonationService, ProjectService]
})
export class DonationsComponent implements OnInit {
  donations: FirebaseListObservable<any[]>;
  constructor(
    private donationService: DonationService

  ) { }

  ngOnInit() {
    this.donations = this.donationService.getDonations();

  }

}
