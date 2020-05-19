import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./carousel.component.scss'],
  template: `
    <carousel>
    <slide>
      <img src="../../../../assets/images/carousel/1.jpg" alt="first slide" style="display: block; width: 100%;">
      <div class="carousel-caption">
        <h3>As melhores tendências do mundo da moda.</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <div class="carousel-caption__btn">
          <button class="btn btn-default-loja btn-lg">Conferir</button>
          <button class="btn btn-default-loja btn-lg">Conferir</button>
        </div>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/2.jpg" alt="second slide" style="display: block; width: 100%;">
      <div class="carousel-caption">
        <h3>As melhores tendências do mundo da moda.</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <div class="carousel-caption__btn">
          <button class="btn btn-default-loja btn-lg">Conferir</button>
          <button class="btn btn-default-loja btn-lg">Conferir</button>
        </div>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/3.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption">
        <h3>As melhores tendências do mundo da moda.</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <div class="carousel-caption__btn">
          <button class="btn btn-default-loja btn-lg">Conferir</button>
          <button class="btn btn-default-loja btn-lg">Conferir</button>
        </div>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/4.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption">
        <h3>As melhores tendências do mundo da moda.</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <div class="carousel-caption__btn">
          <button class="btn btn-default-loja btn-lg">Conferir</button>
          <button class="btn btn-default-loja btn-lg">Conferir</button>
        </div>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/5.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption">
        <h3>As melhores tendências do mundo da moda.</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <div class="carousel-caption__btn">
          <button class="btn btn-default-loja btn-lg">Conferir</button>
          <button class="btn btn-default-loja btn-lg">Conferir</button>
        </div>
      </div>
    </slide>
  </carousel>
  `,
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
