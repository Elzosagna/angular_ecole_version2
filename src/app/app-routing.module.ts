import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseDetailComponent } from './entreprise-detail/entreprise-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DakarComponent } from './dakar/dakar.component';
import { RufisqueComponent } from './rufisque/rufisque.component';
import { GuediawayeComponent } from './guediawaye/guediawaye.component';
import { PikineComponent } from './pikine/pikine.component';

const routes: Routes = [
  {path:'',component:EntrepriseComponent},
  {path:'entreprise',component:EntrepriseComponent},
  {path:'entreprise/:id',component:EntrepriseDetailComponent},
  {path:'dakar',component:DakarComponent},
  {path:'rufisque',component:RufisqueComponent},
  {path:'guediawaye',component:GuediawayeComponent},
  {path:'pikine',component:PikineComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EntrepriseComponent,EntrepriseDetailComponent,
  PageNotFoundComponent,RufisqueComponent,GuediawayeComponent,PikineComponent,DakarComponent]