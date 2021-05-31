import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm! : FormGroup;
  errorMessage: string = "Impossible de vous connecter";
  
  constructor(private _AuthService: AuthService,private fb:FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit():void{
    let data = this.signupForm.value
    this._AuthService.createNewUser(data['email'], data['password']).then(
      ()=>{
      console.log("Votre compte a bien été créé");
      this.router.navigate(['auth/signin'])
      }
    );
  }

  


  

}
