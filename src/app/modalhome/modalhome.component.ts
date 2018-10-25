import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-modalhome',
  templateUrl: './modalhome.component.html',
  styleUrls: ['./modalhome.component.css']
})
export class ModalhomeComponent implements OnInit {

  constructor(

    public modalRef : BsModalRef
  ) { }

  ngOnInit() {
  }

}
