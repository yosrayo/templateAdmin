import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { User } from '../classes/user';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajout-livreur',
  templateUrl: './ajout-livreur.component.html',
  styleUrls: ['./ajout-livreur.component.css']
})
export class AjoutLivreurComponent implements OnInit {
  phone : string;
  address: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  myForm: FormGroup;
  ReactiveFormModul
  submitted = false;
  user:User;
  users:User[];
  exist:boolean;
  list=[] as any ;
  nameUser = localStorage.getItem('name')
  admin:string;
  liv:string;
  n:string;
  p:string;
  constructor(private router: Router ,private formBuilder: FormBuilder ,private userService:UserService) { }

  
  ngOnInit() {
    this.admin = localStorage.getItem("admin");
    this.liv = localStorage.getItem("liv");
    this.n=JSON.parse(localStorage.getItem('nom'));
    this.p=JSON.parse(localStorage.getItem('prenom'));
    this.user=new User();
    this.user.zone="hhhh";
    this.user.grade="livreur"
    this.userService.getUsers().subscribe((res) => {
      this.list = res;
    });
  }
  

  onSubmit() {
    this.exist=false;
    
      this.submitted = true;

      // stop here if form is invalid
      
      
        this.user.zone="undefid";
        this.user.grade="livreur";
        for(let us of this.list){
        if(this.user.email==us.email){
          alert("email address email exist");
           this.exist=true;
          }
        }
        if(this.exist===false){
this.userService.create(this.user as User).subscribe(user=>{this.users.push(user)});
alert("ajouter avec succés");
        
        alert('SUCCESS!!');
     



     //window.location.replace("login");
     
   
      
}
}

onReset() {
  this.submitted = false;
  this.myForm.reset();
}
c() {
  if(localStorage.getItem('name') === '') {
    return false;
  } else {
    return true;
  }
}
logout() {
  window.location.replace("login");
  localStorage.setItem("name","")
}  
}
