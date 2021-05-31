import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{


  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise(
      (resolve, reject)=>{
        firebase.default.auth().onAuthStateChanged(
          (user)=>{
            if(user){
              resolve(true)
            }else{
              this.router.navigate(['auth/signin']);
              resolve(false)
            }
          }
        );
      }
    );
    
  }

  // canDeactivate()

  

}
