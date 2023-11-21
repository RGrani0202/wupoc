import { Injectable } from '@angular/core';
import{HttpClient}from"@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReceiversService {
url="http://localhost:3000/receivers";
configurl="http://localhost:3000/country";
  constructor(private http:HttpClient) { }
  getReceivers(){
    console.log("receivers list");
    return this.http.get(this.url)
    
  }
  getReceiverById(receiverId:number){
    return this.http.get(`${this.url}/${receiverId}`)
  }

  saveReceiver(value: any){
    // console.log("service",value);
    return this.http.post(this.url,value)
    // .subscribe((result)=>{
    //   console.log(result);
    // })
  }
  deleteReceiver(receiverId: number){
    return this.http.delete(`${this.url}/${receiverId}`)

  }
  updateReceiverById(receiverId:number,data:any){
    return this.http.put(`${this.url}/${receiverId}`,data)
  }
 
 // get country for configuration
getConfig(){
  return this.http.get(this.configurl);
 }
}


