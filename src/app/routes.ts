import { Routes } from "@angular/router";
import { CreateEventComponent } from "./create-event/create-event.component";
import { E404Component } from "./e404/404.component";
import { CreateSessionComponent } from "./event-detalis/create-session/create-session.component";

import { EventDetalisComponent } from "./event-detalis/event-detalis.component";
import { EventRouteActivator } from "./event-detalis/event-route-activator.service";
import { EventsListResolver } from "./events-list-resolver.service";
import { EventsListComponent } from "./events-list/events-list.component";


export const appRoutes: Routes=[
    {path:'events/new' , component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path:'events' , component:EventsListComponent, resolve: {events: EventsListResolver}},
    {path:'events/:id' , component:EventDetalisComponent, canActivate : [EventRouteActivator]},
    {path:'events/session/new', component: CreateSessionComponent},
    {path:'404' , component:E404Component},
    {path:'user' , loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path:'' , redirectTo: '/events' , pathMatch:'full'},
]