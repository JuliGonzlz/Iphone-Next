import { Injectable } from '@angular/core';
import { Iphone } from './iphone-list/Iphone';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IphoneCartService {
  private _cartList: Iphone[] = [];
  cartList: BehaviorSubject<Iphone[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(iphone: Iphone) {
    let item: Iphone | undefined = this._cartList.find((v1) => v1.nombre == iphone.nombre);
    if (!item) {
      this._cartList.push({... iphone});
    } else {
      item.cantidad += iphone.cantidad;
    }
    this.cartList.next(this._cartList);
  }
}