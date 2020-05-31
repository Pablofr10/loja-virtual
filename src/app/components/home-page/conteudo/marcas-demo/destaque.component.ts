import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'destaque',
  template: `
  <div class="destaque">
      <figure>
          <img src="https://news.theceomagazine.com/wp-content/uploads/2020/02/Nike-Move-to-Zero.jpg" alt="Demo image">
      </figure>
      <div class="destaque__conteudo">
          <section>
              <h2>Produtos NIKE com até 70% off*</h2>
              <h2 class="font-italic">Confira os lançamentos</h2>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span><br>
              <button class="btn-default-loja">Conferir produtos <i class="fas fa-chevron-right"></i></button>
          </section>
      </div>
</div>
<div class="promocao">
    <section class="text-center">
        <h2>Promoção dia dos namorados</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </section>
        
</div>
  `,
  styleUrls: ['./destaque.component.scss']
})
export class DestaqueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  marcas = [
    {image: "https://www.footasylum.com/images/products/medium/105517.jpg", info: "Marca tal", preco: 30.20},
    {image: "https://www.footasylum.com/images/products/medium/105517.jpg", info: "Marca tal", preco: 30.20},
    {image: "https://www.footasylum.com/images/products/medium/105517.jpg", info: "Marca tal", preco: 30.20},
    {image: "https://www.footasylum.com/images/products/medium/105517.jpg", info: "Marca tal", preco: 30.20},
    {image: "https://www.footasylum.com/images/products/medium/105517.jpg", info: "Marca tal", preco: 30.20},
    {image: "https://www.footasylum.com/images/products/medium/105517.jpg", info: "Marca tal", preco: 30.20},
    {image: "https://www.footasylum.com/images/products/medium/105517.jpg", info: "Marca tal", preco: 30.20},
    {image: "https://www.footasylum.com/images/products/medium/105517.jpg", info: "Marca tal", preco: 30.20},
  ]

}
