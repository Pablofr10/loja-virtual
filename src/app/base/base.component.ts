import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  template: `
    <top-bar></top-bar>
    <router-outlet></router-outlet>
  `
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
