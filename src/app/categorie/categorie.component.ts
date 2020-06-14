import { Component, OnInit } from '@angular/core';
import { Categorie } from '../classes/categorie';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  list = [] as any ;
  categorie:Categorie;
  nom_categorie:string;
  categories:Categorie[] ;
  c = [] as any;
  constructor( private categorieService: CategorieService) { }

  ngOnInit() {
   
    this.categorieService .getCategories().subscribe((res) => {
      this.list = res;
    });
  }

  onDelete(_id: string) {
    if (confirm('Voulez-vous vraiment supprimer cet enregistrement ?') === true) {
      this.categorieService.deleteCategorie(_id).subscribe((res) => {
        this.ngOnInit();
      });
    }
  }

  onEdit(emp) {
    console.log(emp);
    this.nom_categorie = emp.categorie.nom_categorie; 
    

  }
  ajout(){
   
    this.categorie.nom_categorie=this.nom_categorie;
   
    this.categorieService.create(this.categorie).subscribe(categorie=>{this.categories.push(categorie)}); 
    alert("ajouter avec succés");
    window.location.replace("");
    }
}
