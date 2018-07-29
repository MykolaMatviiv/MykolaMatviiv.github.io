import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  constructor(private userService: UserService, private router: Router) { }

  login(email: string, password: string){
    let userid = this.userService.isUser(email, password);
    if(userid !== 0){
      localStorage.setItem('currentUser',  JSON.stringify(this.userService.getById(userid)));
      this.router.navigate(
        ['/dashboard'], 
        {
          "queryParams": {id: userid}
        }
      );
    }
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
