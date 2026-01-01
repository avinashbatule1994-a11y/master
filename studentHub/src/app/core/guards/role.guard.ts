// import { Injectable } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot): boolean {
//     const expectedRole = route.data['role'];
//     const currentRole = localStorage.getItem('role');

//     if (currentRole === expectedRole) {
//       return true;
//     }

//     this.router.navigate(['/']);
//     return false;
//   }
// }
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
export const RoleGuard: CanActivateFn = (route) => {
    const router = inject(Router);
    const expectedRole = route.data['role'];
    const currentRole = localStorage.getItem('role');
    if (!expectedRole) {
        return true;
    }
    if (currentRole === expectedRole) {
        return true
    }
    return router.createUrlTree(['/unauthorized'])
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