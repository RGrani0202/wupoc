import { Component, OnInit } from '@angular/core';
import{ReceiversService} from "../services/receivers.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-receivers',
  templateUrl: './my-receivers.component.html',
  styleUrls: ['./my-receivers.component.css']
})
export class MyReceiversComponent implements OnInit {
  receiverList:Array<Object>=[];

  constructor( private route:Router, private receiver:ReceiversService) { }

  ngOnInit(): void {
    this.receiver.getReceivers().subscribe((result:Array<Object>)=>{
      this.receiverList=result;
      // console.log(result);
      
      console.log(this.receiverList);
    })
  }
  deleteRes(receiverId: number){
    console.log(receiverId);
    
    this.receiver.deleteReceiver(receiverId).subscribe((result)=>{
      this.receiverList.splice(receiverId-1,1);
      console.log("deleted",result);
      
    })
  }

  ngDocheck():void{
    console.log(this.receiverList);
    
  }

}
