import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FooterComponent } from './footer/footer.component';

import { EnteteComponent } from './entete/entete.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { MessageComponent } from './message/message.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { AgmCoreModule } from '@agm/core';
import { GpsComponent } from './gps/gps.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { SupprimerProduitComponent } from './supprimer-produit/supprimer-produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
    RegisterComponent,
    LoginComponent,
   
    FooterComponent,
  
    EnteteComponent,
    ForgetPassComponent,
    MessageComponent,
    AdminAccueilComponent,
    GpsComponent,
    AjoutProduitComponent,
    SupprimerProduitComponent,
    CategorieComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule, ReactiveFormsModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAP5DcZVw6Rl9vMjW-kBtzoTaU5o9rwExw',
      libraries: ['places']
    }),

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
