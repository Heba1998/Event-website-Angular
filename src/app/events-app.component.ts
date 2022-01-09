import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-navbar></app-navbar>
  <h1 style="font-family: cursive;">Welcome all in {{title}}</h1>
  <!-- <img src="../assets/images/basic-shield.png"/> -->
  <div class="container">
    <hr>
  <app-events-list></app-events-list>
  </div>
  `,
})

// @Component({
//   selector: 'app-root',
//   templateUrl:'events-app-component.html',
// })
export class EventsAppComponent {
  title = 'our event website';
}
