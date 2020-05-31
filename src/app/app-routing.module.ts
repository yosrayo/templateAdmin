import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { EnteteComponent } from './entete/entete.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { MessageComponent } from './message/message.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { GpsComponent } from './gps/gps.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { SupprimerProduitComponent } from './supprimer-produit/supprimer-produit.component';
import { CategorieComponent } from './categorie/categorie.component';

import{ LoginComponent} from './login/login.component';



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' },
  {path:'login', component: LoginComponent },
  {path:'message', component: MessageComponent },
{path:'accueilAdmin', component:AdminAccueilComponent},
  {path:'footer', component: FooterComponent },
 {path: 'entete', component:EnteteComponent},
 {path: 'register', component:RegisterComponent},
 {path: 'forgetPass', component:ForgetPassComponent},
 {path: 'gps', component:GpsComponent},
 {path: 'ajoutproduit', component:AjoutProduitComponent},
 {path: 'supprimerproduit', component:SupprimerProduitComponent},
 {path: 'ajoutsupcategorie', component:CategorieComponent},
 
];


  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
