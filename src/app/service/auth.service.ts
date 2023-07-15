import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggued: boolean;

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this._isLoggued = false;

    this.afAuth.authState.subscribe((user: any) => {
      if (user) {
        this._isLoggued = true;
      }
    })
  }

  get isLogged() {
    return this._isLoggued;
  }

  set isLogged(value: boolean) {
    this._isLoggued = value;
  }

  login(email: string, pass: string) {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  logout() {
    this.afAuth.signOut();
    this._isLoggued = false;
  }

  currentUser(){
    if(this.afAuth.currentUser){
      return this.afAuth.currentUser;
    }
    return null;
  }

  createAccount(email: string, pass: string) {

    return this.afAuth.isSignInWithEmailLink(email).then(result => {
      if (result) {
        return new Promise((resolve, reject) => {
          reject('User exists');
        })
      } else {
        return this.afAuth.createUserWithEmailAndPassword(email, pass).then(auth => {
          return auth;
        }).catch(error => {
          throw error;
        })
      }
    })

  }

}
