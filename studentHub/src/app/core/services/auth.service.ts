import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

setRole (role:"student" | "owner"){
  localStorage.setItem('role', role)
}
getRole():string | null {
  return localStorage.getItem('role')
}
logout(){
localStorage.removeItem('role')
}
}
