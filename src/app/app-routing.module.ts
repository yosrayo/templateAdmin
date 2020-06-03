import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { EnteteComponent } from './entete/entete.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { MessageComponent } from './message/message.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';

import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { SupprimerProduitComponent } from './supprimer-produit/supprimer-produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ModifierProfilLivComponent } from './modifier-profil-liv/modifier-profil-liv.component';

import{ LoginComponent} from './login/login.component';
import { AjoutLivreurComponent } from './ajout-livreur/ajout-livreur.component';

import { CommandeLivComponent } from './commande-liv/commande-liv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SupClientComponent } from './sup-client/sup-client.component';
import { SupLivreurComponent } from './sup-livreur/sup-livreur.component';



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' },
  {path:'login', component: LoginComponent },
  {path:'message', component: MessageComponent },
{path:'accueilAdmin', component:AdminAccueilComponent},
  {path:'footer', component: FooterComponent },
 {path: 'entete', component:EnteteComponent},
 {path: 'register', component:RegisterComponent},
 {path: 'forgetPass', component:ForgetPassComponent},
 {path: 'supClient', component:SupClientComponent},
 {path: 'ajoutproduit', component:AjoutProduitComponent},
 {path: 'supprimerproduit', component:SupprimerProduitComponent},
 {path: 'ajoutsupcategorie', component:CategorieComponent},
 {path: 'modifierProfil', component:ModifierProfilLivComponent},
 {path: 'ajoutLivreur', component:AjoutLivreurComponent},
 {path: 'livCommande',
 
  component:CommandeLivComponent},
 {path: 'supLiv', component:SupLivreurComponent},
 {path: 'accueil', component:AccueilComponent},
];


  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
