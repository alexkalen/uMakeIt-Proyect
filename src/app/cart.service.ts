import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public CartItem = new BehaviorSubject <[]>([]);
  currentCart = this.CartItem.asObservable();

  constructor() { }

  addCart(cart){

    this.CartItem.next(cart)
  }
}
