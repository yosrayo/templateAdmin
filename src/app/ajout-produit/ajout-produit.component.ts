import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../classes/produit';
import {ProduitService} from '../services/produit.service'

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  nom : string;
  categorie : string;
  prix: string;
  qt: string;
  photo: string;
  ajoutForm: FormGroup;
  produit:Produit;
  produits:Produit[];
  submitted = false;
  ReactiveFormModul
  constructor(private formBuilder: FormBuilder, private produitService:ProduitService){ }

  ngOnInit() {
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
      this.prix = '';
      this.qt = '';
      this.photo = '';
      this.categorie = '';
     
      alert('SUCCESS!!');
    console.log(this.ajoutForm.value);
    window.location.replace("accueilAdmin");
    }
  }}
