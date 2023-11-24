import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReceiversService } from '../services/receivers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myReceiver: boolean = false;
  addReceiver: boolean = false;
  logOut: boolean = true;
  changeHeader: boolean;

  constructor(private route: Router, private auth: AuthService) {

  }

  ngOnInit(): void {

    console.log(this.route.events.subscribe((value) => {
      console.log(value);
    }));





    this.route.events.subscribe((value: any) => {

      if (value.url) {

        if (value.url === "/") {
          this.logOut = false;
        }

        else {
          this.logOut = true;

        }
        
      

        if (value.url === "/add-receiver") {
          this.myReceiver = true;
        }

        else {
          this.myReceiver = false;

        }
        if (value.url === "/my-receivers") {
          this.addReceiver = true;
        }


        else {
          this.addReceiver = false;

        }
      }


      if(value.url === '/send-money'){
        this.addReceiver=true;
        this.myReceiver=true;

      }

    })
  }
  logfun() {
    this.auth.logOut();
  }

}


