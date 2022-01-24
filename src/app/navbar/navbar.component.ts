import { Component, OnInit } from '@angular/core';
import { ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`
  .navbar {
    color: #bbb;
    font-family: cursive;
    padding: 10px
  }
  li> a.active{
    color: #df691a;
  }
  `]
})
export class NavbarComponent {

  searchTerm="";
  foundSession!: ISession[];


  constructor( public auth:AuthService, private eventService : EventService) {
   
   }



  searchSessions(searchTerm:any){
      this.eventService.searchSessions(searchTerm).subscribe(sessions =>{
        this.foundSession=sessions
        // console.log(this.foundSession);
      })
  }


  // searchHandler(){
  //   $('#id').modal()
  // }
}
