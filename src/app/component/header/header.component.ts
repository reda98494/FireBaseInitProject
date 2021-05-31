import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  is_Auth!: boolean;
  
  constructor(private _AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.is_Auth = true;
          this.router.navigate(['/books'])
        }else{
          this.is_Auth= false;
          this.router.navigate(['auth/signin'])
        }
      }
    );
  }

  onSignout(){
    this._AuthService.signOutUser()
  }

}
