// // import { Component } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { AuthService } from 'src/app/core/services/auth.service';

// // @Component({
// //   selector: 'app-login',
// //   templateUrl: './login.component.html',
// //   styleUrls: ['./login.component.scss']
// // })
// // export class LoginComponent {
// //   email = "";
// //   password = "";
// //   role: 'student' | 'owner' = 'student'

// //   constructor(
// //     private auth: AuthService,
// //     private router: Router
// //   ) {

// //   }
// //   login() {
// //     // falke token
// //     this.auth.loginAs(this.role);
// //     if (this.role === 'student') {
// //       this.router.navigate(['/student/dashboard'])
// //     } else {
// //       this.router.navigate(['/owner/dashboard'])
// //     }
// //   }
// // }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/core/services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

//   email = '';
//   password = '';
//   role: 'student' | 'owner' = 'student';

//   constructor(
//     private auth: AuthService,
//     private router: Router
//   ) {}

//   login() {
//     // fake JWT login (frontend only)
//     this.auth.loginWithToken('dummy-jwt-token', this.role);

//     if (this.role === 'student') {
//       this.router.navigate(['/student/dashboard']);
//     } else {
//       this.router.navigate(['/owner/dashboard']);
//     }
//   }
//   logout() {
//   this.auth.logout();
//   this.router.navigate(['/login']);
// }

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

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      alert('User not found. Please register first.');
      return;
    }

    const user = JSON.parse(storedUser);

    // ✅ Validate credentials
    if (user.email !== this.email || user.password !== this.password) {
      alert('Invalid email or password');
      return;
    }

    // ✅ Login using stored role
    this.auth.loginWithToken('dummy-jwt-token', user.role);

    // ✅ Redirect based on role
    if (user.role === 'student') {
      this.router.navigate(['/student/dashboard']);
    } else {
      this.router.navigate(['/owner/dashboard']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
