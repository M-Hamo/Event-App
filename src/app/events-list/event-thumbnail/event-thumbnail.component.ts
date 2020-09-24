import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;

  constructor() { }

  ngOnInit(): void {
  }
  // @Output() eventClick = new EventEmitter();

  // handelClickMe() {
  //   this.eventClick.emit(this.event.name)
  //   console.log('Clicked Success!')
  // }

  // handleStyle() {
  //   if (this.event && this.event.time === '8:00 am')

  //   return ['bold', 'green']
  // }
  // logFoo() {
  //   console.log("foo")
  // }

  ngStyle(): any {

    if (this.event && this.event.time === '8:00 am') {
      return { color: 'green', 'font-weight': 'bold' };
    } else {
      return [];
    }
  }

}
