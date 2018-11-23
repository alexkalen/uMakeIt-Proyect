import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import {SushirollsService} from '../sushirolls.service';
import { Item } from '../models/item';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sushirolls: Item[];
 
  modalRef: BsModalRef;

  searchTerm: string;
  
  constructor(public itemsService: ItemService) { }

ngOnInit() {

  this.itemsService.getSushirolls().subscribe(sushirolls => {
  this.sushirolls = sushirolls;
  })

}


}
