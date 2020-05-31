import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'marcas-demo',
  templateUrl: './marcas-demo.component.html',
  styleUrls: ['./marcas-demo.component.scss']
})
export class MarcasDemoComponent implements OnInit {

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
