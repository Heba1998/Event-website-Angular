import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  // selector: 'app-event-detalis',
  templateUrl: './event-detalis.component.html',
  // styleUrls: ['./event-detalis.component.css']
})
export class EventDetalisComponent implements OnInit {
  event:IEvent | undefined

  addMode: boolean = false


  constructor(private eventService : EventService, private route: ActivatedRoute, private home:Router) { }

  ngOnInit(): void {
    // "+" just to cast value to a number
    this.event= this.eventService.getevent(+this.route.snapshot.params['id'])
  }

  goToHomePage(){
    console.log("back to home page");
   this.home.navigate(['/events'])
  }


  addSession(){
    this.addMode = true
  }

  SaveNewSession(session: ISession){
  const nextId = Math.max.apply(null, this.event!.sessions.map(s=> s.id));
  session.id= nextId+1;
  this.event?.sessions.push(session)
  this.eventService.updateEvent(this.event)
  this.addMode = false
  }


  cancelAddSession(){
    this.addMode = false
  }
}
