import { Component, OnInit } from '@angular/core';
import { Produit } from '../classes/produit';
import {ProduitService} from '../services/produit.service'

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
  constructor(private produitService:ProduitService) { }

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
    this.h.photo = this.photo;  
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
    localStorage.setItem("name","")
  }
 
 


}
