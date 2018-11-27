import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  authenticate() {
    if (localStorage.getItem('isAuthenticated') === 'true')
      return true;
    else {
      this.router.navigate(['']);
    }
  }

}
