import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private auth: AuthService, private router:Router) { }

loginAsStudent(){
  this.auth.loginAs('student')
  this.router.navigate(['/student/dashboard'])
}

loginOwner(){
  this.auth.loginAs('owner');
  this.router.navigate(['./owner/dashboard'])
}

logout(){
  this.auth.logout();
  this.router.navigate(['/'])
}
}
