import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;
  ReactiveFormModul
  submitted = false;
  
  constructor(private router: Router , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
     
  });
  
 
    this.user= new User();
  }
  get f() { return this.loginForm.controls; }
  connexion()
  {
    this.submitted = true;
   
     
    if((this.loginForm.invalid)||(this.user.email=="admin@gmail.com")||(this.user.mdp=="admin"))
    {
     
window.location.replace("accueilAdmin");


    } else
    {
      alert("compte non reconnue!");
      
    }
    
  }
 
}
