import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showpassword',
  templateUrl: './showpassword.component.html',
  styleUrls: ['./showpassword.component.scss']
})
export class ShowpasswordComponent {
  email = '';
  password = '';

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.email = this.route.snapshot.queryParams.email;
    this.password = this.userService.getPasswordByEmail(this.email);
  }

}
