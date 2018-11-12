import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {SushirollsService} from '../sushirolls.service';
import { Item } from '../models/item';

// ¿Que esta pasando aqui?
// Estamos inyectando un servicio para poder iterar nuestros diferentes 'sushirolls'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sushirolls: Item[];

  modalRef: BsModalRef;
  
  constructor(public sushirollsService: SushirollsService) { 
  }

ngOnInit() {

  this.sushirollsService.getSushirolls().subscribe(sushirolls => {
    this.sushirolls = sushirolls;
  })

}

}
