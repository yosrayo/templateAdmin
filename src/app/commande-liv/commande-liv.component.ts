import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../classes/commande';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';


@Component({
  selector: 'app-commande-liv',
  templateUrl: './commande-liv.component.html',
  styleUrls: ['./commande-liv.component.css']
})
export class CommandeLivComponent implements OnInit {
list : Commande[];
l : User[];
nameUser = localStorage.getItem('name')
admin:string;
liv:string;
n:string;
p:string;
selectedEtat: string = '';
etat:string;
id:number;
date:string;
commande = {} as any;
commandes : Commande[];
region: string;
d:number;
  constructor(private userService:UserService, private commandeService : CommandeService ) { }

  ngOnInit() {
 this.userService.getUsers().subscribe((res) => {
      this.l = res;
  });
   

    this.commandeService.getCommandes().subscribe((res) => {
      this.list = res;
      console.log("listCommande",this.list);
      
    });
    //navbar 
    this.admin = localStorage.getItem("admin");
    this.liv = localStorage.getItem("liv");
    this.n=JSON.parse(localStorage.getItem('nom'));
    this.p=JSON.parse(localStorage.getItem('prenom'));
  }


  //cacher
  c() {
    if(localStorage.getItem('name') === '') {
      return false;
    } else {
      return true;
    }
  }
  //logout 
  logout() {
    window.location.replace("login");
    localStorage.setItem("name","")
  }

  //select etat..
  selectChangeHandler (event , etat) {
    
    //update the ui
    this.selectedEtat = event.target.value;
    console.log("ggg", this.selectedEtat);
    this.commandeService. updateEtat(etat).subscribe();
    
  }
  
  reg(id:number){
    for(let i=0 ; i>this.list.length;i++){
    
    for(let us of this.l ){
    if(us.id==id)
    this.region=us.adresse;
   
  }
  }
  }

 
  
}
