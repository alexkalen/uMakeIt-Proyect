import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { Order } from '../app/models/order';
import { map } from 'rxjs/operators'; 

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  db = firebase.firestore();
  orders: Observable<Order[]>;
  ordersCollection: AngularFirestoreCollection<Order>;
  orderDoc: AngularFirestoreDocument<Order>;

  public CartItem = new BehaviorSubject <[]>([]);
  currentCart = this.CartItem.asObservable();

  constructor(public afs: AngularFirestore) { 

    this.ordersCollection = this.afs.collection('orders', ref => ref.orderBy('main', 'asc'));

    this.orders = this.ordersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Order;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
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

  deleteOrder(order: Order) {
    this.orderDoc = this.afs.doc(`orders/${order.id}`);
    this.orderDoc.delete();
  }

  // addCart(cart){
  //   console.log("Se llamo la funcion addCart() dentro del servicio de cart.")
  //   this.CartItem.next(cart)
  // }
}
