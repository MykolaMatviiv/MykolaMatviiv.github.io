import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorisationService } from '../../services/authorisation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private router: Router, private authorisationService: AuthorisationService) {
    this.user = {
      email: '',
      password: ''
    }
   }

  ngOnInit() {
  }

  login(flag: boolean): void{
    if(flag){
      this.authorisationService.login(this.user.email, this.user.password);
    }
  }

  onClick(direction: string):void {
    if(direction === 'registration'){
      this.router.navigate(['/registration']);
      return;
    }
    else{
      this.router.navigate(['/forgotpassword']);
      return;
    }
  }

}
