import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:'app-listing-details',
    templateUrl:'./listing-details.component.html',
    styleUrls:['./listing-details.component.scss']
})
export class ListingDetailsComponent {

  listingId!: number;

  listing: any;

  dummyListings = [
    {
      id: 1,
      name: 'Sai Mess',
      type: 'mess',
      city: 'Pune',
      area: 'Hadapsar',
      active: true,
      images: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ],
      menu: {
        enabled: true,
        breakfast: 'Poha',
        lunch: 'Thali',
        dinner: 'Rice & Dal'
      }
    },
    {
      id: 2,
      name: 'Shiv Hostel',
      type: 'hostel',
      city: 'Pune',
      area: 'Wakad',
      active: false,
      images: ['https://via.placeholder.com/150']
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.listingId = Number(this.route.snapshot.paramMap.get('id'));
    this.listing = this.dummyListings.find(l => l.id === this.listingId);
  }
  addToFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push({ id: this.listingId, name: 'Dummy Listing' });
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert('Added to favorites');
}

}
