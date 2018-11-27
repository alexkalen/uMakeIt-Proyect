import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
//item class
import { Item } from '../../models/item';
//service
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit() {
  this.itemService.getItem();
  this.resetForm();

  }

  //Agregar dato y al mismo tiempo dejar vacio los espacios
  onSubmit(itemForm: NgForm){
    if(itemForm.value.$key == null)
      this.itemService.insertItem(itemForm.value);
   //else
    //this.itemService.updateItem(itemForm.value);

  //this.resetForm(itemForm);
}

resetForm(itemForm?: NgForm){
  if(itemForm != null)
  itemForm.reset();
  this.itemService.selectedItem = new Item();
}



}
