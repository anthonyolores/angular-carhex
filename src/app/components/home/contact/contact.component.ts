import { Component, OnInit } from '@angular/core';
import { faBars, faSignInAlt, faUserPlus, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}