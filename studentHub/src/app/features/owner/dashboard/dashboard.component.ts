import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class OwnerDashboardComponent {
selectedType:string='mess';
ownerBusinesses = ['mess', 'hostel', 'library'];
  stats = {
    totalListings: 5,
    active: 3,
    inactive: 2,
    totalViews: 124,
    totalContacts: 18
  };
selectType(type:string){
  this.selectedType=type
}

}
// export class OwnerDashboardComponent {
//   total = 5;
//   active = 3;
//   inactive = 2;
// }
