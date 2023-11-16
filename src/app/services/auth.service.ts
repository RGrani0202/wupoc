import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';
// import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean = false;
  constructor( private route:Router) { }
  logOut(){
    this.loggedIn = false;
    this.route.navigate(['/'])
  }


  checkLogin() {
    return this.loggedIn;
  }
 
  Islogin(value: any):Observable<any> {
    if (value.email === "test" && value.password === "123") {
      this.loggedIn = true;
      return of({name:'Test Test', email:'test'})
    }
    return throwError(new Error('Failed to Login'));
  }


}
