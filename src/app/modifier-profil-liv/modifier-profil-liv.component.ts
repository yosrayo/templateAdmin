import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-modifier-profil-liv',
  templateUrl: './modifier-profil-liv.component.html',
  styleUrls: ['./modifier-profil-liv.component.css']
})
export class ModifierProfilLivComponent implements OnInit {
  phone : string;
  address: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  modifierForm: FormGroup;
  ReactiveFormModul
  submitted = false;
  nameUser = localStorage.getItem('name')
  admin:string;
  liv:string;
  n:string;
  p:string;
  users = {} as any ;
  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    //get informations de livreur
    this.users = JSON.parse(localStorage.getItem('user'));
    this.firstName = this.users.nom;
    this.lastName = this.users.prenom;
    this.address = this.users.adresse;
    this.phone = this.users.telephone;
    this.email = this.users.email;
    this.password = this.users.mdp;
    this.confirmPassword = this.users.mdp;
    this.modifierForm = this.formBuilder.group({
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
  this.admin = localStorage.getItem("admin");
  this.liv = localStorage.getItem("liv");
  this.n=JSON.parse(localStorage.getItem('nom'));
  this.p=JSON.parse(localStorage.getItem('prenom'));
  }
  get f() { return this.modifierForm.controls; }

    onSubmit() {
      console.log("rrr");
      this.users.nom=this.firstName;
      this.users.prenom = this.lastName ;
      this.users.adresse=this.address ;
      this.users.telephone=this.phone;
      this.users.email=this.email;
      this.users.mdp=this.password ;
      this.users.mdp=this.confirmPassword;
        this.submitted = true;
        this.userService.updateUser(this.users).subscribe();
        alert('SUCCESS!!');
        localStorage.setItem("user", JSON.stringify(this.users));
        // stop here if form is invalid
       // if (this.modifierForm.invalid) {
            //return;
        //}else {
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.address = '';
          this.phone = '';
          this.password = '';
          this.confirmPassword = '';
         
          alert('SUCCESS!!');
         
        console.log(this.modifierForm.value);
        
       // }
    
    }

    reset(){
      this.firstName = this.users.nom;
    this.lastName = this.users.prenom;
    this.address = this.users.adresse;
    this.phone = this.users.telephone;
    this.email = this.users.email;
    this.password = this.users.mdp;
    this.confirmPassword = this.users.mdp;
      
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
