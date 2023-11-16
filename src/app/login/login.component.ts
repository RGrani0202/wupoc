import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // email: string;
  // password: string;
  constructor(private router: Router, private auth:AuthService) { }
  Continue(value:any) {
    console.log(value);
    this.auth.Islogin(value).subscribe(
      (res:any)=>{
        this.router.navigate(['/my-receivers']);

      },
      (e:Error)=>{
        console.log("failed");
        
      }
    )
    
  }

  ngOnInit(): void {
  }

}
