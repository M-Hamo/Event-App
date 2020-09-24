import { Component, OnInit } from '@angular/core';
import { EventService } from './data.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
  // selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {


  events: IEvent[];

  // handelEventClicked() {
  //   console.log('received', data)
  // }

  constructor(private service: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // this.events = this.service.getEvents();
    // this.service.getEvents().subscribe(
    //   events=>this.events=events
    // )
    this.events = this.route.snapshot.data['events'];
    // console.log(this.events);
  }
  handelThumbnailClick(eventName) {
    console.log(eventName);
  }













  // handelThumbnailClick(eventName) {
  //   if (eventName == 'Angular Connect') {
  //     this.toastr.error(eventName,'Not valid to our system',{
  //       timeOut: 5000,
  //       progressBar: true,
  //       progressAnimation: 'increasing'
  //     })
  //   } else {
  //     this.toastr.success(eventName,'You get success')
  //   }

  // }

}
