import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../classes/commande';

@Component({
  selector: 'app-commande-admin',
  templateUrl: './commande-admin.component.html',
  styleUrls: ['./commande-admin.component.css']
})
export class CommandeAdminComponent implements OnInit {
  list : Commande[];
  nameUser = localStorage.getItem('name')
  admin:string;
  liv:string;
  n:string;
  p:string;
    constructor(private commandeService : CommandeService ) { }
  
    ngOnInit() {
      this.commandeService.getCommandes().subscribe((res) => {
        this.list = res;
        console.log("listlivraison",this.list);
        
    
      });
      this.admin = localStorage.getItem("admin");
      this.liv = localStorage.getItem("liv");
      this.n=JSON.parse(localStorage.getItem('nom'));
      this.p=JSON.parse(localStorage.getItem('prenom'));
    }

//supprimer  livraison etat"en retour"
    onDelete(_id: string) {
      if (confirm('Voulez-vous vraiment supprimer cet enregistrement ?') === true) {
        this.commandeService.deleteCommande(_id).subscribe((res) => {
          this.ngOnInit();
        });
      }
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
  