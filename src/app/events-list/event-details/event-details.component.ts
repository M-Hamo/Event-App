import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventService } from '../data.service';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'name';

  constructor(private route: Router, private activatedRouter: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {

    // instead last code of snapshot we use froEach to (rest) the prams id when we change it
    this.activatedRouter.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params.id);
      this.addMode = false;
    });


    // let id = +this.activatedRouter.snapshot.params['id'];
    // this.event = this.eventService.getEvent(id);

  }


  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
