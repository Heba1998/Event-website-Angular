import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from './event.model';

@Component({
  selector: 'app-thumbnail',
  template: `
  <!-- <h2>thumbnail works!</h2> -->
  <div class="well hoverwell thumbnail" [routerLink]="['/events',event?.id]" >
  <div class="bad" >
  <h3>{{event?.name | uppercase}}</h3>
  <img [src]="event?.imageUrl" style="width: 150px; height:120px; margin: 20px 0"/>
      <p>event id : {{event?.id}}</p>
      <p>event name : {{event?.name}}</p>
      <p>event Date : {{event?.date|date: 'shortDate'}}</p>
      <p [ngSwitch]="event?.time" >
        <span>event Time : {{event?.time}}</span>
        <span *ngSwitchCase="'8:00 am'" style="color: orange;"> _Early Start</span>
        <span *ngSwitchCase="'10:00 am'" style="color: red;"> _Late Start</span>
        <span *ngSwitchDefault style="color: green;"> _Normal Start</span>
      </p>
      <p>Price: {{event?.price |currency :'USD'}}</p>
      <!-- <p [hidden]="event?.price">Ticket Price : $ {{event?.price}}</p>
      <p *ngIf="!event?.price">Ticket Price : $ {{event?.price}}</p> -->
      <p>event location : {{event?.location?.address}}-- {{event?.location?.city}},{{event?.location?.country}} </p>
      <!-- <p>event time : {{event.time}}</p>
      <p>ticket price : $ {{event.price}} </p> -->
      <!-- <button (click)="clickme()">click me !</button> -->
  </div>
  </div>
  `,
  styles: [`
  .bad {
    min-height:450px;
    color: #bbb;
    font-family: cursive
  }
  `]
})
export class ThumbnailComponent {

  @Input() event: IEvent | undefined
  property : any ="anything ";
  // @Output() eventclick = new EventEmitter()
 

  // clickme(){
  //  this.eventclick.emit("you are clicked meee 😒"),
  //  this.eventclick.emit(this.event.name)
  // }

  // myname(){
  //   console.log("my name is Heba 🙆‍♀️")
  // }


}
