import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<any> {

  constructor(private eventService:EventService) { }

  resolve(route: ActivatedRouteSnapshot ) {
    return this.eventService.getevent(route.params['id'])
    // return this.eventService.getEvents().pipe(map(events => events))
  }
}