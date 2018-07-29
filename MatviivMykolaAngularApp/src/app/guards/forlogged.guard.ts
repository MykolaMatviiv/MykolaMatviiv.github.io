import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class ForloggedGuard implements CanActivate {

  constructor(private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('currentUser')){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
