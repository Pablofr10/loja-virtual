import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-marcas',
  styleUrls: ['./carousel-marcas.component.scss'],
  template: `
    <section>
      <div
        class="container carousel_marcas d-flex justify-content-between align-items-center align-content-stretch"
      >
        <div *ngFor="let img of slides; let i = index">
          <img [src]="img.image" alt="imagem marcas" />
        </div>
      </div>
    </section>
  `,
})
export class CarouselMarcasComponent implements OnInit {
  singleSlideOffset = true;

  constructor() {}

  ngOnInit() {}

  slides = [
    { image: 'assets/images/marcas/1.png' },
    { image: 'assets/images/marcas/2.png' },
    { image: 'assets/images/marcas/3.png' },
    { image: 'assets/images/marcas/4.png' },
    { image: 'assets/images/marcas/5.png' },
    { image: 'assets/images/marcas/6.png' },
    { image: 'assets/images/marcas/7.png' },
  ];
}
