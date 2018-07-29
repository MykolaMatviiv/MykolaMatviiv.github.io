import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornotloggedGuard implements CanActivate {

  constructor(private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(localStorage.getItem('currentUser')){
      this.router.navigate(
        ['/dashboard'],
        { queryParams: {id: JSON.parse(localStorage.getItem('currentUser')).id }}
      );
      return false;
    }

    return true;
  }
}
