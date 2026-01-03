import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = ""
  email = "";
  password = "";
  role: 'student' | 'owner' = 'student'
  constructor(private router: Router) { }
  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      role:this.role
    }
    localStorage.setItem('user', JSON.stringify(user))
    console.log('user stored data',user)

    this.router.navigate(['/login'])
  }
}
