import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Utility} from '../../../models/Utility';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  fvehicles: Array<string>;
  searchPanel:boolean = false;
  util:Utility = new Utility();
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    console.log(this.util._randomImageUrls(5));
    this._http.get('https://picsum.photos/list')
    .pipe(map((fvehicles: Array<{id: number}>) => this.util._randomImageUrls(5)))
    .subscribe(fvehicles => this.fvehicles = fvehicles);
  }

  showSearchPanel(){
    this.searchPanel = !this.searchPanel;
  }
}
