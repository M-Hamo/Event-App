import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventsListResolverService,
    GuardGuard,
    CreatSessionComponent
} from './events-list/index';

import { ErrorsComponent } from './errors/errors.component';


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: '404', component: ErrorsComponent },
    { path: 'events/:id', canActivate: [GuardGuard], component: EventDetailsComponent },
    { path: 'events/session/new', component: CreatSessionComponent },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '', redirectTo: '/events', pathMatch: 'full' }

];
