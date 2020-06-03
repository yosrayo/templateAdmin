import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
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
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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

  }
  get f() { return this.modifierForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.modifierForm.invalid) {
            return;
        }else {
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.address = '';
          this.phone = '';
          this.password = '';
          this.confirmPassword = '';
          alert('SUCCESS!!');
        console.log(this.modifierForm.value);
        
        }
    
    }

    reser(){
      
    }
}
