import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../../services/authorisation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authorisationService: AuthorisationService) { }

  ngOnInit() {
  }

  logout(){
    this.authorisationService.logout();
  }

}
