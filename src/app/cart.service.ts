import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { Order } from '../app/models/order';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  orders: Observable<Order[]>;
  db = firebase.firestore();

  public CartItem = new BehaviorSubject <[]>([]);
  currentCart = this.CartItem.asObservable();

  constructor(public afs: AngularFirestore) { 
    this.orders = this.afs.collection('orders').valueChanges();
  }

  getOrders() {
    return this.orders;
  }

  addOrder(order: Order) {
    this.db.collection("orders").doc().set({
      main: order.main,
      appetizer: order.appetizer,
      beverage: order.beverage,
      price: order.price
    });
  }

  // addCart(cart){
  //   console.log("Se llamo la funcion addCart() dentro del servicio de cart.")
  //   this.CartItem.next(cart)
  // }
}
