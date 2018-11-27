import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  signIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/home']);
    console.log('The user is logged in.');
  }

  logOut() {
    this.afAuth.auth.signOut();
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['']);
    console.log('The user has logged out.');
  }
}