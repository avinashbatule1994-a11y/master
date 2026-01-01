import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-listings',
  templateUrl: './manage-listings.component.html',
  styleUrls: ['./manage-listings.component.scss']
})
export class ManageListingsComponent {

   listings = [
    { id: 1, name: 'SaiRaj Mess', type: 'mess', active: true },
    { id: 2, name: 'Shiv Hostel', type: 'hostel', active: false },
    { id: 3, name: 'Study Library', type: 'library', active: true }
  ];

  toggleStatus(item: any) {
    item.active = !item.active;
  }
}

