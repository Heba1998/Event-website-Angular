import { Routes } from "@angular/router";
import { CreateEventComponent } from "./create-event/create-event.component";
import { E404Component } from "./e404/404.component";

import { EventDetalisComponent } from "./event-detalis/event-detalis.component";
import { EventRouteActivator } from "./event-detalis/event-route-activator.service";
import { EventsListComponent } from "./events-list/events-list.component";

export const appRoutes: Routes=[
    {path:'events/new' , component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path:'events' , component:EventsListComponent},
    {path:'events/:id' , component:EventDetalisComponent, canActivate : [EventRouteActivator]},
    {path:'404' , component:E404Component},
    {path:'' , redirectTo: '/events' , pathMatch:'full'}
]