import { Routes } from "@angular/router";
import { EventDetalisComponent } from "./event-detalis/event-detalis.component";
import { EventsListComponent } from "./events-list/events-list.component";

export const appRoutes: Routes=[
    {path:'events' , component:EventsListComponent},
    {path:'events/:id' , component:EventDetalisComponent},
    {path:'' , redirectTo: '/events' , pathMatch:'full'}
]