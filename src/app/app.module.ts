import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrService } from './common/toastr.service';
import { EventsListComponent } from './events-list/events-list.component';
import { EventService } from './event.service';
import { EventDetalisComponent } from './event-detalis/event-detalis.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';

import { EventRouteActivator } from './event-detalis/event-route-activator.service';
import { E404Component } from './e404/404.component';
import { EventsListResolver } from './events-list-resolver.service';



@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    ThumbnailComponent,
    NavbarComponent,
    EventDetalisComponent,
    CreateEventComponent,
    E404Component,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
     ToastrService,
     EventRouteActivator,
     EventsListResolver,
     {
       provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
      }
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyState(component : CreateEventComponent){
  if (component.isDirty) {
    return window.confirm('you didn\'t save the data, do you sure about you want leave this page ?'
    )
  }
  return true;
}
