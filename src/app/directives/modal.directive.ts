import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
import {ModalComponent} from '../components/home/modal/modal.component';
@Directive({
  selector: '[showModal]'
})
export class ModalDirective {

  @Input() modalType = 0;
  constructor() { }

  @Output() toggleModal: EventEmitter<any> = new EventEmitter();
  @HostListener('click', ['$event'])
  clickEvent(event) {
    //alert(this.modalType);
    this.toggleModal.emit(true);
    //event.preventDefault();
    //event.stopPropagation();

  }

}
