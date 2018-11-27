import { Component, OnInit, TemplateRef, Input} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SushirollsService } from '../sushirolls.service';
import { Item } from '../models/item';
import { CartService } from '../cart.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user;
    public cart = [];
    sushirolls: Item[];
    appetizer: string;
    beverage: string;
    modalRef: BsModalRef;
    searchTerm: string;
    
    constructor(public sushirollsService: SushirollsService, private modalService: BsModalService, private cartService: CartService, public afAuth: AngularFireAuth, public router: Router) {
      this.user = afAuth.user;
    }

  ngOnInit() {
    this.sushirollsService.getSushirolls().subscribe(sushirolls => {
      this.sushirolls = sushirolls;
    });
    this.cartService.currentCart.subscribe(cart => this.cart = cart);
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  selectedSushi(sushirolls){
    let order = {
      main: sushirolls.name,
      price: sushirolls.price,
      appetizer: this.appetizer,
      beverage: this.beverage
    };

    this.cart.push(order);
    this.cartService.addOrder(order);
    console.log(this.cart);
    this.modalRef.hide();
  }

  authenticate() {
    if (localStorage.getItem('isAuthenticated') === 'true')
      return true;
    else {
      this.router.navigate(['']);
    }
  }
}

