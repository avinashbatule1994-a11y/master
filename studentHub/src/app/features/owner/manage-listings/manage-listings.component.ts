import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-listings',
  templateUrl: './manage-listings.component.html',
  styleUrls: ['./manage-listings.component.scss']
})
export class ManageListingsComponent {
  listings = [
    { name: 'Sai Mess', type: 'mess', active: true },
    { name: 'Shiv Hostel', type: 'hostel', active: false },
    { name: 'Study Library', type: 'library', active: true },
  ];

  toggle(item: any) {
    item.active = !item.active;
  }
}

