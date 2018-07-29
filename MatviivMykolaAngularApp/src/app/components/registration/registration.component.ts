import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  newuser: User;

  constructor(private router:  Router, private userService: UserService) {
    this.newuser = new User();  
  }

  ngOnInit() {
  }

  register(){
    if(this.newuser.email && this.newuser.password){
      this.userService.setUser(this.newuser);
      this.router.navigate(['/login']);
    }
  }

  onClick(){
    this.router.navigate(['/login']);
  }

}
