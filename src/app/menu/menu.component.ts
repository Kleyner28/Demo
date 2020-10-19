import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {  

slideOpts = {
    initialSlide: 0,
    speed: 800,
    autoplay: true,
  };
    
lista: Array <any>=[
  {
    title: "Noticias",    
  }
];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

}
