import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  historys = [];

  constructor(public router: Router, public cartService: CartService) { }

  ngOnInit() {
    this.cartService.getHistories().subscribe(historys => {
      this.historys = historys;
      this.historys.map(history => {
        history.quantity = history.orders.length;
      });
      console.log(this.historys);
    });
  }

  authenticate() {
    if (localStorage.getItem('isAuthenticated') === 'true')
      return true;
    else {
      this.router.navigate(['']);
    }
  }

}
