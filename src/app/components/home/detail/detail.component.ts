import { Component, OnInit } from '@angular/core';
import {VehicleDetail} from '../../../models/VehicleDetail'
import { faAngleDoubleLeft, faAngleDoubleRight, faGasPump, faTachometerAlt, faCogs, faMapPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  faGasPump = faGasPump;
  faTachometerAlt = faTachometerAlt;
  faCogs = faCogs;
  faMapPin = faMapPin;

  public vehicleDetail = new VehicleDetail();
  constructor() { }
  vehicleDetails = {};
  currIndex:string = '1';
  vehicleTabs:any[] = [{text:'Options', selected:true},
  {text:'Finance', selected:false},
  {text:"Dealer", selected:false},
  {text:'Questions', selected:false}];
  register:boolean = true;
  valet:boolean = false;
  delivery:boolean = true;
  ngOnInit() {

  }
  setVehicleDetail(vd){
    this.vehicleDetail = new VehicleDetail(vd);
  }
  setRegister(val){
    this.register = val==1?true:false;
    this.changePrice();
  }
  setValet(val){
    this.valet = val==1?true:false;
    this.changePrice();
  }
  setDelivery(val){
    this.delivery = val==1?true:false;
    this.changePrice();
  }
  changePrice(){
    this.vehicleDetail.Price = '$' + this.getRandomNum();
  }

  getRandomNum(){
    return Math.floor((Math.random() * 150343) + 5340);
  }

  changeTab(i){
    this.vehicleTabs = this.vehicleTabs.map((tab, index) => {
      tab.selected = index==i?true:false;
      return tab;
    });
  }
  getUrl(newIndex){
    let url = this.vehicleDetail.ImageUrl;
    let width = url.indexOf("&Width");
    let index = url.indexOf("&Index=");
    let str = url.substring(index, width);
    return url.replace(str, str.substring(0,str.lastIndexOf('=')+1) + newIndex);
  }

  imgSlide(arrow){
    let arrLen = this.vehicleDetail.ImageIndexes.length;
    let indeces = this.vehicleDetail.ImageIndexes;
    if(arrow == 0){
      if(this.currIndex == indeces[0]){
        this.currIndex = indeces[arrLen-1];
      }
      else{
        this.currIndex = indeces[indeces.indexOf(this.currIndex) - 1];
      }
    }
    else{
      if(this.currIndex == indeces[arrLen-1]){
        this.currIndex = indeces[0];
      }
      else{
        this.currIndex = indeces[indeces.indexOf(this.currIndex) + 1];
      }
    }
    this.vehicleDetail.ImageUrl = this.getUrl(this.currIndex);
  }
  imgPreview(index){
    this.currIndex = index;
    this.vehicleDetail.ImageUrl = this.getUrl(index);
  };
  

}
