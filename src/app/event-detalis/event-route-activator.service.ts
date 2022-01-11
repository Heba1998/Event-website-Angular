import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";

import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router : Router ){

    }
   
    canActivate(route: ActivatedRouteSnapshot){
    const evenExists = !!this.eventService.getevent(+route.params['id']);
    if (!evenExists) 
        this.router.navigate(['/404'])
        return evenExists;
    
   }
}