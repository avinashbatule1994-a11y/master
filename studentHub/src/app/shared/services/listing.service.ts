import { Injectable } from '@angular/core';
import { Listing } from '../models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {


  private listings: Listing[] = [
    {
      id: 1,
      name: 'Shree Mess',
      type: 'mess',
      city: 'Pune',
      area: 'Hinjewadi',
      active: true,
      images: [],
    },
    {
      id: 2,
      name: 'Sai Hostel',
      type: 'hostel',
      city: 'Pune',
      area: 'Baner',
      active: false,
      images: [],
    }
  ];

  getAll() {
    console.log('all data fetched')
    return this.listings
  }
  getById(id: number) {
    return this.listings.find(key => key.id === id)
  }

  add(listing: Listing) {
    listing.id = Date.now();
    this.listings.push(listing)
  }
  update(updated: Listing) {
    const index = this.listings.findIndex(list => list.id === updated.id)
    if (index > -1) {
      this.listings[index] = updated;

    }
  }
  toggleStatus(listing: Listing) {
    listing.active = !listing.active
  }
}
