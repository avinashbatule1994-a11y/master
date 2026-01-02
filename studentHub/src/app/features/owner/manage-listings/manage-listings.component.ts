import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/shared/models/listing.model';
import { ListingService } from 'src/app/shared/services/listing.service';

@Component({
  selector: 'app-manage-listings',
  templateUrl: './manage-listings.component.html',
  styleUrls: ['./manage-listings.component.scss']
})
export class ManageListingsComponent {
  // listings :Listing[]= [
  //   { id: 1, name: 'SaiRaj Mess', type: 'mess', active: true },
  //   { id: 2, name: 'Shiv Hostel', type: 'hostel', active: false },
  //   { id: 3, name: 'Study Library', type: 'library', active: true }
  // ];
  listings: Listing[] = [];
  constructor(private router: Router, private listingService: ListingService) {
    this.listings=this.listingService.getAll()
   }

  toggleStatus(listing: Listing) {
    // listing.active = !listing.active;
    this.listingService.toggleStatus(listing)

  }
  editListing(id: number) {
    this.router.navigate(['/owner/edit-listing', id]);
  }

}

