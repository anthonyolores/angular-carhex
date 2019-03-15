import { Component, OnInit,ElementRef, HostBinding, Input, ViewChild, QueryList } from '@angular/core';
import{ModalType} from '../../../models/ModalType';
import { DetailComponent } from '.././detail/detail.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild(DetailComponent) homeComponents: DetailComponent;
  isShowModal = false;
  // @Input() homeComponent: HomeComponent;
  modalType:number;
  constructor() {

   }

  ngOnInit() {
    this.modalType = 1;
    // Get the modal
  //   var modal = document.getElementById('myModal');
  //   var auth = document.getElementById('auth-btn');
  //   var authType = 0;
  //  // auth.proto
  //   auth.onclick = function(){
  //       //modal.style.display = "block";
  //       authType = 1;
  //       showModal();
  //   }

  //   var span = document.getElementById("close-modal");
  //   span.onclick = function() { 
  //       modal.style.display = "none";
  //   }
    
  }

  showModal(params){
    if(params != 1){
      this.modalType = params[0];
      this.homeComponents.setVehicleDetail(params[1]);       
    }
    else{
      this.modalType = params;
    }
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
  }

  closeModal(){
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  };
}
