import { Component, OnInit, TemplateRef, Input} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {SushirollsService} from '../sushirolls.service';
import { Item } from '../models/item';
import { CartService } from '../cart.service';
import { BsModalService } from 'ngx-bootstrap/modal';



// ¿Que esta pasando aqui?
// Estamos inyectando un servicio para poder iterar nuestros diferentes 'sushirolls'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    sushirolls: Item[];
    modalRef: BsModalRef;
    searchTerm: string;
    public cart = [];
    
    constructor(public sushirollsService: SushirollsService, private modalService: BsModalService, private data: CartService) { 
    }

  ngOnInit() {

    this.sushirollsService.getSushirolls().subscribe(sushirolls => {
      this.sushirolls = sushirolls;
    })
    this.data.currentCart.subscribe(cart => this.cart = cart)
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  selectedSushi(sushirolls){
    alert( sushirolls.name + " Added to cart!")
    this.cart.push(sushirolls.name);
  }
}

