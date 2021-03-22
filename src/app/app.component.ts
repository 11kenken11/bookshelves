import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyC6kjm42fR3MmUyI0WtD47v7T36am1m70w",
      authDomain: "bookshelves-8f274.firebaseapp.com",
      projectId: "bookshelves-8f274",
      storageBucket: "bookshelves-8f274.appspot.com",
      messagingSenderId: "675587917385",
      appId: "1:675587917385:web:d5ec95e4e216428c462198"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
