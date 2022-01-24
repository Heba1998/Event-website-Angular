import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from 'src/app/shared/event.model';
import { restricted } from 'src/app/shared/restricted-words.validator';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: [`
  em{
      color:#df691a;
      float: right
  }
  .error input, .error select, .error textarea {
    background-color:#efd4c3
  }
  
  `]
})
export class CreateSessionComponent implements OnInit {

  @Output() SaveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()


  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl
  duration!: FormControl
  level!: FormControl
  abstract!: FormControl
  mouseover=false
 

  ngOnInit(): void {
    this.name= new FormControl('', Validators.required)
    this.presenter= new FormControl('', Validators.required)
    this.duration= new FormControl('', Validators.required)
    this.level= new FormControl('', Validators.required)
    this.abstract= new FormControl('', [Validators.required, Validators.maxLength(200)])
    // this.abstract= new FormControl('', [Validators.required, Validators.maxLength(200), restricted(['by'])])

    this.newSessionForm= new FormGroup({
      name : this.name,
      presenter : this.presenter,
      duration : this.duration,
      level : this.level,
      abstract : this.abstract
    })
  }



  saveSession(value: any){
    const session: ISession=
    {
      name: value.name,
      id: undefined || 99,
      presenter: value.presenter,
      duration: +value.duration,
      level: value.level,
      abstract: value.abstract,
      voters: []
    }
 console.log(session)
 this.SaveNewSession.emit(session)
  }



  canceled(){
    this.cancelAddSession.emit()
  }
}
