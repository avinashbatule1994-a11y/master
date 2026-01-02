// import { Injectable } from '@angular/core';

// export type UserRole = 'student' | 'owner' | null;
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor() { }
//   private roleKey = 'role';
// ////////////////////////////////////

//   loginWithToken(token: string, role: 'student' | 'owner') {
//     localStorage.setItem('token', token);
//     localStorage.setItem('role', role)
//   }

//   getToken() {
//     return localStorage.getItem('token')
//   }

//   isAuthenticated() {
//     return !!this.getToken()
//   }

//   /////////////////////////////////

//   loginAs(role: UserRole) {
//     if (role) {
//       localStorage.setItem(this.roleKey, role)
//     }
//   }

//   logout() {
//     localStorage.removeItem(this.roleKey)
//   }
//   getRole() {
//     return localStorage.getItem(this.roleKey) as UserRole
//   }
//   isStudent() {
//     return this.getRole() === 'student'
//   }
//   isOwner() {
//     return this.getRole() === 'owner'
//   }
//   isLoggedIn() {
//     return !!this.getRole()
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type UserRole = 'student' | 'owner' | null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private roleKey = 'role';
  private tokenKey = 'token';

  // ================= AUTH =================

  loginWithToken(token: string, role: UserRole) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.roleKey, role!);
  }

  loginAs(role: UserRole) {
    // TEMP login (before backend)
    if (role) {
      localStorage.setItem(this.roleKey, role);
      localStorage.setItem(this.tokenKey, 'dummy-token');
    }
  }

  logout() {
    localStorage.removeItem(this.roleKey);
    localStorage.removeItem(this.tokenKey);
  }

  // ================= GETTERS =================

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRole(): UserRole {
    return localStorage.getItem(this.roleKey) as UserRole;
  }

  // ================= CHECKS =================

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isStudent(): boolean {
    return this.getRole() === 'student';
  }

  isOwner(): boolean {
    return this.getRole() === 'owner';
  }
}
