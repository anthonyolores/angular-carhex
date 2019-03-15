import { Component, OnInit, Input, HostListener, Directive, Output, EventEmitter } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSignInAlt, faUserPlus, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import * as $ from 'jquery';

import{ModalType} from '../../../models/ModalType';
// Add an icon to the library for convenient access in other components

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faBars = faBars;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;

  constructor() { }
  ngOnInit() {
  }

  @Output() notifyParentShowModal: EventEmitter<any> = new EventEmitter();
  
  callParentShowModal() {
      this.notifyParentShowModal.emit(ModalType.AUTH);
  }

  collapseNav() {
    if($("#top_nav").attr('class').split(/\s+/).length == 1){
      $("#top_nav").addClass("responsive");
    }
    else{
      $("#top_nav").removeClass("responsive");
    }

  }



}
