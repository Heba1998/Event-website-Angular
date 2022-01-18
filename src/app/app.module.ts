import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { ThumbnailComponent } from './shared/thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { EventsListComponent } from './events-list/events-list.component';
import { EventService } from './shared/event.service';
import { EventDetalisComponent } from './event-detalis/event-detalis.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';

import { EventRouteActivator } from './event-detalis/event-route-activator.service';
import { E404Component } from './e404/404.component';
import { EventsListResolver } from './events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './event-detalis/create-session/create-session.component';
import { SessionListComponent } from './event-detalis/session-list/session-list.component';
import { collapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { SimpleModelComponent } from './common/simpleModal.component';
import { JQ_TOKEN } from './common/jQuery.service';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { UpVoteComponent } from './event-detalis/upvote.component';
import { VoterService } from './event-detalis/voter.service';
import { LocationValidator } from './create-event/location-validator.directive';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    ThumbnailComponent,
    NavbarComponent,
    EventDetalisComponent,
    CreateEventComponent,
    E404Component,
    CreateSessionComponent,
    SessionListComponent,
    collapsibleWellComponent,
    SimpleModelComponent,
    ModalTriggerDirective,
    DurationPipe,
    UpVoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
     {provide: TOASTR_TOKEN,
    useValue: toastr},
    {provide: JQ_TOKEN,
      useValue: jQuery},
     EventRouteActivator,
     EventsListResolver,
     AuthService,
     VoterService,
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
