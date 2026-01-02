import { Component } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent {

  listings: Listing[] = [
    {
      id: 1,
      name: 'Sai Hostel',
      type: 'hostel',
      city: 'Pune',
      area: 'Karve Nagar',
      active: true,
      price:2000,
    },
    {
      id: 2,
      name: 'Shree Mess',
      type: 'mess',
      city: 'Mumbai',
      area: 'Andheri',
      active: true,
      price:5000
    }
  ];
}
