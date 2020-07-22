import { Component, OnInit } from '@angular/core';
import { Produit } from '../classes/produit';
import {ProduitService} from '../services/produit.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-supprimer-produit',
  templateUrl: './supprimer-produit.component.html',
  styleUrls: ['./supprimer-produit.component.css']
})
export class SupprimerProduitComponent implements OnInit {
  list = {} as any ;
 nom_produit : string;
 photo : string;
 quantite : number;
 prix : number;
 produit: Produit;
 produits={}as any;
 nameUser = localStorage.getItem('name')
 admin:string;
 liv:string;
 n:string;
 p:string;
 h:Produit;
 imagePreview: string | ArrayBuffer;
 exist: boolean;
 fb = '';
 downloadURL: Observable<string>;
  constructor(private produitService:ProduitService ,private storage: AngularFireStorage) { }

  ngOnInit() {
    this.produitService .getProduits().subscribe((res) => {
      this.list = res;
    });
    this.h=new Produit();
    this.admin = localStorage.getItem("admin");
    this.liv = localStorage.getItem("liv");
    this.n=JSON.parse(localStorage.getItem('nom'));
    this.p=JSON.parse(localStorage.getItem('prenom'));
  }
  
  onDelete(_id: string) {
    if (confirm('Voulez-vous vraiment supprimer cet enregistrement ?') === true) {
      this.produitService.deleteProduit(_id).subscribe((res) => {
        this.ngOnInit();
      });
    }
  }

  
  onEdit(emp) {
    console.log(emp);
    this.h.id=emp.id;
    this.nom_produit = emp.nom_produit; 
    this.photo = emp.photo;
    this.quantite = emp.quantite;
    this.prix = emp.prix;

  }
  updateP() {
    console.log("idP",this.h.id)
    
    this.h.nom_produit = this.nom_produit; 
    this.h.photo = this.fb;  
    this.h.quantite = this.quantite;
    this.h.prix = this.prix;
    this.produitService.updateproduit(this.h).subscribe((res) => {
     console.log('card');
   window.location.replace("supprimerproduit")
    });
  }
annuler(){
  this.h.id=null;
    this.nom_produit = ''; 
    this.photo = '';
    this.quantite = null;
    this.prix = null;
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

    
 //logout
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
 
 


}
