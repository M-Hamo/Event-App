import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upVote',
  templateUrl: './upVote.component.html',
  styleUrls: ['./upVote.component.css']
})
export class UpVoteComponent implements OnInit {

  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'tomato' : 'white';
  }
  iconColor: string;

  @Output() vote = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.vote.emit({});
  }

}
