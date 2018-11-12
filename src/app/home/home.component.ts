import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {SushirollsService} from '../sushirolls.service';
import { Item } from '../models/item';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MenuComponent } from '../modals/menu/menu.component';


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
    
    constructor(public sushirollsService: SushirollsService, private modalService: BsModalService) { 
    }

  ngOnInit() {

    this.sushirollsService.getSushirolls().subscribe(sushirolls => {
      this.sushirolls = sushirolls;
    })
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
}

