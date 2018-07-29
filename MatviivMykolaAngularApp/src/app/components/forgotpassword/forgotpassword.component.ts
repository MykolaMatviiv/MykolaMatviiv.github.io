import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  validation = new ValidateService();
  validError = false;
  forgotpasswordGroup: any;

  constructor(private userService: UserService, private router: Router) {
    this.forgotpasswordGroup = {
      email: '',
      validateConfirm: null
    }
  }

  ngOnInit() {
  }

  forgotpassword(flag: boolean): void{
    if(flag){
      this.validError = !this.validation.confirmValidation(this.forgotpasswordGroup.validateConfirm);
      if(!this.validError){
        this.router.navigate(['/forgotpassword/showpassword'], {queryParams: {email: this.forgotpasswordGroup.email}})
      }
      else{
        setTimeout(() => {
          this.validError = false;
        }, 3000);
        this.validation = new ValidateService();
        this.forgotpasswordGroup.validateConfirm = null;
      }
    }
  }

  registration(){
    this.router.navigate(['/registration']);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
