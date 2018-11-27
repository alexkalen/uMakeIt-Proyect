import { Injectable } from '@angular/core';
import { Item } from '../app/models/item';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
 
  itemsCollection: AngularFirestoreCollection<Item>;
  sushirolls: Observable<Item[]>;
  db = firebase.firestore();

 // itemList: AngularFireList<any>;
  selectedItem: Item = new Item();
 

 // constructor(public afs: AngularFirestore,private firebase : AngularFireDatabase) { 
  constructor(public afs: AngularFirestore){
    this.sushirolls = this.afs.collection('sushirolls').valueChanges();
  }

  getSushirolls(){
    return this.sushirolls;
  }

  //Para obtener los productos de la base de datos, coleccion de productos
  getItem(){
    return this.sushirolls;
    //return this.itemsCollection =  this.sushirolls.collection('Items');
}

//Agregar item a la lista
insertItem(item: Item){
    this.db.collection("sushirolls").doc().set({
    description: item.description,
    image: item.image,
    name: item.name,
    price: item.price,
  })
}

//REVISAR SI FUNCIONA CON ID O $KEY
//Actualizar item o editar
/*

updateItem(item: Item){

  this.itemsCollection.update(item.id, {
    description: item.description,
    image: item.image,
    name: item.name,
    price: item.price,
  });
}
*/

}
