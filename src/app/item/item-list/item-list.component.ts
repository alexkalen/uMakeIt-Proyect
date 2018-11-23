import { Component, OnInit } from '@angular/core';
//service
import { ItemService } from '../../item.service';
//class
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
   /* this.itemService.getItem()
    .snapshotChanges().subscribe(item => {
      this.itemList=[];
      item.forEach(elemento => {
        let x = elemento.payload.toJSON();
        x["$key"] = elemento.key;
        this.itemList.push(x as Item);
      })
    }) */

  }
 /* onEdit(item: Item){
    this.itemService.selectedItem = Object.assign({},item);
}
//REVISAR SI SIRVE ASI, O CAMBIAR KEY
onDelete($key: string){
  this.itemService.deleteItem($key);
}
*/

}
