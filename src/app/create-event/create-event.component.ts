import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent implements OnInit {
isDirty:boolean= true
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  canceled(){
    console.log("cancel");
    this.router.navigate(['/events'])
  }
}
