// import { Injectable } from "@angular/core";
// import { CanActivate, Router } from "@angular/router";
// import { AuthService } from "../services/auth.service";

// @Injectable({
//     providedIn:'root'
// })
// export class RoleGuard implements CanActivate{
// constructor(
//     private auth:AuthService, 
//     private router:Router
// ){}
//  canActivate(): boolean {
//     if (this.auth.isAuthenticated()) {
//       const role = this.auth.getRole();
//       this.router.navigate(
//         role === 'student' ? ['/student/dashboard'] : ['/owner/dashboard']
//       );
//       return false;
//     }
//     return true;
//   }
// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // ❌ Not logged in
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    const expectedRole = route.data['role'];
    const userRole = this.auth.getRole();

    // ❌ Role mismatch
    if (expectedRole && expectedRole !== userRole) {
      this.router.navigate(['/login']);
      return false;
    }

    // ✅ Allowed
    return true;
  }
}




//             Route opened
//             ↓
//             Does route have role?
//             ↓
//             NO → allow everyone (public route)
//             YES
//             ↓
//            Does user role match?
//             ↓
//            YES → allow
//            NO  → block
// 

// Owner scope is protected because expectedRole EXISTS, so public-access logic never runs.