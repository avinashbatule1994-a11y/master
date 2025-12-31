import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:'app-listing-details',
    templateUrl:'./listing-details.component.html',
    styleUrls:['./listing-details.component.scss']
})
export class ListingDetailsComponent {
  listingId!: number;

  constructor(private route: ActivatedRoute) {
    this.listingId = Number(this.route.snapshot.paramMap.get('id'));
  }
  addToFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push({ id: this.listingId, name: 'Dummy Listing' });
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert('Added to favorites');
}

}
