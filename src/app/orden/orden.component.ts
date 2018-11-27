import { Component, OnInit, Input, TemplateRef, AfterViewChecked } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

declare let paypal: any;

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})



export class OrdenComponent implements OnInit, AfterViewChecked{
  
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'access_token$sandbox$wykx82vccsrd96bb$34422bba92d123747123955ae6badabd',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.total, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
  

  public orders = [];
  total : number = 0;
  modalRef: BsModalRef;


  constructor(private cartService: CartService, private modalService: BsModalService, public router: Router) { 

    
  }

  ngOnInit() {
    this.cartService.getOrders(localStorage.getItem('uid')).subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  deleteOrder(order) {
    this.cartService.deleteOrder(order);
  }


  authenticate() {
    if (localStorage.getItem('isAuthenticated') === 'true')
      return true;
    else {
      this.router.navigate(['']);
    }
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);

    for (let i=0; i<this.orders.length; i++){
      this.total = this.total + this.orders[i].price;
    }
  }
}

