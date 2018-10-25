import { Component, OnInit } from '@angular/core';
import { ModalhomeComponent } from '../modalhome/modalhome.component'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

    modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(){
    this.modalRef = this.modalService.show(ModalhomeComponent);

  }
  

  ngOnInit() {

  }

}
