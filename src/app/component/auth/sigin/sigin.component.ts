import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

  signinForm! : FormGroup;
  errorMessage: string = "Impossible de vous connecter";

  constructor(private _AuthService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit():void{
    let data = this.signinForm.value
    this._AuthService.signInUser(data['email'], data['password']).then(
      ()=>{
      console.log("Vous êtes bien connecté!");
      this.router.navigate(['books'])
      }
    );
  }

}
