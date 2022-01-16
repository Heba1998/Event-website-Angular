
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-events-list',
  // template: `<app-thumbnail [event]="event1" (eventclick)="eventclicked($event)"></app-thumbnail>`,



  // use the referernce variable (#thumnail👇)
  template: `<div >
  <h3>All events</h3>
  <div class="row">
    <div class="col-md-5" *ngFor="let EachEvent of events">
  <app-thumbnail [event]="EachEvent" ></app-thumbnail>
    </div>
  </div>
</div>
  <!-- <p>{{thumnail.property}}</p> -->
  <!-- <button (click)="thumnail.myname()">click to show my name </button> -->
  `,
})
export class EventsListComponent implements OnInit {
  events:IEvent[] | undefined
  constructor(private eventService: EventService, private route:ActivatedRoute) { 
    // this.events= this.eventService.getEvents()
  }

  ngOnInit(){
    // this.eventService.getEvents().subscribe(events => {
    //   this.events=events
    // })

    this.events = this.route.snapshot.data['events']
  }


  // eventclicked(data: any){
  //   console.log(data);
  // }

 
}
