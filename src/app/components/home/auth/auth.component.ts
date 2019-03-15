import { Component, OnInit } from '@angular/core';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;
  constructor() { }

  ngOnInit() {
  }

}
