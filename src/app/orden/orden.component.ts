import { Component, OnInit, Input} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit{

  public orders = [];

  constructor(private cartService: CartService) { 
    
  }

  ngOnInit() {
    this.cartService.getOrders().subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  deleteOrder(order) {
    this.cartService.deleteOrder(order);
  }
}


