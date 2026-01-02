import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn:'root'
})
export class RoleGuard implements CanActivate{
constructor(
    private auth:AuthService, 
    private router:Router
){}
canActivate(route:any):boolean{
const expectedRole=route.data['role'];
const UserRole=this.auth.getRole();
if(UserRole!==expectedRole){
    this.router.navigate(['/']);
    return false
}
return true
}

}


// import { inject } from "@angular/core";
// import { CanActivateFn, Router } from "@angular/router";
// export const RoleGuard: CanActivateFn = (route) => {
//     const router = inject(Router);
//     const expectedRole = route.data['role'];
//     const currentRole = localStorage.getItem('role');
//     if (!expectedRole) {
//         return true;
//     }
//     if (currentRole === expectedRole) {
//         return true
//     }
//     return router.createUrlTree(['/unauthorized'])
// }


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