import { Component, OnInit } from '@angular/core';
import { ModalhomeComponent } from '../modalhome/modalhome.component'
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AngularFireDatabase } from 'angularfire2/database'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sushirolls: any[];

    modalRef: BsModalRef;
    
    constructor(db: AngularFireDatabase) { 
    
      db.list('/sushirolls').valueChanges().subscribe(sushirolls => {
        this.sushirolls = sushirolls;
        console.log(this.sushirolls);
      })
    }
  

  ngOnInit() {

  }

}
