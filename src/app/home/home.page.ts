import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 

  slideOpts = {
    initialSlide: 0,
    speed: 800,
    autoplay: true,
  };

  constructor() {}

}
