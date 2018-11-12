import { Component, OnInit } from '@angular/core';
import { ModalhomeComponent } from '../modalhome/modalhome.component'
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {SushirollsService} from '../sushirolls.service';
import { Item } from '../models/item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
