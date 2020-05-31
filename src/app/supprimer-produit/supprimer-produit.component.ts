import { Component, OnInit } from '@angular/core';
import { Produit } from '../classes/produit';
import {ProduitService} from '../services/produit.service'

@Component({
  selector: 'app-supprimer-produit',
  templateUrl: './supprimer-produit.component.html',
  styleUrls: ['./supprimer-produit.component.css']
})
export class SupprimerProduitComponent implements OnInit {
  list = [] as any ;
 
  constructor(private produitService:ProduitService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe((res) => {
      this.list = res;
    });


  }
 
  
  

}
