import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-listings',
  templateUrl: './manage-listings.component.html',
  styleUrls: ['./manage-listings.component.scss']
})
export class ManageListingsComponent {
  // listings = [
  //   { name: 'Sai Mess', type: 'mess', active: true },
  //   { name: 'Shiv Hostel', type: 'hostel', active: false },
  //   { name: 'Study Library', type: 'library', active: true },
  // ];
// ownerBusinesses = ['mess', 'hostel', 'library'];

   listings = [
    { id: 1, name: 'Sai Mess', type: 'mess', active: true },
    { id: 2, name: 'Shiv Hostel', type: 'hostel', active: false },
    { id: 3, name: 'Study Library', type: 'library', active: true }
  ];

  // toggle(item: any) {
  //   item.active = !item.active;
  // }
  toggleStatus(item: any) {
    item.active = !item.active;
  }
}

