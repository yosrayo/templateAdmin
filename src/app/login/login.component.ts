import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { gridLayer } from 'leaflet';
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
  h: any;
  g:any;
  list:User[];
  gr=false;
  constructor(private router: Router  ,private userService:UserService) { }
 

  ngOnInit() {
    localStorage.setItem("liv","liv");
    localStorage.setItem("admin","admin");
    this.userService .getUsers().subscribe((res) => {
      this.list = res;
    });
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
  
 
  if((this.user.email==us.email)&&(this.user.mdp==us.mdp))
 { 
this.b=true;
this.h = us ;
localStorage.setItem("grade",JSON.stringify(this.h.grade));
localStorage.setItem("nom",JSON.stringify(this.h.nom));
localStorage.setItem("prenom",JSON.stringify(this.h.prenom));
localStorage.setItem("user",JSON.stringify(this.h))
localStorage.setItem("name","user");

 }

}
    if(!this.b)
    {
      alert("compte non reconnu!");
    }
 
    if(JSON.parse(localStorage.getItem('grade'))=='livreur')
    {
      localStorage.removeItem("admin")
   window.location.replace("livCommande") 
  
  }else{
    if(JSON.parse(localStorage.getItem('grade'))=='admin'){
      localStorage.removeItem("liv");
      window.location.replace("charts") 
      
    }
  }

}


 
  }
 

