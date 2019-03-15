import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { DetailComponent } from './detail/detail.component';
import { forwardRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(ModalComponent) modalChild: ModalComponent; 
  showModalParent(evt) {
    this.modalChild.showModal(evt);
  }
  constructor() { }

  ngOnInit() {
  }
}
