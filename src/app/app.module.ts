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


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    ThumbnailComponent,
    NavbarComponent,
    EventDetalisComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
