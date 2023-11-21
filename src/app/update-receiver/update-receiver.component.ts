import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{ ReceiversService} from "../services/receivers.service";

@Component({
  selector: 'app-update-receiver',
  templateUrl: './update-receiver.component.html',
  styleUrls: ['./update-receiver.component.css']
})
export class UpdateReceiverComponent implements OnInit {
  receiverById:any={};
  selectedCountry: string;
  countryData: any = {};
  countries: any = [];
  types = ["Mobile", "Telephone"];
  constructor(private route: Router, private router:ActivatedRoute, private receiver:ReceiversService) {
    
   }
  onCountryChange(value: string){
    console.log( this.receiverById);
    this.selectedCountry=value;
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
        }
  
      }
  
  
      else {
        check = true;
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
        check = true;
      }
      console.log(check);
      return check;
    }
  
  ngOnInit(): void {
    console.log( this.router.snapshot.params.id);
    this.receiver.getReceiverById(this.router.snapshot.params.id)
    .subscribe((result:any)=>{
      this.receiverById=result;
      this.selectedCountry=this.receiverById.country;
      console.log(result.id);
    })

    this.receiver.getConfig().subscribe((data: Array<Object>) => {
      this.countryData = data;                           // all country data 
      console.warn("data", this.countryData);
      this.countries = Object.keys(this.countryData[0]); //get the countries
      console.log(this.countries);
      console.log("country", this.selectedCountry);

      // console.warn(this.countryData);

    });
  }
  update(data:any){
    console.log("new form data ", data);
    this.receiver.updateReceiverById(this.router.snapshot.params.id,data)
    .subscribe((result)=>{
      console.log(result);
      alert("receiver updated !");
      this.route.navigate(['/my-receivers']);
      

    })

  }

}
