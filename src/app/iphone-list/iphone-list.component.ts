import { Component, OnInit } from '@angular/core';
import { Iphone } from "./Iphone";
import { IphoneCartService } from '../iphone-cart.service';
import { IphoneDataService } from '../iphone-data.service';

@Component({
  selector: 'app-iphone-list',
  standalone: false,
  templateUrl: './iphone-list.component.html',
  styleUrl: './iphone-list.component.scss'
})

export class IphoneListComponent implements OnInit {
  iphones11: Iphone[] = [
    {
      nombre: "Iphone 11",
      tipo : "Comun (64GB)",
      precio : 300000,
      stock : 3,
      imagen : "assets/img/ipsone11.jpg",
      promocion : false,
      cantidad : 0
    },
    {
      nombre: "Iphone 13",
      tipo : "Pro (128GB)",
      precio : 400000,
      stock : 0,
      imagen : "assets/img/ipsone11.jpg",
      promocion : false,
      cantidad : 0
    },
    {
      nombre: "Iphone 12",
      tipo : "Pro Max (254GB)",
      precio : 450000,
      stock : 11000,
      imagen : "assets/img/ipsone11.jpg",
      promocion : true,
      cantidad : 0
    }
  ]
  

  constructor(private cart: IphoneCartService, private iphoneDataService: IphoneDataService) {}

  ngOnInit(): void {}

  addToCart(iphone: Iphone) : void {
    this.cart.addToCart(iphone);
    iphone.stock -= iphone.cantidad;
    iphone.cantidad = 0;
  }

  maxReached(m: string) {
    alert(m);
  }
}
