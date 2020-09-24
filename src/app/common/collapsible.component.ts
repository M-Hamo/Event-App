import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {

  visible = true;

  constructor() { } 

  ngOnInit(): void {
  }

  toggleContent() {
    this.visible = !this.visible;
  }
}
