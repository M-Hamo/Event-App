import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private route: Router, private eventService: EventService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const eventExists = !! this.eventService.getEvent(+next.params.id);

    if (!eventExists) {
      this.route.navigate(['/404']);
    }

    // let id = +next.url[1].path;

    // if (isNaN(id) || id < 1 || id > 5) {

    //   this.route.navigate(['/404']);
    //   return false;
    // }
    return eventExists;
  }

}
