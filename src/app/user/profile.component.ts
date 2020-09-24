import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  isDirty = true;

  constructor(private router: Router, private authService: AuthService, private toaster: ToastrService) { }


  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName, Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toaster.success('', 'Profile updated successfully :) ' + formValues.firstName,  {
        timeOut: 1000,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-bottom-right',

      });
      this.router.navigate(['events']);
    }
  }

  validateFirstName() {
    return this.profileForm.controls.firstName.invalid &&
      this.profileForm.controls.firstName.touched;
  }

  validateLastName() {
    return this.profileForm.controls.lastName.invalid &&
      this.profileForm.controls.lastName.touched;
  }


}
