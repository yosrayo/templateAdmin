import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../classes/produit';
import {ProduitService} from '../services/produit.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  nom : string;
  categorie : string;
  prix: number;
  qt: number;
  photo: string;
  ajoutForm: FormGroup;
  produit={}as any;
  produits:Produit[];
  submitted = false;
  ReactiveFormModul
  nameUser = localStorage.getItem('name')
  admin:string;
  liv:string;
  n:string;
  p:string;
  imagePreview: string | ArrayBuffer;
  constructor(private formBuilder: FormBuilder, private produitService:ProduitService , private httpClient: HttpClient){ }

  ngOnInit() {
    this.admin = localStorage.getItem("admin");
    this.liv = localStorage.getItem("liv");
    this.n=JSON.parse(localStorage.getItem('nom'));
    this.p=JSON.parse(localStorage.getItem('prenom'));
    this.produit=new Produit();
    this.ajoutForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prix: ['', Validators.required],
      qt: ['', Validators.required],
      photo: ['', Validators.required],
      categorie: ['', Validators.required],
      
      
  })
  }

  
  get f() { return this.ajoutForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ajoutForm.invalid) {
        return;
    }else {

      this.produit.nom_produit=this.nom;
      this.produit.prix=this.prix;
      this.produit.categorie=this.categorie;
      this.produit.quantite=this.qt;
      this.produit.photo=this.photo;
      
this.produitService.create(this.produit as Produit).subscribe(produit=>{this.produits.push(produit)});
alert("ajouter avec succés");
      this.nom = '';
      this.prix = null;
      this.qt = null;
      this.photo = '';
      this.categorie = '';
     
      alert('SUCCESS!!');
    console.log(this.ajoutForm.value);
    //window.location.replace("accueilAdmin");
    }
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

  selectImage(event: Event) {

    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result;
    console.log('ima', this.imagePreview);
    };
    reader.readAsDataURL(file);
    
    
    }
    

}
