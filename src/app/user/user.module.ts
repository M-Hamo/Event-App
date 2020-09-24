import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'canDeactivateEditProfile',
      useValue: checkDirtyState1
    },
    {
      provide: 'canDeactivateEditLogin',
      useValue: checkDirtyState2
    }
  ]
})
export class UserModule{ }


export function checkDirtyState1(component: ProfileComponent) {
  if (component.isDirty) {
    return window.confirm('You have not finished your Editing yet, do you wont to Cancel ?');
  }
  return true;
}

export function checkDirtyState2(component: LoginComponent) {
  if (component.isDirty) {
    return window.confirm('Are you suer to cancel this login page ?');
  }

  return true;
}

