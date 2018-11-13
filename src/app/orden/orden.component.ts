import { Component, OnInit, Input} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit{

  public cart = [];
  

  

  constructor(private data: CartService ) { 

    
  }

  ngOnInit() {

    this.data.currentCart.subscribe(cart => this.cart = cart)
    
  }
}


