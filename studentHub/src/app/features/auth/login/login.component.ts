// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/core/services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   email = "";
//   password = "";
//   role: 'student' | 'owner' = 'student'

//   constructor(
//     private auth: AuthService,
//     private router: Router
//   ) {

//   }
//   login() {
//     // falke token
//     this.auth.loginAs(this.role);
//     if (this.role === 'student') {
//       this.router.navigate(['/student/dashboard'])
//     } else {
//       this.router.navigate(['/owner/dashboard'])
//     }
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = '';
  password = '';
  role: 'student' | 'owner' = 'student';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    // fake JWT login (frontend only)
    this.auth.loginWithToken('dummy-jwt-token', this.role);

    if (this.role === 'student') {
      this.router.navigate(['/student/dashboard']);
    } else {
      this.router.navigate(['/owner/dashboard']);
    }
  }
}
