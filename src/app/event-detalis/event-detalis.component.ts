import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  // selector: 'app-event-detalis',
  templateUrl: './event-detalis.component.html',
  // styleUrls: ['./event-detalis.component.css']
})
export class EventDetalisComponent implements OnInit {
  event:any
  constructor(private eventService : EventService) { }

  ngOnInit(): void {
    this.event= this.eventService.getevent(1)
  }

}
