import { HomePageComponent } from './../components/home-page/home-page.component';
import { CarouselComponent } from '../components/home-page/carousel/carousel.component';
import { BaseComponent } from './../base/base.component';
import { TopBarComponent } from './../base/top-bar/top-bar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
  ],
  declarations: [
    SharedComponent,
    TopBarComponent,
    BaseComponent,
    CarouselComponent,
    HomePageComponent
  ],
  exports: [
    TopBarComponent,
    BaseComponent
  ]
})
export class SharedModule { }
