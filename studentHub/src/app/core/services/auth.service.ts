import { Injectable } from '@angular/core';

export type UserRole ='student'|'owner'|null;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  private roleKey='role';
  loginAs(role:UserRole){
    if(role){
      localStorage.setItem(this.roleKey,role)
    }
  }

logout(){
  localStorage.removeItem(this.roleKey)
}
getRole(){
  return localStorage.getItem(this.roleKey)as UserRole
}
isStudent(){
  return this.getRole()==='student'
}
isOwner(){
  return this.getRole()==='owner'
}
isLoggedIn(){
  return !!this.getRole
}
}
