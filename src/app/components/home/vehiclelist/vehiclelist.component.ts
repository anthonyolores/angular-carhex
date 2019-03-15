import { Component, OnInit, Input, HostListener, Directive, Output, EventEmitter } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Utility} from '../../../models/Utility';
import { faGasPump, faPlus, faWeight, faCog, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import{ModalType} from '../../../models/ModalType';
import {HomeService } from '../../../services/home-service.service'
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.scss'],
  animations: [
    trigger('entranceAnimation', [
      state('zero', style({
        opacity: '0',
      })),
      state('one', style({
        opacity: '1.0',
      })),
      transition('zero => one', animate('1000ms ease-in')),
    ]),
   ]
})
export class VehiclelistComponent implements OnInit {

  util:Utility = new Utility();
  vehicleList:Array<Object>;
  faPlus = faPlus;
  faGasPump = faGasPump;
  faWeight = faWeight;
  faCog = faCog;
  faCaretRight = faCaretRight;

  state = "zero";


  animate(){
    this.state = (this.state === 'zero' ? 'one' : 'zero');
  }
  constructor(private _http: HttpClient, private homeService:HomeService) { }
  ngOnInit() {
    this.homeService.getVehicles().subscribe(data => {
      let tempVehicles = data["Vehicles"];
      tempVehicles.pop();
      tempVehicles.map(v => v.DetailsInfo = v.DetailsInfo.split('|'));
      console.log('GetVehicles',data);
      this.vehicleList = tempVehicles;
      this.animate();
      }, err => {
      });
  }
  @Output() notifyParentShowModal: EventEmitter<any> = new EventEmitter();
  callParentShowModal(vd) {
    this.notifyParentShowModal.emit([ModalType.VEHICLE_DETAIL, vd]);
  }

}
