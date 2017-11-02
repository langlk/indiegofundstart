import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Donation } from './donation.model';

@Injectable()
export class DonationService {
  donations: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.donations = database.list('donations');
  }

}
