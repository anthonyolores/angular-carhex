import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Utility} from '../../../models/Utility';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  util:Utility = new Utility();
  images: Array<string>;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this._http.get('https://picsum.photos/list/?blur')
      .pipe(map((fvehicles: Array<{id: number}>) => this.util._randomImageUrlsFullWidth(4)))
        .subscribe(images => this.images = images);
  }

}
