import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  setRole(role: string) {
    localStorage.setItem('role', role);

    if (role === 'student') {
      this.router.navigate(['/student/dashboard']);
    } else if (role === 'owner') {
      this.router.navigate(['/owner/dashboard']);
    }
  }
}
