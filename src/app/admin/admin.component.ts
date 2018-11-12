import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sushirolls: any[];

  constructor(db: AngularFireDatabase) { 
    
    db.list('/sushirolls').valueChanges().subscribe(sushirolls => {
      this.sushirolls = sushirolls;
      console.log(this.sushirolls);
    })
  }

  ngOnInit() {
  }

}
