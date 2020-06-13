import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { User } from '../classes/user';
import {UserService} from '../services/user.service';
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
  ajoutForm: FormGroup;
  ReactiveFormModul
  submitted = false;
  user:User;
  users:User[];
  constructor(private formBuilder: FormBuilder ,private userService:UserService) { }

  
  ngOnInit() {
    this.ajoutForm = this.formBuilder.group({
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  }
  get f() { return this.ajoutForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ajoutForm.invalid) {
        return;
    }else {
      this.user.nom=this.lastName;
      this.user.prenom=this.firstName;
      this.user.adresse=this.address;
      
      this.user.telephone=this.phone;
      this.user.email=this.email;
      this.user.mdp=this.password;
      this.user.zone="undefined";
      this.user.grade="user";
this.userService.create(this.user as User).subscribe(user=>{this.users.push(user)});
alert("ajouter avec succés");
      this.firstName = '';
      this.lastName = '';
      this.email = '';
  
      this.address = '';
      this.phone = '';
      this.password = '';
      this.confirmPassword = '';
      //alert('SUCCESS!!');
    console.log(this.ajoutForm.value);



  //  window.location.replace("login");
    }

}

onReset() {
  this.submitted = false;
  this.ajoutForm.reset();
}
   
}
