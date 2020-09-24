import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { EventService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any>{

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
