import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { MessageComponent } from './message/message.component';
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
import { ChartsComponent } from './charts/charts.component';

import { CommandeAdminComponent } from './commande-admin/commande-admin.component';
import { AdminGuard } from './guards/admin.guard';
import { LivreurGuard } from './guards/livreur.guard';



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' },
  {path:'login', component: LoginComponent },
  {path:'message', component: MessageComponent },
  {path: 'forgetPass', component:ForgetPassComponent},
 {path: 'register',component:RegisterComponent, canActivate: [AdminGuard]  },
 {path: 'supClient', component:SupClientComponent, canActivate: [AdminGuard]},
 {path: 'ajoutproduit', component:AjoutProduitComponent , canActivate: [AdminGuard]},
 {path: 'supprimerproduit', component:SupprimerProduitComponent, canActivate: [AdminGuard]},
 {path: 'ajoutsupcategorie', component:CategorieComponent , canActivate: [AdminGuard]},
 {path: 'ajoutLivreur', component:AjoutLivreurComponent, canActivate: [AdminGuard]},
 {path: 'supLiv', component:SupLivreurComponent, canActivate: [AdminGuard]},
 {path: 'accueil', component:AccueilComponent, canActivate: [AdminGuard]},
 {path: 'charts', component:ChartsComponent, canActivate: [AdminGuard]},
 {path: 'commande', component:CommandeAdminComponent},
 {path: 'livCommande',component:CommandeLivComponent, canActivate: [LivreurGuard]},
 {path: 'modifierProfil', component:ModifierProfilLivComponent,  canActivate: [LivreurGuard]},
];


  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
