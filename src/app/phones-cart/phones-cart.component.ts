import { Component, OnInit } from '@angular/core';
import { IphoneCartService } from '../iphone-cart.service';
import { Iphone } from '../iphone-list/Iphone';

@Component({
  selector: 'app-phones-cart',
  standalone: false,
  templateUrl: './phones-cart.component.html',
  styleUrl: './phones-cart.component.scss'
})

export class PhonesCartComponent implements OnInit{
  cartList: Iphone[] | undefined;
  iphone: any;

  constructor(private cart: IphoneCartService){
    cart.cartList.subscribe(c => this.cartList = c);
  }

  ngOnInit(): void {}
}
