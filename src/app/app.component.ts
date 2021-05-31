import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FireBaseProject';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyBMuEaf1TcQrTDcKcBoXSydcRmWrkzHqBM",
      authDomain: "fir-project-c0029.firebaseapp.com",
      projectId: "fir-project-c0029",
      storageBucket: "fir-project-c0029.appspot.com",
      messagingSenderId: "754447501323",
      appId: "1:754447501323:web:ba54c81c3a9cd51b9f1f0e"
    };
    firebase.initializeApp(firebaseConfig);
  }

}
