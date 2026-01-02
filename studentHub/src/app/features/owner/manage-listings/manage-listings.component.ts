import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-manage-listings',
  templateUrl: './manage-listings.component.html',
  styleUrls: ['./manage-listings.component.scss']
})
export class ManageListingsComponent {
  constructor(private router: Router) { }
  listings :Listing[]= [
    { id: 1, name: 'SaiRaj Mess', type: 'mess', active: true },
    { id: 2, name: 'Shiv Hostel', type: 'hostel', active: false },
    { id: 3, name: 'Study Library', type: 'library', active: true }
  ];

  toggleStatus(item: Listing) {
    item.active = !item.active;
  }
  editListing(id: number) {
    this.router.navigate(['/owner/edit-listing', id]);
  }

}

