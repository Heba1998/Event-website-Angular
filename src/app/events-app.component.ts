import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  template:`
  <app-navbar></app-navbar>
  <!-- <h1 style="font-family: cursive;">Welcome all in {{title}}</h1> -->
  <!-- <img src="../assets/images/basic-shield.png"/> -->
  <div class="container">
    <!-- <hr> -->
    <router-outlet></router-outlet>
  <!-- <app-events-list></app-events-list> -->
  </div>
  `,
})

// @Component({
//   selector: 'app-root',
//   templateUrl:'events-app-component.html',
// })
export class EventsAppComponent{
  title = 'our event website';


  constructor(private auth: AuthService){}



  ngOnInit(): void {
   this.auth.checkAuthenticationStatus().subscribe();
  }




}
