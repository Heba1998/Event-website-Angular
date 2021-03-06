import { Component, Input, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { ISession } from 'src/app/shared/event.model';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from '../voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent{

  @Input()sessions: ISession[]| undefined;
  @Input() filterBy!:string;
  @Input() sortBy!:string;

  @Input() eventId!:number;


visibleSession :ISession[]|undefined;

  
  constructor(public auth : AuthService, private voterService: VoterService) { }

  

  loggedin(){
    return this.auth.isAuthenticated()
  }

  ngOnChanges(){
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'? this.visibleSession?.sort(sortByNameAsc): this.visibleSession?.sort(sortByVotesDesc);
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



  toggleVote(session: ISession){
      if (this.userHasVoted(session)) {
        this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
      }else{
        this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
      }

      if (this.sortBy === 'votes') {
        this.visibleSession.sort(sortByVotesDesc)
      }
  }


  userHasVoted(session: ISession){
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
 

}


function sortByNameAsc(s1:ISession , s2: ISession){
  if (s1.name > s2.name) {
    return 1;
  }else if(s1.name === s2.name){
    return 0;
  }else{
    return -1;
  }
}


function sortByVotesDesc(s1:ISession , s2: ISession){
 return s2.voters.length - s1.voters.length
}