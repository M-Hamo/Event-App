import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';
import { DurationPipe } from '../shared/duration.pipe';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './upvote/voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor(public auth: AuthService, private voterService: VoterService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByName) : this.visibleSessions.sort(this.sortByVotes);
    }

  }

  filterSessions(filter) {
    if (filter === 'all') {

      return this.visibleSessions = this.sessions.slice(0);

    } else {

      return this.visibleSessions = this.sessions.filter(session => {

        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  sortByName(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) { return 1; }
    else if (s1.name === s2.name) { return 0; }
    else { return -1; }
  }

  sortByVotes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }

    if (this.sortBy === 'voters') {
      this.visibleSessions.sort(this.sortByVotes);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

}

