import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  ReactiveFormModul
  submitted = false;
  user: User;
  users:User[];
  b=false;
  constructor(private router: Router  ,private userService:UserService) { }

  ngOnInit() {
    this.user= new User();
    this.getUsers();
  }
  
  getUsers()
  {
    this.userService.getUsers().subscribe(users => this.users = users);
    console.log(this.users);
  }
  get f() { return this.loginForm.controls; }
  
  
  
  connexion()

  {
   
for(let us of this.users)
{
  console.log("loop");
  if((this.user.email==us.email)&&(this.user.mdp==us.mdp))
 { 
this.b=true;
  


window.location.replace("livreur");
//localStorage.setItem("name","user");

 }

}
    
  
    if(!this.b)
    {
      alert("compte non reconnu!");
    }
  
}


  
  }
 

