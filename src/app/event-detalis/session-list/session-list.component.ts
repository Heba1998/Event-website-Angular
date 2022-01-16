import { Component, Input, OnInit } from '@angular/core';
import { ISession } from 'src/app/shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input()sessions: ISession[]| undefined;
  @Input() filterBy!:string;
visibleSession :ISession[]|undefined;

  
  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(){
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }


  filterSessions(filter: string | undefined){
    if (filter === 'all') {
      this.visibleSession= this.sessions?.slice(0);
    }else{
      this.visibleSession = this.sessions?.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

}
