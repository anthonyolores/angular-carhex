import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/home/modal/modal.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/home/menu/menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeService} from './services/home-service.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './components/home/landing/landing.component';
import { SearchComponent } from './components/home/search/search.component';
import { PagefilterComponent } from './components/home/pagefilter/pagefilter.component';
import { VehiclelistComponent } from './components/home/vehiclelist/vehiclelist.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { FinanceComponent } from './components/home/finance/finance.component';

import { AuthComponent } from './components/home/auth/auth.component';
import { ModalDirective } from './directives/modal.directive';
import { DetailComponent } from './components/home/detail/detail.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { ContactComponent } from './components/home/contact/contact.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    MenuComponent,
    LandingComponent,
    SearchComponent,
    FinanceComponent,
    PagefilterComponent,
    VehiclelistComponent,
    FooterComponent,
    AuthComponent,
    ModalDirective,
    DetailComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FontAwesomeModule ,
    Ng2CarouselamosModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
