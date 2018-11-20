import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from './models/item';
import { Observable } from 'rxjs/Observable';

//Este es el servicio para inyector los sushirolls desde la base de datos

@Injectable({
  providedIn: 'root'
})
export class SushirollsService {
  sushirollsCollection: AngularFirestoreCollection<Item>;
  sushirolls: Observable<Item[]>;


  constructor(public afs: AngularFirestore) { 
    this.sushirolls = this.afs.collection('sushirolls').valueChanges();
  }

  getSushirolls(){
    return this.sushirolls;
  }
}
 
