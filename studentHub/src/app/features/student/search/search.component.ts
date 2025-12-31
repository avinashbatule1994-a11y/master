import { Component } from "@angular/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  city = '';
  area = '';
  type = 'all';

  listings = [
    { id: 1, name: 'Sai Mess', type: 'mess', city: 'Pune', area: 'Hadapsar' },
    { id: 2, name: 'Shiv Hostel', type: 'hostel', city: 'Pune', area: 'Wakad' },
    { id: 3, name: 'Study Library', type: 'library', city: 'Mumbai', area: 'Andheri' },
  ];

  filtered = [...this.listings];

  search() {
    this.filtered = this.listings.filter(item =>
      (this.city ? item.city === this.city : true) &&
      (this.area ? item.area === this.area : true) &&
      (this.type !== 'all' ? item.type === this.type : true)
    );
  }
}
