import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isDirty = true;
  userName;
  password;
  mouseoverLogin;

  constructor(private route: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.toastr.success('', 'Welcome' + ' ' + formValues.userName, {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-bottom-right',

    });
    this.route.navigate(['events']);
  }

  cancel() {
    this.route.navigate(['events']);
  }

}
