import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
  em{
      color:#df691a;
      float: right
  }
  .error input {
    background-color:#efd4c3
  }
  
  img{
    width: 280px;
    margin: 20px
  }`]
})
export class CreateEventComponent implements OnInit {
  newEvent: any
isDirty= true
// event:any
  constructor(private router:Router, private eventServise: EventService) { }

  ngOnInit() {
    // this.event ={
    //   name: "IEEE",
    //   date: "3/3/2022",
    //   time: "9:00 AM",
    //   price: 100,
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmTx9rvLB0XsOZYw22pV_btx1DBnBk_sPGA&usqp=CAU.png",
    //   location: {
    //       address: "pb",
    //       city: "amman",
    //       country: "jordan"
    //   },
    // }
  }


  canceled(){
    console.log("cancel");
    this.router.navigate(['/events'])
  }


  saveEvent(value: any){
    this.eventServise.saveEvent(value).subscribe(()=>{
      this.isDirty= false
      this.router.navigate(['/events'])
    })
  //  this.eventServise.saveEvent(value);
  //  this.isDirty= false
  //  this.router.navigate(['/events'])
  }
}
