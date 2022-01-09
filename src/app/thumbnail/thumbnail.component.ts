import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  template: `
  <!-- <h2>thumbnail works!</h2> -->
  <div class="well hoverwell thumbnail" >
  <div class="bad" >
  <h3>{{event.name}}</h3>
  <img [src]="event.imageUrl" style="width: 150px; height:120px"/>
      <p>event id : {{event.id}}</p>
      <p>event name : {{event.name}}</p>
      <p>event Date : {{event.date}}</p>
      <p>event Time : {{event.time}}</p>
      <p>Ticket Price : $ {{event.price}}</p>
      <p>event location : {{event.location.address}}-- {{event.location.city}},{{event.location.country}} </p>
      <!-- <p>event time : {{event.time}}</p>
      <p>ticket price : $ {{event.price}} </p> -->
      <!-- <button (click)="clickme()">click me !</button> -->
  </div>
  </div>
  `,
  styles: [`
  .bad {
    min-height:380px;
    color: #bbb;
    font-family: cursive
  }
  `]
})
export class ThumbnailComponent implements OnInit {

  @Input() event: any
  property : any ="anything ";
  // @Output() eventclick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  // clickme(){
  //  this.eventclick.emit("you are clicked meee 😒"),
  //  this.eventclick.emit(this.event.name)
  // }

  // myname(){
  //   console.log("my name is Heba 🙆‍♀️")
  // }
}
