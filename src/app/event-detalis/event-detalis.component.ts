import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  // selector: 'app-event-detalis',
  templateUrl: './event-detalis.component.html',
  // styleUrls: ['./event-detalis.component.css']
})
export class EventDetalisComponent implements OnInit {
  event:IEvent | undefined
  constructor(private eventService : EventService, private route: ActivatedRoute, private home:Router) { }

  ngOnInit(): void {
    // "+" just to cast value to a number
    this.event= this.eventService.getevent(+this.route.snapshot.params['id'])
  }

  goToHomePage(){
    console.log("back to home page");
   this.home.navigate(['/events'])
  }
}
