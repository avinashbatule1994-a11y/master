import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class StudentDashboardComponent {
stats={
  favourites:JSON.parse(localStorage.getItem('favourites') || "[]").length,
  viewed:6,
  contacted:2
}
}
