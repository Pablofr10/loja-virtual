import { HomePageComponent } from './../components/home-page/home-page.component';
import { CarouselComponent } from '../components/home-page/carousel/carousel.component';
import { BaseComponent } from './../base/base.component';
import { TopBarComponent } from './../base/top-bar/top-bar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { AppRoutingModule } from '../app-routing.module';
import { CarouselMarcasComponent } from '../components/home-page/carousel/carousel-marcas.component';
import { ConteudoComponent } from '../components/home-page/conteudo/conteudo.component';
import { MarcasDemoComponent } from '../components/home-page/conteudo/marcas-demo/marcas-demo.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DestaqueComponent } from '../components/home-page/conteudo/marcas-demo/destaque.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
  ],
  declarations: [
    SharedComponent,
    TopBarComponent,
    CarouselMarcasComponent,
    ConteudoComponent,
    MarcasDemoComponent,
    DestaqueComponent,
    BaseComponent,
    CarouselComponent,
    HomePageComponent
  ],
  exports: [
    TopBarComponent,
    BaseComponent
  ],

  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class SharedModule { }
