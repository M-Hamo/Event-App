import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
    <button style="display:block;" class='btn btn-primary ' (click) = 'backToMaine()'>Back to main</button>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 170px;
      text-align: center;
    }`]
})
export class ErrorsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backToMaine() {
    this.router.navigate(['/events']);
  }

}
