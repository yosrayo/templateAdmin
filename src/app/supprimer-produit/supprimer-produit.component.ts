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

  constructor(private produitService:ProduitService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe((res) => {
      this.list = res;
    });
   ;
   


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
    this.nom_produit = emp.nom_produit; 
    this.photo = emp.photo;
    this.quantite = emp.quantite;
    this.prix = emp.prix;

  }
  
 
  
 



}
