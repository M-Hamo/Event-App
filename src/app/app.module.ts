import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreatSessionComponent
} from './events-list/index'

import {
  CollapsibleComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { appRoutes } from './routs';
import { ErrorsComponent } from './errors/errors.component';
import { UserModule } from './user/user.module';
import { SessionListComponent } from './events-list/event-details/session-list.component';
import { DurationPipe } from './events-list/shared/duration.pipe';
import { UpVoteComponent } from './events-list/event-details/upvote/upvote.component';
import { LocationValidatorDirective } from './events-list/create-event/location-validator.directive';

let jQuery = window['$'];
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
    CreatSessionComponent,
    SessionListComponent,
    CollapsibleComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidatorDirective
  ], providers: [
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true

    }),
    RouterModule.forRoot(appRoutes),
    UserModule,
    HttpClientModule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you have not saved this event, do you really want to cancel ?')
  return true
}