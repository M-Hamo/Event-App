import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '..';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;

  event: any;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.event = {
      name: null,
      date: null,
      time: null,
      price: null,
      location: {
        address: null,
        city: null,
        country: null
      },
      onlineUrl: null,
      imageUrl: null
    };
  }




  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events/']);

  }
  cancel() {
    this.router.navigate(['/events/']);
  }

}
