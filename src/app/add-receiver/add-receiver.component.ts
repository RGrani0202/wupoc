import { Component, OnInit } from '@angular/core';
import { ReceiversService } from "../services/receivers.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { KeyValue } from "@angular/common";

@Component({
  selector: 'app-add-receiver',
  templateUrl: './add-receiver.component.html',
  styleUrls: ['./add-receiver.component.css']
})
export class AddReceiverComponent implements OnInit {
  selectedCountry: string;
  countryData: any = {};
  countries: any = [];
  receiverList: Array<Object> = [];
  types = ["Mobile", "Telephone"];

  constructor(private router: Router, private auth: AuthService, 
    private receiver: ReceiversService, private http: HttpClient) {

  }

  continue(value: any) {
    this.receiver.saveReceiver(value).subscribe((result) => {
      console.log(result);
      alert("receiver added !");
      this.router.navigate(['/my-receivers']);
    })
   }
  isEmailRequired() {
    const country = this.selectedCountry
    let check = false;
    console.log("country", this.selectedCountry);
    // console.log(country);

    // console.warn(this.countryData[0].usa.isFirstNameRequired);
    // console.log(this.selectedCountry);
  
    if (country && this.countryData) {
      switch (country) {
        case 'usa': {
          check = this.countryData[0].usa.isEmailRequired;
        }
          break;
        // console.log(this.countryData[0].usa.isLastNameRequired);
          case 'india':
          // console.log(this.countryData[0].india.isLastNameRequired);
          {
            check = this.countryData[0].india.isEmailRequired;
          }
          break;
        default:
          check = false;
      }}
    else {
      check = false;
    }
    console.log(check);
    return check;
  }

  isLastNameRequired() {
    const country = this.selectedCountry
    let check = false;
    console.log("country", this.selectedCountry);
    if (country && this.countryData) {
      switch (country) {
        case 'usa': {
          check = this.countryData[0].usa.isLastNameRequired;
        }
          break;

        case 'india':

          {
            check = this.countryData[0].india.isLastNameRequired;
          }
          break;
        default:
          check = false;
      }

    }
    else {
      check = false;
    }
    console.log(check);
    return check;
  }

  // this.selectedCountry = this.countryData[0].find((e: any) => {
  //   return e.name === event.target.value;
  // }
  // )
  // console.log(this.selectedCountry && this.countryData[this.selectedCountry]?.ifFirstNameRequired);


  // return (this.selectedCountry && this.countryData[this.selectedCountry]?.ifFirstNameRequired);




  ngOnInit(): void {
    this.receiver.getConfig().subscribe((data: Array<Object>) => {
      this.countryData = data;                           // all country data 
      console.warn("data", this.countryData);
      this.countries = Object.keys(this.countryData[0]); //get the countries
      console.log(this.countries);
      console.log("country", this.selectedCountry);

      // console.warn(this.countryData);

    });
    // this.receiver.saveReceiver();
    this.receiver.getReceivers().subscribe((result: Array<Object>) => {
      this.receiverList = result;
      // console.log(result);

      console.log(this.receiverList);
    })
  }
  ngDocheck(): void {
    console.log(this.isEmailRequired());


  }


}
