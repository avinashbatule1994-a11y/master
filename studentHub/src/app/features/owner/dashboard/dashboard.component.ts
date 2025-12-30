import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class OwnerDashboardComponent {
selectedType:string='mess';
selectType(type:string){
  this.selectedType=type
}
}
