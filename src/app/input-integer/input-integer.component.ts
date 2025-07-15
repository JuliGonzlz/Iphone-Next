import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Iphone } from '../iphone-list/Iphone';


@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {
  constructor() { }

  @Input()
  iphone!: Iphone;

  @Input()
  cantidad! : number;

  @Output()
  cantidadChange : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  max! : number;

  ngOnInit(): void {}

  upQuantity() {
    if (this.max > this.cantidad) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.maxReached.emit("se alcanzo el max");
    }
  }

  downQuantity() {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  ChangeQuantity(event: { key: any; }, iphone: Iphone) : void {
    console.log(event.key);
  }
}
