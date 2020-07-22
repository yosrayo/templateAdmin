import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../classes/produit';
import {ProduitService} from '../services/produit.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
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
  list = {} as any ;
  imagePreview: string | ArrayBuffer;
  exist: boolean;
  fb = '';
  downloadURL: Observable<string>;
 

    constructor(private formBuilder: FormBuilder,    private storage: AngularFireStorage,
      private produitService:ProduitService , private httpClient: HttpClient){ }

  ngOnInit() {
    this.produitService .getProduits().subscribe((res) => {
      this.list = res;
    });
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
    this.exist=false;
    // stop here if form is invalid
    if (this.ajoutForm.invalid) {
        return;
    }else {
      this.produit.nom_produit=this.nom;
      this.produit.prix=this.prix;
      this.produit.categorie=this.categorie;
      this.produit.quantite=this.qt;
      this.produit.photo = this.fb; 
      for(let us of this.list){
        if(this.produit.photo==us.photo){
          alert("produit existe déjà");
           this.exist=true;
          }
        }
        if(this.exist===false){
this.produitService.create(this.produit as Produit).subscribe(produit=>{});
alert("ajouter avec succés");
      this.nom = '';
      this.prix = null;
      this.qt = null;
      this.photo = '';
      this.categorie = '';
    console.log(this.ajoutForm.value);
    //window.location.replace("accueilAdmin");
    
  }
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
    localStorage.setItem("name","");
    localStorage.removeItem("grade");
  }

  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `Produits/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Produits/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe((url) => {
        if (url) {
          console.log(url);
        }
      });
  }
    

}
