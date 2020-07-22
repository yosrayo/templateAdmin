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
import { AgmCoreModule } from '@agm/core';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { SupprimerProduitComponent } from './supprimer-produit/supprimer-produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HttpClientModule, HttpClient , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AjoutLivreurComponent } from './ajout-livreur/ajout-livreur.component';
import { ModifierProfilLivComponent } from './modifier-profil-liv/modifier-profil-liv.component';
import { CommandeLivComponent } from './commande-liv/commande-liv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SupLivreurComponent } from './sup-livreur/sup-livreur.component';
import { SupClientComponent } from './sup-client/sup-client.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthoService } from './services/autho.service';
import { EventService } from './services/event.service';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { CommandeAdminComponent } from './commande-admin/commande-admin.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
  //StorageBucket
} from "@angular/fire/storage";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    EnteteComponent,
    ForgetPassComponent,
    MessageComponent,
    AjoutProduitComponent,
    SupprimerProduitComponent,
    CategorieComponent,
    AjoutLivreurComponent,
    ModifierProfilLivComponent,
    CommandeLivComponent,
    AccueilComponent,
    SupLivreurComponent,
    SupClientComponent,
    ChartsComponent,
    CommandeAdminComponent,
   
  
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule ,
    AngularFireStorageModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAP5DcZVw6Rl9vMjW-kBtzoTaU5o9rwExw',
      libraries: ['places']
    }),

    
  
  ],
  providers: [AuthoService, EventService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
