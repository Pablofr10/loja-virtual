import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  styles: [''],
  template: `
    <carousel>
    <slide>
      <img src="../../../../assets/images/carousel/1.jpg" alt="first slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/2.jpg" alt="second slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/3.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/4.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/5.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
